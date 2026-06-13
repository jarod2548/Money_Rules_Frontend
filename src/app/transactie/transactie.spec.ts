import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transactie } from './transactie';

describe('Transactie', () => {
  let component: Transactie;
  let fixture: ComponentFixture<Transactie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transactie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transactie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
