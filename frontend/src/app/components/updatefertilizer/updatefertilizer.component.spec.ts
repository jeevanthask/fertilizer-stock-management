import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefertilizerComponent } from './updatefertilizer.component';

describe('UpdatefertilizerComponent', () => {
  let component: UpdatefertilizerComponent;
  let fixture: ComponentFixture<UpdatefertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefertilizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
