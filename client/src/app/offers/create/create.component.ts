import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OffersService } from '../../shared/services/offers.service';
import { UploadService } from '../../shared/services/upload.service';
import * as carsData from '../../shared/carsData.json';
import * as yearsData from '../../shared/yearsData.json';
import { timer } from 'rxjs';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})




export class CreateComponent implements OnInit {
  createOfferForm: FormGroup;
  submitted = false;
  files = [];
  brands = [];
  models = [];
  currentCarsData = {};
  years = [];
  error : string;
  imagesError : string = '';
  isLoading : boolean = false;

  
  constructor(
    private http: HttpClient,
    private offerService: OffersService,
    private fb: FormBuilder,
    private uploadService : UploadService,
    private router : Router,
  ) {
    this.createOfferForm = fb.group({
      brand: ['', [Validators.required], []],
      model: ['', [Validators.required], []],
      year: ['', [Validators.required], []],
      color: ['', [Validators.required], []],
      power: ['', [Validators.required], []],
      mileage: ['', [Validators.required], []],
      populatedState: ['', [Validators.required], []],
      price: ['', [Validators.required], []],
      doors: ['', [Validators.required], []],
      description: ['', [Validators.required], []],
      condition: ['', [Validators.required], []],
      transmission: ['', [Validators.required], []],
      engineType: ['', [Validators.required], []],
      category: ['', [Validators.required], []],
      image : ['' , Validators.required , []],
    })
  }

  ngOnInit(): void {
    this.currentCarsData = carsData['default'];
    this.brands = Object.keys(this.currentCarsData);
    this.years = yearsData['default']['years'];
  }
  
  
  getModels(brand) { 
    this.models = Object.values(this.currentCarsData[brand]);
  }


  get f() { return this.createOfferForm.controls; }

  create(data: any): any {
    this.submitted = true;
    if(!this.imagesError) {
    if (this.createOfferForm.invalid) { return; }
    const promises = [];
    const links: any[] =  []
    for (let i = 0; i < this.files.length; i++) {
      promises.push(this.uploadService.upload(this.files[i]).toPromise());
    }
    this.isLoading = true;
    Promise.all(promises)
    .then(res => { 
      data.imageURLs = res.map(x => x.url);
      data.imageIds = res.map(x => x.public_id);
      
       this.offerService.createOfferHandler(data).subscribe(movieID => {
        this.isLoading = false;
        this.router.navigate(['/offers/details/' + movieID]);
      },
      error => { 
        this.isLoading = false;
        timer(3000).subscribe(x => this.error = undefined)
        this.error = error.error.message;
      })
      
    })
  }

    
  }

  selectImages(event : any)  { 
    this.files = event.target.files;
    Object.values(this.files).map(x =>  {
      if(!["image/jpg", "image/jpeg", "image/png"].includes(x.type)) { 
        this.imagesError =  'Images should be in jpg/jpeg/png format!'
        return this.imagesError;
      }
      return this.imagesError = '';
    })
  }

}
