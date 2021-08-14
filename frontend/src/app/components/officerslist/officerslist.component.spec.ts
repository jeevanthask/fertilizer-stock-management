import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerslistComponent } from './officerslist.component';

describe('OfficerslistComponent', () => {
  let component: OfficerslistComponent;
  let fixture: ComponentFixture<OfficerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
