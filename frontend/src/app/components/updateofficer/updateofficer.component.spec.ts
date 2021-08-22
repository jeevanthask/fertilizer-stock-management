import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateofficerComponent } from './updateofficer.component';

describe('UpdateofficerComponent', () => {
  let component: UpdateofficerComponent;
  let fixture: ComponentFixture<UpdateofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateofficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
