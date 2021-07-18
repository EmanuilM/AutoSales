import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { OffersService } from 'src/app/services/offers.service';
import { IOffer } from 'src/app/shared/interfaces/offer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm : FormGroup;
  submitted = false;
  offerID : string;

  constructor(private fb : FormBuilder , private offerService : OffersService , private router : ActivatedRoute) { 

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
    this.router.params.subscribe(x => this.offerID = x['id']);
    console.log(this.offerID);
    
    
    this.offerService.getOfferDetails(this.offerID)
    .pipe(first())
    .subscribe(x => this.editForm.patchValue(x))

   
    
  }

  edit() { 
    this.submitted = true;
  }

}
