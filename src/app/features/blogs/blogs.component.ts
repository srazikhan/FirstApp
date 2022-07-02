import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  productList:any[]=[];
  constructor(private router:Router,private priductService:ProductService,private aRoute:ActivatedRoute) {
    this.aRoute.params.subscribe((res:any)=>{
      console.log("*********");
      console.log(res);
    })
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log('ngOnChanges is executed')
  }
  ngOnInit(): void {
    console.log('ngOnInit is executed');
    this.productList = this.priductService.getProducts();
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
  getData(inputData:any){
    console.log(inputData);
    setTimeout(()=>{
      this.router.navigate(['products']);
      //this.router.navigate(['blogs/121/ssss']);
    },3000)
  }

  viewBlogDetails(item:any){
    this.router.navigate(['blogs/blog-details'],{queryParams:{'blogName': item.productName,'blogPrice':item.productPrice}})
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy is executed')
  }
}