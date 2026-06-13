import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesBudgets } from './leesBudgets';

describe('Budget', () => {
  let component: LeesBudgets;
  let fixture: ComponentFixture<LeesBudgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeesBudgets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeesBudgets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
