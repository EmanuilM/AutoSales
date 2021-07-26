import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IOffer } from 'src/app/shared/interfaces/offer';
import { IUser } from 'src/app/shared/interfaces/user';
import { OffersService } from 'src/app/shared/services/offers.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : IUser;
  offers : IOffer;
  isLoading : Boolean = false;
  constructor(private userService : UserService , private offerService : OffersService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getCurrentUser().subscribe(x => {
      this.user = x;
    })
    this.offerService.getUserOffers().subscribe(x => { 
     this.offers = x;
     console.log(this.offers);
     
    })
  }

}
