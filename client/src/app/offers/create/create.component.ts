import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffersService } from '../../services/offers.service';
import { UploadService } from '../../services/upload.service';
import * as carsData from '../../shared/carsData.json';



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



  
  
  constructor(
    private http: HttpClient,
    private offerService: OffersService,
    private fb: FormBuilder,
    private uploadService : UploadService,
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
      description: ['', [Validators.required, Validators.maxLength(3000)], []],
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
    console.log(this.brands);
  }
  
  getModels(brand) { 
    this.models = Object.values(this.currentCarsData[brand])
    console.log(this.models);
  }


  get f() { return this.createOfferForm.controls; }

  create(data: any): any {
    this.submitted = true;
    if (this.createOfferForm.invalid) { return; }
    const promises = [];
    const links: any[] =  []
    for (let i = 0; i < this.files.length; i++) {
      promises.push(this.uploadService.upload(this.files[i]).toPromise());
    }
    Promise.all(promises)
    .then(res => { 
      data.imageURLs = res.map(x => x.url);
      data.imageIds = res.map(x => x.public_id);
      console.log(data.imageIds);
      
       this.offerService.createOfferHandler(data).subscribe(x => {
        console.log(x);
      })
      
    })

    // subscribe(res => console.log(res) , err => console.log(err)
    // err.error.message
    
  }

  selectImages(event : any)  { 
    this.files = event.target.files;
  }

}
