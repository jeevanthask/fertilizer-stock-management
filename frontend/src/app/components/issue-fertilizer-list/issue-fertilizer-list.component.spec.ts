import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueFertilizerListComponent } from './issue-fertilizer-list.component';

describe('IssueFertilizerListComponent', () => {
  let component: IssueFertilizerListComponent;
  let fixture: ComponentFixture<IssueFertilizerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueFertilizerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueFertilizerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
