import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueFertilizerComponent } from './issue-fertilizer.component';

describe('IssueFertilizerComponent', () => {
  let component: IssueFertilizerComponent;
  let fixture: ComponentFixture<IssueFertilizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueFertilizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueFertilizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
