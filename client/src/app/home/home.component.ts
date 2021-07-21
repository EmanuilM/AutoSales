import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OffersService } from '../shared/services/offers.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  get isAuth() : Boolean { 
    return this.userService.isAuth;
  }
  searchOffers : FormGroup;
  constructor(private userService : UserService , private fb : FormBuilder , private offerService : OffersService , private router : Router) { 
    this.searchOffers = fb.group({
      brand : ['Any' , [Validators.required] , []],
      model : ['Any' , [] , []],
    })
  }
 

  ngOnInit(): void {
   
  }

  search(data) { 
    this.router.navigate(['/offers/list']);
    console.log(data);
    this.offerService.search(data.brand , data.model).subscribe(x => { 
      console.log(x);
    })
  }

}
