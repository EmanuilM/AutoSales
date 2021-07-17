import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { OffersService } from 'src/app/services/offers.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {
  catalogue = [];
  emptyCatalogue : boolean;
  isOffersLoading : boolean;
  isLoading : boolean;

  get isAuth() : Boolean { 
    return this.userService.isAuth;
  }

  constructor(private offerService : OffersService , private userService : UserService  ) { }
  

  ngOnInit(): void {
    this.isLoading = true;
    this.offerService.nextOffers(0).subscribe(x => { 
      x.length === 0 ? this.emptyCatalogue = true : this.catalogue = x;
      this.isLoading = false;
      console.log(x);
    })
  }



  onScroll() { 
    console.log('scrolled');
    timer(270).subscribe(x => { 
      this.isOffersLoading = true;
      this.loadNextOffers();
    })
  }


  loadNextOffers() {
    const lastOfferIndeex = this.catalogue.length;
   this.offerService.nextOffers(lastOfferIndeex).subscribe(res => { 
     this.catalogue = this.catalogue.concat(res);
     this.isOffersLoading = false;
     console.log(res);
     
   })
  }

}
