import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, map, merge, Observable, pipe, tap } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  
  Users:any[]=[];
  //create a Observable - event emitter

 //1.
  myObservable = new Observable((observer)=>{
    observer.next([1,2,3,4,6])
  }) // only one argument can be passed

  ofObservable= of(1,2,3,4,5);
  twinofObservable=of([4,5,6,7,8],2,3,4)

  Fromobservable= from("gello");
  //argument can be a single iterable object or a promise

  constructor(){
   this.ofObservable.subscribe(
    (data)=>console.log(data),
   ),
   this.Fromobservable.subscribe(
    (data)=>console.log(data),
   )

   }

    //mappedObservable = this.myObservable.pipe(
   /*   tap(console.log),
     map((data:any)=>data.map((items:any)=>items*2))
  ).subscribe(result=>console.log(result)); */
  ///
 
  filterObaervable= this.ofObservable.pipe(
    filter((data:any)=>data>3)
  ).subscribe(result=>console.log(result));


  mergeObservable=merge()




 

  //mergeObservable= merge(this.myObservable,this.ofObservable,this.Fromobservable);
 //combine multiple observables



    //MergeMap





  //pipe is used to chain multiple operators together

  //tap operator - for debugging
  //tap(console.log) - will print the data in the console





   //observable will only emit data if subscriber is there

   //provide subscriber for observable

    getdetails(){

    //observer ,event listener
    /*  this.myObservable.subscribe((val:any)=>{ // callback function that going to handle next event
     
        this.Users=val; */

       
      

  /*    }); */



   } 

   
   

    /*  getdetails(){
      this.myObservable.subscribe()  
       } */
}

//settimeout to view handling streaming  data .

//of operator
//---------------------------------------

/* myObservable = of(1,2,3,4,5,6,7) */
//can pass multiple arrays as arguments

//emitting the complete array as it is , not emit each element

//from operator
//-----------------------------------

//unlike of operator , it iterate and emmits each element one by one
//we should pass iterable as argument , 23 will show errpro
//we can pass promise as an argument






