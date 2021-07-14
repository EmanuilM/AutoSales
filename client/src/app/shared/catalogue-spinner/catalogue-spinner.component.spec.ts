import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueSpinnerComponent } from './catalogue-spinner.component';

describe('CatalogueSpinnerComponent', () => {
  let component: CatalogueSpinnerComponent;
  let fixture: ComponentFixture<CatalogueSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
