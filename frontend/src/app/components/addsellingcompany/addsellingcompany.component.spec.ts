import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsellingcompanyComponent } from './addsellingcompany.component';

describe('AddsellingcompanyComponent', () => {
  let component: AddsellingcompanyComponent;
  let fixture: ComponentFixture<AddsellingcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsellingcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsellingcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
