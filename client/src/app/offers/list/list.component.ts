import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { OffersService } from 'src/app/shared/services/offers.service';
import { UserService } from 'src/app/shared/services/user.service';

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
  query : Params;

  get isAuth() : Boolean { 
    return this.userService.isAuth;
  }

  constructor(private offerService : OffersService , private userService : UserService , private route : ActivatedRoute  ) { }
  

  ngOnInit(): void {
    this.isLoading = true;
    // this.offerService.nextOffers(0).subscribe(x => { 
    //   x.length === 0 ? this.emptyCatalogue = true : this.catalogue = x;
    //   this.isLoading = false;
    //   console.log(x);
    // })

    this.route.queryParams.pipe(switchMap(x => {
      this.query = x;
        return this.offerService.nextOffers(0,x.brand , x.model);
    })).subscribe(x => { 
      x.length === 0 ? this.emptyCatalogue = true : this.catalogue = x;
      this.isLoading = false;
    })

    console.log(this.query);
    
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
   this.offerService.nextOffers(lastOfferIndeex,this.query.brand,this.query.model).subscribe(res => { 
     this.catalogue = this.catalogue.concat(res);
     this.isOffersLoading = false;
     console.log(res);
     
   })
  }

}
