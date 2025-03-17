import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-behavior-subject',
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent {

 

}
const subject= new BehaviorSubject(123);

subject.subscribe(console.log)
subject.next(234)