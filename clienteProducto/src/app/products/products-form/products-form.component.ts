import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Product from '../../type/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent {

formBuilder=inject(FormBuilder)
productService=inject(ProductService)

router= inject(Router)
route=inject(ActivatedRoute)

productsForm: FormGroup= this.formBuilder.group({
  name:['', [Validators.required]],
  mark:['',[Validators.required]],
  typeProduct:['',[Validators.required]],
  date:['',[Validators.required]],
  description:['',[Validators.required]]
})

editProductId:string="";
ngOnInit(){
this.editProductId=this.route.snapshot.params["id"];
if(this.editProductId){
  this.productService.getProduct(this.editProductId).subscribe(result=>{
    this.productsForm.patchValue(result)
  })
}
}

addProduct(){
  if(this.productsForm.invalid){
    this.productsForm.markAllAsTouched();
    alert("rellena todos los campos de forma correcta")
    return;
  }
  const model:Product=this.productsForm.value
  this.productService.addProduct(model).subscribe(result=>{
    alert("Registro enviado correctamente")
    this.router.navigateByUrl("/")
  })
}

updateProduct(){
  if(this.productsForm.invalid){
    this.productsForm.markAllAsTouched();
    alert("rellena todos los campos de forma correcta")
    return;
  }
  const model:Product=this.productsForm.value
  this.productService.updateProduct(this.editProductId,model).subscribe(result=>{
    alert("Registro editado correctamente")
    this.router.navigateByUrl("/")
  })
}


}
