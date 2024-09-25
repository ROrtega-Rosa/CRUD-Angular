import { Component, inject } from '@angular/core';
import Product from '../../type/product';
import { ProductService } from '../../services/product.service';
import { SearchPipe } from '../search/search.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SearchPipe,CommonModule,FormsModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[]=[]
   searchText=''
  productService = inject(ProductService)
  ngOnInit(){
    this.productService.getProducts().subscribe(result=>{
      this.products=result;
      console.log(this.products)
    })
  }

  delete(id:string){
    const ok=confirm("¿Desea eliminar este registro?")
    if(ok){
      this.productService.deleteProduct(id).subscribe(result=>{
        alert("Registro borrado correctamente")
        this.products=this.products.filter((p)=>p._id != id)
      })
    }
  }
}
