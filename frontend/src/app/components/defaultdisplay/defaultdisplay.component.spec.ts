import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultdisplayComponent } from './defaultdisplay.component';

describe('DefaultdisplayComponent', () => {
  let component: DefaultdisplayComponent;
  let fixture: ComponentFixture<DefaultdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
