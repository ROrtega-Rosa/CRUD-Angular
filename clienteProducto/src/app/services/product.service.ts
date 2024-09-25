import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Product from '../type/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="http://localhost:3001"
  httpClient = inject(HttpClient)
  constructor() { }

  getProducts(){
    return this.httpClient.get<Product[]>(this.apiUrl)
  }

  getProduct(id:string){
    return this.httpClient.get<Product>(this.apiUrl+"/"+id)
  }
  addProduct(model:Product){
    return this.httpClient.post<Product>(this.apiUrl, model)
  }
  updateProduct(id:string, model:Product){
    return this.httpClient.put(this.apiUrl+"/"+id,model)
  }
  deleteProduct(id:string){
    return this.httpClient.delete(this.apiUrl+"/"+id)
  }
  
}
