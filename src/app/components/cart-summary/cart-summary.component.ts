import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
cartItems:CartItem[]=[];
  constructor(private cartService:CartService,
   private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getcart();
  }
getcart(){
  this.cartItems=this.cartService.list();
}
removeCartProduct(product:Product){
  this.cartService.removeFromCart(product);
  this.toastrService.error(product.productName,"Ürün Sepetten Silindi")

}
}