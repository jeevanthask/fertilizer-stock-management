import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FertilizerslistComponent } from './fertilizerslist.component';

describe('FertilizerslistComponent', () => {
  let component: FertilizerslistComponent;
  let fixture: ComponentFixture<FertilizerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FertilizerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FertilizerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
