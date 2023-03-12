import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddform:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
createProductAddForm(){
this.productAddform=this.formBuilder.group({
productName:["",Validators.required],
unitsInStock:["",Validators.required],
unitPrice:["",Validators.required],
categoryId:["",Validators.required]
})
}
add(){
  if(this.productAddform.valid){
    let productModel=Object.assign({},this.productAddform.value)
    this.productService.add(productModel).subscribe(response=>{
      this.toastrService.success(response.message,"Başarılı")
     
    },responseError=>{
      if(responseError.error.Errors.length){
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
          
        }
      }
    }
    )
    
  }
  else{
    this.toastrService.error("Form Eksik","Dikkat");
    
    
  }

}
}
