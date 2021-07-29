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
    brand,
    model,
    yearFrom,
    yearTo,
    color,
    power,
    mileage,
    populatedState,
    priceFrom,
    priceTo,
    doors,
    condition,
    transmission,
    engineType,
    category,
    ) : Observable<any> { 
    let query = '?lastOffersID=' + lastOffersID;
    if(brand) query += `&brand=${brand}`;
    if(model) query += `&model=${model}`;
    if(yearFrom) query += `&yearFrom=${yearFrom}`;
    if(yearTo) query += `&yearTo=${yearTo}`;
    if(color) query += `&color=${color}`;
    if(power) query += `&power=${power}`;
    if(mileage) query += `&mileage=${mileage}`;
    if(populatedState) query += `&populatedState=${populatedState}`;
    if(priceFrom) query += `&priceFrom=${priceFrom}`;
    if(priceTo) query += `&priceTo=${priceTo}`;
    if(doors) query += `&doors=${doors}`;
    if(condition) query += `&condition=${condition}`;
    if(transmission) query += `&transmission=${transmission}`;
    if(engineType) query += `&engineType=${engineType}`;
    if(category) query += `&category=${category}`;
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
