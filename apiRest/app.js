const express= require('express');
const app= express()
const router= express.Router()
const dbconnect = require('./config');
const ModelProduct= require ('./productsModel')
//cors
const cors = require('cors');
app.use(cors())

//CRUD
router.get("/", async (req,res)=>{
    const respuesta = await ModelProduct.find({})
    res.send(respuesta)
})

router.get("/:id", async (req,res)=>{
    const id= req.params.id;
    const respuesta = await ModelProduct.findById(id)
    res.send(respuesta)
})
router.post("/", async(req,res)=>{
    const body= req.body;
    const respuesta = await ModelProduct.create(body)
    res.send(respuesta)
})
router.put("/:id", async (req,res)=>{
    const body = req.body;
    const id= req.params.id;
    const respuesta = await ModelProduct.findOneAndUpdate({_id:id},body)
    res.send(respuesta)
})
router.delete("/:id", async (req,res)=>{
    const id= req.params.id;
    const respuesta = await ModelProduct.deleteOne({_id:id})
    res.send(respuesta)
})
//RUTAS
app.use(express.json())
app.use(router)
app.listen(3001,()=>{
    console.log("El servidor esta en el puerto 3001")
})
dbconnect();