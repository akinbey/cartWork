import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  productList:Product[]=[]
product: any;
  decreaseQuantity(product: any) {
    // Çıkarma işlemi
    if (product.quantity && product.quantity > 0) {
      product.quantity -= 1;
    }
  }

  increaseQuantity(product: any) {
    // Toplama işlemi
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity += 1;
    }
  }
  constructor(private productService:ProductService,private cartService:CartService){}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    return this.productService.getAll().subscribe(result=>{
      this.productList=result;
    })
  }
  addCart(product:Product){
    this.cartService.addProductInCart(product);
  }


  // minusCart(productId:number){
  //   let cart = this.productList.find(cart=>cart.productId==productId)
  //   if(cart!=undefined){
  //     return
  //   }
  // }
}
