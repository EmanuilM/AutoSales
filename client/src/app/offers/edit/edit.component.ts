import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { first } from 'rxjs/operators';
import { OffersService } from 'src/app/shared/services/offers.service';
import { IOffer } from 'src/app/shared/interfaces/offer';
import * as carsData from '../../shared/carsData.json';
import * as yearsData from '../../shared/yearsData.json';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm : FormGroup;
  submitted = false;
  offerID : string;
  brands = [];
  models = [];
  currentCarsData = {};
  years = [];
  isLoading : boolean = false;
  error : string;

  constructor(
    private fb : FormBuilder , 
    private offerService : OffersService , 
    private router : ActivatedRoute , 
    private route : Router
    ) { 

    this.editForm = fb.group({
      brand: ['', [Validators.required], []],
      model: ['', [Validators.required], []],
      year: ['', [Validators.required], []],
      color: ['', [Validators.required], []],
      power: ['', [Validators.required], []],
      mileage: ['', [Validators.required], []],
      populatedState: ['', [Validators.required], []],
      price: ['', [Validators.required], []],
      doors: ['', [Validators.required], []],
      description: ['', [Validators.required, Validators.maxLength(3000)], []],
      condition: ['', [Validators.required], []],
      transmission: ['', [Validators.required], []],
      engineType: ['', [Validators.required], []],
      category: ['', [Validators.required], []],
    })
  }

  get f() { return this.editForm.controls; }

  ngOnInit(): void {
    this.currentCarsData = carsData['default'];
    this.brands = Object.keys(this.currentCarsData);
    this.years = yearsData['default']['years'];

    this.router.params.subscribe(x => this.offerID = x['id']);
    
    this.offerService.getOfferDetails(this.offerID)
    .pipe(first())
    .subscribe(x => this.editForm.patchValue(x))

  }


  getModels(brand) { 
    this.models = Object.values(this.currentCarsData[brand])
  }

  edit(body) { 
    this.submitted = true;
    this.isLoading = true;
    this.offerService.edit(this.offerID , body).subscribe(x => {
      this.isLoading = false;
      this.route.navigate(['/offers/details/' + this.offerID]);
    } , error => { 
      this.isLoading = false;
      timer(3000).subscribe(x => this.error = undefined);
      this.error = error.error.message;
    })
  }

}
