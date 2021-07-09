import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffersService } from '../offers.service';
import { UploadService } from '../upload.service';


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
  data = {};
  
  
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
    })
  }

  ngOnInit(): void {
    this.http.get("/offers/carsData/").subscribe(x => { 
      this.data = x[0].data;
      this.brands = Object.keys(this.data);
    })
  }

  getData(brand) { 
    console.log('GETTING DATA');
    this.models = Object.values(this.data[brand]);
    console.log(this.models);
    
    // this.models = Object.values()
    
  }

  // test(asd : string ) { 
  //   const marki  = { 
  //     "Audi" : [
  //     '100', 
  //     '200', 
  //     '50',
  //     '60',
  //     '80', 
  //     '90', 
  //     'A1', 
  //     'A2', 
  //     'A3', 
  //     'A4', 
  //     'A4 Allroad', 
  //     'A5', 
  //     'A6', 
  //     'A6 Allroad', 
  //     'A7', 
  //     'A8', 
  //     'Cabriolet', 
  //     'Coupe', 
  //     'E-Tron', 
  //     'Q2', 
  //     'Q3', 
  //     'Q5', 
  //     'Q7', 
  //     'Q8', 
  //     'Quattro', 
  //     'R8', 
  //     'RSQ8', 
  //     'Rs3', 
  //     'Rs4', 
  //     'Rs5', 
  //     'Rs6', 
  //     'Rs7 ', 
  //     'S1', 
  //     'S2', 
  //     'S3', 
  //     'S4', 
  //     'S5', 
  //     'S6', 
  //     'S7', 
  //     'S8', 
  //     'SQ5', 
  //     'SQ7', 
  //     'SQ8', 
  //     'Tt', 
  //   ],
  //   "Alfa Romeo" : [
  //     "145",
  //     "146",
  //     "147",
  //     "155",
  //     "156",
  //     "156 sportwagon",
  //     "159",
  //     "159 sportwagon",
  //     "164",
  //     "166",
  //     "33",
  //     "4C",
  //     "75",
  //     "76",
  //     "8C Competizione",
  //     "90",
  //     "Alfetta",
  //     "Berlina",
  //     "Brera",
  //     "Crosswagon q4",
  //     "Giulia",
  //     "Giulietta",
  //     "Gt",
  //     "Gtv",
  //     "MiTo",
  //     "Spider",
  //     "Sprint",
  //     "Stelvio",
  //     "Sud",
  //   ],
  //   "BMW" : [
  //     "114",
  //     "116",
  //     "118",
  //     "120",
  //     "123",
  //     "125",
  //     "130",
  //     "135",
  //     "1500",
  //     "1600",
  //     "1602",
  //     "1800",
  //     "2 Active Tourer",
  //     "2 Gran Coupe",
  //     "2 Gran Tourer",
  //     "2000",
  //     "2002",
  //     "218",
  //     "220 d",
  //     "225",
  //     "228",
  //     "230",
  //     "235",
  //     "240",
  //     "2800",
  //     "315",
  //     "316",
  //     "318",
  //     "320",
  //     "323",
  //     "324",
  //     "325",
  //     "328",
  //     "330",
  //     "335",
  //     "340",
  //     "3gt",
  //     "420",
  //     "428",
  //     "430",
  //     "435",
  //     "440",
  //     "5 Gran Turismo",
  //     "504",
  //     "518",
  //     "520",
  //     "523",
  //     "524",
  //     "525",
  //     "528",
  //     "530",
  //     "530E",
  //     "535",
  //     "540",
  //     "545",
  //     "550",
  //     "628",
  //     "630",
  //     "633",
  //     "635",
  //     "640",
  //     "645",
  //     "650",
  //     "700",
  //     "721",
  //     "723",
  //     "725",
  //     "728",
  //     "730",
  //     "732",
  //     "733",
  //     "735",
  //     "740",
  //     "745",
  //     "750",
  //     "760",
  //     "840",
  //     "850",
  //     "Izetta",
  //     "M Series",
  //     "M Coupe",
  //     "M135",
  //     "M2",
  //     "M3",
  //     "M4",
  //     "M5",
  //     "M6",
  //     "M8",
  //     "X1",
  //     "X2",
  //     "X3",
  //     "X4",
  //     "X5",
  //     "X6",
  //     "X7",
  //     "Z1",
  //     "Z3",
  //     "Z4",
  //     "X8",
  //     "i3",
  //     "i8",
  //   ],
  //   "Bentley" : [
  //     "Arnage",
  //     "Azure",
  //     "Bantyaga",
  //     "Continental",
  //     "Continental gt",
  //     "Flying Spur",
  //     "GT Converible",
  //     "Mulsanne",
  //     "T-series",
  //   ],
  //   "Bugatti" : [
  //     "Chiron",
  //     "Veyron",
  //   ],
  //   "Citroen" : [
  //     "2cv",
  //     "Ax",
  //     "Axel",
  //     "Berlingo",
  //     "Bx",
  //     "C-Zero",
  //     "C-Crosser",
  //     "C-Elysee",
  //     "C1",
  //     "C15",
  //     "C2",
  //     "C3",
  //     "C3 Aircross",
  //     "C3 Picasso",
  //     "C3 pluriel",
  //     "C4 ",
  //     "C4 Aircross",
  //     "C4 Cactus",
  //     "C4 Picasso",
  //     "C5 Cactus",
  //     "C5 Aircross",
  //     "C6",
  //     "C8",
  //     "Cx",
  //     "DS 3 Crossback",
  //     "DS 4 Crossback",
  //     "DS 7 Crossback",
  //     "DS3",
  //     "DS4",
  //     "DS5",
  //     "DS7",
  //     "Ds",
  //     "E-Mehari",
  //     "Evasion",
  //     "Grand C4 Picasso",
  //     "Gsa",
  //     "Gx",
  //     "Ln",
  //     "Nemo",
  //     "Oltcit",
  //     "Saxo",
  //     "Spacetourer",
  //     "Visa",
  //     "Xantia",
  //     "Xm",
  //     "Xsara",
  //     "Xsara picasso",
  //     "Zx",
  //   ]
  //   }
  //   const models = marki[asd];
  //   this.models = models;
  //   console.log(models);
    

  // }

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
