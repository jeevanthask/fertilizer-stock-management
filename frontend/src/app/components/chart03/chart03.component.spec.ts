import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart03Component } from './chart03.component';

describe('Chart03Component', () => {
  let component: Chart03Component;
  let fixture: ComponentFixture<Chart03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chart03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
