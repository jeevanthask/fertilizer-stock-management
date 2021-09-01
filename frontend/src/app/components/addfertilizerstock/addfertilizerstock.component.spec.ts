import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfertilizerstockComponent } from './addfertilizerstock.component';

describe('AddfertilizerstockComponent', () => {
  let component: AddfertilizerstockComponent;
  let fixture: ComponentFixture<AddfertilizerstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfertilizerstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfertilizerstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
