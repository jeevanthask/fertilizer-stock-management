import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingcompanieslistComponent } from './sellingcompanieslist.component';

describe('SellingcompanieslistComponent', () => {
  let component: SellingcompanieslistComponent;
  let fixture: ComponentFixture<SellingcompanieslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingcompanieslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingcompanieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
