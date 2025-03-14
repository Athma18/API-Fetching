import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }

   getusers(){
    return this.http.get(this.apiUrl);
   }


}
