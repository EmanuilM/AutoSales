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
export class ListComponent implements OnInit {
  catalogue = [];
  isOffersLoading: boolean;
  isLoading: boolean = false;;
  query: Params;
  offersSearch = []


  get isAuth(): Boolean {
    return this.userService.isAuth;
  }

  constructor(private offerService: OffersService, private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.isLoading = true;
    this.route.queryParams.pipe(switchMap(x => {
    this.query = x;
    this.offersSearch = Object.keys(this.query);

      return this.offerService.nextOffers(0, x)
    })).subscribe(x => {
      this.catalogue = x;
      this.isLoading = false;
    },
    error => console.log(error)
    )

    

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
    this.offerService.nextOffers(lastOfferIndeex,this.query).subscribe(res => {
      this.catalogue = this.catalogue.concat(res);
      this.isOffersLoading = false;
      console.log(res);
    })
  }




}
