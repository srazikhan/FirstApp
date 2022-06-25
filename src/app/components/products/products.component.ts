import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:any[]=[];
  todayClass:string = 'javascript123'
  constructor() {
    this.getProductList();
  }

  ngOnInit(): void {
  }

  getProductList(){
    this.productList = [
       {productId:1,productName:'laptop',productDescription:'hehjh',productPrice:2500,status:'active'},
       {productId:2,productName:'Mobile',productDescription:'hi mobile',productPrice:5000,status:'inActive'},
       {productId:3,productName:'xyz',productDescription:'hi xyy',productPrice:5000,status:'inActive'},
    ]
    setTimeout(() => {
      this.productList[1].productName = 'Sajjad hello';
    }, 9000);
  }
  
  trackProducts(index:number,item:any){
    return item.productId
  }
}
