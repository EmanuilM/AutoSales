import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  timer } from 'rxjs';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  catalogue = [];
  notEmptyPost = true;
  notScrolly = true;
  isLoading : boolean;



  constructor(private offerService : OffersService , private http : HttpClient  ) { }

  ngOnInit(): void {
    this.offerService.nextOffers(1).subscribe(x => { 
      this.catalogue = x;
    })

   
  }



  onScroll() { 
    console.log('scrolled');
    timer(270).subscribe(x => { 
      this.isLoading = true;
      this.loadNextOffers();
    })
  }


  loadNextOffers() {
    const lastOfferIndeex = this.catalogue.length;
   this.offerService.nextOffers(lastOfferIndeex).subscribe(res => { 
     this.catalogue = this.catalogue.concat(res);
     this.isLoading = false;
     console.log(res);
     
   })
  }

}
