import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../../models/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
carts: any;
  constructor(public cartService:CartService){}

  cartList:Cart[]=[]
  cartItemList:CartItem[]=[]

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    return this.cartService.getUserCart();
  }
}
