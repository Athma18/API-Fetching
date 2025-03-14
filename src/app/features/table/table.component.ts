import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ApiService } from '../../core/services/api.service';

export interface User{
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
users:any=[]
  
constructor(private apiService: ApiService) {}

ngOnInit(){
  this.getusers();
}
getusers(){
  this.apiService.getusers().subscribe((data) => {
    this.users = Object.values(data).map((user:any)=>({
      name:user.name,
      email:user.email,
      phone:user.phone
      

      
      
    }))
  });
}

}
