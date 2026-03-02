import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesTransacties } from './lees-transacties';

describe('LeesTransacties', () => {
  let component: LeesTransacties;
  let fixture: ComponentFixture<LeesTransacties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeesTransacties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeesTransacties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
