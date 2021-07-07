import { HttpClient } from '@angular/common/http';
import { Component,  Input,  OnInit } from '@angular/core';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  constructor(private http : HttpClient , private offerService : OffersService) {}

  ngOnInit(): void {
  }

  create(data:any) :any { 
    this.offerService.createOfferHandler(data).subscribe(x => {
      console.log(x);
    })
    console.log(data);
  }

}
