import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }
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
}
