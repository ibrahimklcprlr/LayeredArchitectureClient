import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  addToCart(product:Product){
let Item=CartItems.find(c=>c.product.categoryId===product.productId);
if(Item){
  Item.quantity+=1;
}
else{
  let cartItem:CartItem={product:product,quantity:1};
  CartItems.push(cartItem)
}
}
list():CartItem[]{
  return CartItems;
}
removeFromCart(product:Product){
  let Item:CartItem=CartItems.find(c=>c.product.productId==product.productId);
  CartItems.splice(CartItems.indexOf(Item),1);
}
}
