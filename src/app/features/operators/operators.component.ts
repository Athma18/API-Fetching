import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {
   Data:any[]=[]
 private myurl="https://jsonplaceholder.typicode.com/users"

 constructor(private http:HttpClient){} 


 
 

  mapoperator():Observable<any>{
     return this.http.get<any>(this.myurl)
  }

  getData(){
    this.mapoperator().subscribe((data)=>{
      
      console.log(data);
    }
     
    )
  } 
}
