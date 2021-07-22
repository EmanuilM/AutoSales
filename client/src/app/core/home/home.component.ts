import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IOffer } from '../../shared/interfaces/offer';
import { OffersService } from '../../shared/services/offers.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  get isAuth() : Boolean { 
    return this.userService.isAuth;
  }
  offers : IOffer;
  searchOffers : FormGroup;
  constructor(private userService : UserService , private fb : FormBuilder , private offerService : OffersService , private router : Router) { 
    this.searchOffers = fb.group({
      brand : ['Any' , [Validators.required] , []],
      model : ['Any' , [] , []],
    })
  }
 

  ngOnInit(): void {
    this.offerService.getLastOffers().subscribe(x => { 
      this.offers = x;
      console.log(this.offers);
    })
  }

  search(data) { 
    const query = {};
    if(data.brand !== "Any") { 
      Object.assign(query,{brand:data.brand});
    }
    if(data.model !== "Any") { 
      Object.assign(query,{model:data.model});
    }
    this.router.navigate(['/offers/list'] , { queryParams: query });
  }

}
