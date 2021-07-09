import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm : FormGroup;
  submitted = false;

  constructor(private fb : FormBuilder) { 

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
  }

  edit() { 
    this.submitted = true;
  }

}
