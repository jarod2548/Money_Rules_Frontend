import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesBudget } from './lees-budget';

describe('LeesBudget', () => {
  let component: LeesBudget;
  let fixture: ComponentFixture<LeesBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeesBudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeesBudget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
