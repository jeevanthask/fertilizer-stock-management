import { FarmerService } from 'src/app/services/farmer.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefarmerComponent } from './updatefarmer.component';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('UpdatefarmerComponent', () => {
  let component: UpdatefarmerComponent;
  let fixture: ComponentFixture<UpdatefarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatefarmerComponent],
      imports: [HttpClientTestingModule],
      providers: [FarmerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should create', () => {
    const service: FarmerService = TestBed.get(FarmerService);
    expect(service).toBeTruthy();
  });

  it('should have updateFarmer function', () => {
    const service: FarmerService = TestBed.get(FarmerService);
    expect(service.updateFarmer).toBeTruthy();
  });
});
