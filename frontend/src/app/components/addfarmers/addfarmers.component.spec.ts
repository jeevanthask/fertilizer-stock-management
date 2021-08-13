import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfarmersComponent } from './addfarmers.component';

describe('AddfarmersComponent', () => {
  let component: AddfarmersComponent;
  let fixture: ComponentFixture<AddfarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfarmersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
