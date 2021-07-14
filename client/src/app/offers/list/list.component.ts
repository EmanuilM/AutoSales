import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  catalogue = [];
  constructor(private offerService : OffersService) { }

  ngOnInit(): void {
    this.offerService.catalogueOffers().subscribe(x => { 
      this.catalogue = x;
      console.log(this.catalogue);
    })
  }

}
