import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffer } from '../shared/interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  fileName = ''

  constructor(private http: HttpClient) { }

  createOfferHandler(data : Object) : Observable<IOffer> { 
    return this.http.post<IOffer>('/api/offers/create' , data);
  }

  catalogueOffers() : Observable<IOffer> { 
    return this.http.get<IOffer>('/api/offers/catalogue');
  }

  nextOffers(lastOffersID) : Observable<any> { 
    return this.http.get<any>(`/api/offers/next?lastOffersID=${lastOffersID}`);
  }

  getOfferDetails(id) : Observable<IOffer> { 
    return this.http.get<IOffer>('/api/offers/catalogue/' + id);
  }

  edit(id,body) : Observable<any> { 
    return this.http.post<any>('/api/offers/edit/' + id , body , {withCredentials : true});
  }

 

  
}
