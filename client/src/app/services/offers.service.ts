import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reduceEachTrailingCommentRange } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  fileName = ''

  constructor(private http: HttpClient) { }

  createOfferHandler(data : any) : Observable<any> { 
    return this.http.post<any>('/api/offers/create' , data);
  }

  catalogueOffers() : Observable<any> { 
    return this.http.get<any>('/api/offers/catalogue');
  }

  nextOffers(lastOffersID) : Observable<any> { 
    return this.http.get<any>(`/api/offers/next?lastOffersID=${lastOffersID}`);
  }

  getOfferDetails(id) : Observable<any> { 
    return this.http.get<any>('/api/offers/catalogue/' + id);
  }

  
}
