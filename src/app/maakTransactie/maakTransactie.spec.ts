import { ComponentFixture, TestBed } from '@angular/core/testing';

import { maakTransactie } from './maakTransactie';

describe('Transactie', () => {
  let component: maakTransactie;
  let fixture: ComponentFixture<maakTransactie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [maakTransactie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(maakTransactie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
