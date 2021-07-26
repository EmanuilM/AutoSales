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
      brand: ['', [], []],
      model: ['', [], []],
      yearFrom: ['', [], []],
      yearTo : ['', [], []],
      color: ['', [], []],
      power: ['', [], []],
      mileage: ['', [], []],
      populatedState: ['', [], []],
      price: ['', [], []],
      doors: ['', [], []],
      condition: ['', [], []],
      transmission: ['', [], []],
      engineType: ['', [], []],
      category: ['', [], []],
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
    console.log(data);
    const query = {};
    if(data.brand !== "Any") { 
      Object.assign(query , {brand : data.brand});
    }
    if(data.model !== "Any") { 
      Object.assign(query , {model : data.model});
    }
    if(data.yearFrom !== "Any") { 
      Object.assign(query , {yearFrom : data.yearFrom});
    }
    if(data.yearTo !== "Any") { 
      Object.assign(query , {yearTo : data.yearTo});
    }
    if(data.power !== "Any") { 
      Object.assign(query , {power : data.power});
    }
    if(data.mileage !== "Any") { 
      Object.assign(query , {mileage : data.mileage});
    }
    if(data.populatedState !== "Any") { 
      Object.assign(query , {populatedState : data.populatedState});
    }
    if(data.price !== "Any") { 
      Object.assign(query , {price : data.price});
    }
    if(data.doors !== "Any") { 
      Object.assign(query , {doors : data.doors});
    }
    if(data.color !== "Any") { 
      Object.assign(query , {color : data.color});
    }
    if(data.condition !== "Any") { 
      Object.assign(query , {condition : data.condition});
    }
    if(data.transmission !== "Any") { 
      Object.assign(query , {transmission : data.transmission});
    }
    if(data.engineType !== "Any") { 
      Object.assign(query , {engineType : data.engineType});
    }
    if(data.category !== "Any") { 
      Object.assign(query , {category : data.category});
    }
    this.router.navigate(['/offers/list'] , {queryParams : query});
  }

}
