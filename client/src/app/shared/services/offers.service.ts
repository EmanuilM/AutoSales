import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  fileName = ''

  constructor(private http: HttpClient) { }

  createOfferHandler(data : Object) : Observable<IOffer> { 
    return this.http.post<IOffer>('/api/offers/create' , data , {withCredentials : true});
  }

  catalogueOffers() : Observable<IOffer> { 
    return this.http.get<IOffer>('/api/offers/catalogue' ,  {withCredentials : true});
  }

  nextOffers(
    lastOffersID,
    queryParams,
    ) : Observable<any> { 
   const query =  Object.entries(queryParams).reduce((a,[name , value]) => {
      a += `&${name}=${value}`
      return a;
    },'?lastOffersID=' + lastOffersID);
    console.log(query);
    
    return this.http.get<any>(`/api/offers/next` + query , {withCredentials : true});
  }

  getOfferDetails(id) : Observable<IOffer> { 
    return this.http.get<IOffer>('/api/offers/catalogue/' + id , {withCredentials : true});
  }

  edit(id,body) : Observable<any> { 
    return this.http.post<any>('/api/offers/edit/' + id , body , {withCredentials : true});
  }

 deleteOffer(id,body) : Observable<any> {
   return this.http.post<any>('/api/offers/delete/' + id , body , {withCredentials : true});
 }

 getLastOffers() : Observable<IOffer> { 
   return this.http.get<IOffer>('/api/offers/lastOffers' , {withCredentials : true});
 }

 getUserOffers() : Observable<IOffer> { 
   return this.http.get<IOffer>('/api/offers/userOffers'  ,  {withCredentials : true});
 }




  
}
