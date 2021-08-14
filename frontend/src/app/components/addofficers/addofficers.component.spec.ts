import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofficersComponent } from './addofficers.component';

describe('AddofficersComponent', () => {
  let component: AddofficersComponent;
  let fixture: ComponentFixture<AddofficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddofficersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
