import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { OffersService } from 'src/app/shared/services/offers.service';
import { UserService } from 'src/app/shared/services/user.service';
import { IOffer } from 'src/app/shared/interfaces/offer';
import { IUser } from 'src/app/shared/interfaces/user';
import { forkJoin, of } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  carID : string;
  data  : IOffer;
  images = [];
  creator : IUser;
  user : IUser;
  isLoading : boolean;
  constructor(
     private offersService : OffersService , 
     private route : ActivatedRoute ,
     private userService : UserService , 
     private router : Router
     ) { }

  ngOnInit(): void {
    this.isLoading = true;
 
    this.route.params.pipe(switchMap(x => {
      this.carID = x['id'];
      return of([this.offersService.getOfferDetails(this.carID) , this.userService.getCurrentUser() , this.userService.getCreatorData()])
    })).pipe(switchMap(x =>  {
      return forkJoin(x);
    })).subscribe(([data,user,creator]) => {
      this.images = data.imageURLs
      this.data = data;
      this.user = user;
      this.creator = creator;
      this.isLoading = false;
      
    })

    

    

  
  }


  del(id) { 
  const  body = this.data
  this.isLoading = true;
    this.offersService.deleteOffer(id , body).subscribe(x => { 
      this.isLoading = false;
      this.router.navigate(['/']);
    },
    err =>{
      this.isLoading = false;
    }
    )
  }



}
