import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfertilizersComponent } from './addfertilizers.component';

describe('AddfertilizersComponent', () => {
  let component: AddfertilizersComponent;
  let fixture: ComponentFixture<AddfertilizersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfertilizersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfertilizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
