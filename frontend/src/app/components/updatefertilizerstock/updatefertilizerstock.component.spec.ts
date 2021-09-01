import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefertilizerstockComponent } from './updatefertilizerstock.component';

describe('UpdatefertilizerstockComponent', () => {
  let component: UpdatefertilizerstockComponent;
  let fixture: ComponentFixture<UpdatefertilizerstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefertilizerstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefertilizerstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
