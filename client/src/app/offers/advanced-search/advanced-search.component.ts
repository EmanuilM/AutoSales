import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as carsData from '../../shared/carsData.json';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  advancedSearchForm : FormGroup;
  brands = [];
  models = [];
  currentCarsData = {};

  constructor(private fb : FormBuilder , private router : Router) {
    this.advancedSearchForm = fb.group({
      brand: ['Any', [], []],
      model: ['Any', [], []],
      yearFrom: ['Any', [], []],
      yearTo : ['Any', [], []],
      color: ['Any', [], []],
      power: ['Any', [], []],
      mileage: ['Any', [], []],
      populatedState: ['Any', [], []],
      priceFrom: ['Any', [], []],
      priceTo: ['Any', [], []],
      doors: ['Any', [], []],
      condition: ['Any', [], []],
      transmission: ['Any', [], []],
      engineType: ['Any', [], []],
      category: ['Any', [], []],
    })
   }

  ngOnInit(): void {
    this.currentCarsData = carsData['default'];
    this.brands = Object.keys(this.currentCarsData);
  }

  getModels(brand) { 
    this.models = Object.values(this.currentCarsData[brand]);
  }

  search(data) { 
    const query = {};
    Object.entries(data).map(([x,y]) => { 
      if(y !== "Any") { 
        this.attachFields(x,y,query);
      }
    })
   console.log(data);
   
    console.log(query);
    
    
    this.router.navigate(['/offers/list'] , {queryParams : query});
  }

  private attachFields(field,value,query) { 
      Object.assign(query , {[field] : value});
  }

}
