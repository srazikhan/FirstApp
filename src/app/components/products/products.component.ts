import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { product } from '../../core/models/products';
import { status } from '../../core/enums/status';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  // providers:[ProductService]
})
export class ProductsComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  productList:product[]=[];
  todayClass:string = 'javascript123';
  myPromise:any;
  myPromise2:any = Promise.resolve('hi promise');

  constructor(private priductService:ProductService) {
    this.myPromise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('testing promise');
      },5000)
    });

    this.productList = this.priductService.getProducts();

    setTimeout(() => {
      this.productList[1].productName = 'Sajjad hello';
    }, 9000);
    
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnChanges is executed')
  }
  ngOnInit(): void {
    console.log('ngOnInit is executed')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck is executed')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is executed')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is executed')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit is executed')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is executed')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is executed')
  }
  trackProducts(index:number,item:any){
    return item.productId
  }
}
