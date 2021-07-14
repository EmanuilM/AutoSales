import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  carID : string;
  data  : any
  images = [];
  constructor(private offersService : OffersService , private router : ActivatedRoute) { }

  ngOnInit(): void {
   this.router.params.subscribe(x => {
     this.carID = x['id'];
   })
   this.offersService.getOfferDetails(this.carID).subscribe(x => {
     this.data = x;
     this.images = x.imageURLs;
     console.log(this.data);
   })
  }

}
