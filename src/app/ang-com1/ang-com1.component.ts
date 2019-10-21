import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ang-com1',
  templateUrl: './ang-com1.component.html',
  styleUrls: ['./ang-com1.component.css']
})
export class AngCom1Component implements OnInit, OnChanges, 
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
 AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor called');
    
   }

  @Input() myValue= "Uxtrendz";

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes:SimpleChanges){
    // console.log('ngOnChanges called');
    console.log(changes);
    // we can also get the current or previous values by the help of ngOnChanges methods
    console.log('ngOnChanges',changes.myValue.currentValue); 
  }
  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  // ngAfterViewInit called after when our component completely initialized. 
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }
  // ngAfterViewChecked render when our view is completely rendered/initialized means whatever 
  //we using in our component and ng-content is completely rendered or initialized
  // then this is called
 
ngAfterViewChecked(){
  console.log('ngAfterViewChecked called');
  }

  // ngOnDestroy called just before when our current component is completely destroy  
  // means when component is removed from DOM
  // use: koi aisa kam jise ham is component me kar rhe hai but next component
  // me hame vo nhi chaiye to ham is hook ka use karte hai.
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  } 
}
