import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../core/services/api.service';

export interface IUser{
  name: string;
  email: string;
  phone: number; 
}



@Component({
  selector: 'app-table',
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['name','email','phone'];
users:IUser[]=[]
  
constructor(private apiService: ApiService) {}

ngOnInit(){
   this.getusers();
}
getusers(){
  this.apiService.getusers().subscribe((data) => {
    

      this.users = Object.values(data).map((user:IUser)=>({
      name:user.name,
      email:user.email,
      phone:user.phone
      
    }))
  
  });
}



}
