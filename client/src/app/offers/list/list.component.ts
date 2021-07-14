import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
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
  constructor(private offerService : OffersService , private http : HttpClient) { }

  ngOnInit(): void {
    this.offerService.nextOffers(1).subscribe(x => { 
      this.catalogue = x;
      console.log(this.catalogue);
    })
  }

  onScroll() { 
    console.log('scrolled');
    timer(300).subscribe(x => { 
      this.loadNextOffers();
    })
  }


  loadNextOffers() {
    const lastOfferIndeex = this.catalogue.length;
   this.offerService.nextOffers(lastOfferIndeex).subscribe(res => { 
     this.catalogue = this.catalogue.concat(res);
     console.log(res);
     
   })
  }

}
