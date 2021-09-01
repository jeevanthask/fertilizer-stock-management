import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerstocklistComponent } from './fertilizerstocklist.component';

describe('FertilizerstocklistComponent', () => {
  let component: FertilizerstocklistComponent;
  let fixture: ComponentFixture<FertilizerstocklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerstocklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerstocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
