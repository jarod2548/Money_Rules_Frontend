import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerBudget } from './beheer-budget';

describe('BeheerBudget', () => {
  let component: BeheerBudget;
  let fixture: ComponentFixture<BeheerBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeheerBudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeheerBudget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
