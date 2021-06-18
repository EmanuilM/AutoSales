import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

 register(data:any) : void { 
   this.userService.registerHandler(data).subscribe(x => {
     console.log(data);
   })
 }
}
