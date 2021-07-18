import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from 'src/app/services/offers.service';
import { IOffer } from 'src/app/shared/interfaces/offer';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  carID : string;
  data  : IOffer;
  images = [];
  user : IUser;
  isLoading : boolean;
  constructor(private offersService : OffersService , private router : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("user" + this.user);
    
   this.router.params.subscribe(x => {
     this.carID = x['id'];
   })
   this.isLoading = true;
   this.offersService.getOfferDetails(this.carID).subscribe(x => {
     this.data = x;
     this.images = x.imageURLs;
     this.isLoading = false;
     console.log(this.data);
   })
  }

}
