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

  it('aantal verhogen', () => {
  const event = {
    target: { value: '5' }
  } as unknown as Event;

  component.updateAantal(event);

  expect(component.transactieData().aantal).toBe(5);
});

it('datum aanpassen', () => {
  const event = {
    target: { value: '2025-01-01' }
  } as unknown as Event;

  component.updateDatum(event);

  expect(component.transactieData().datum).toBe('2025-01-01');
});

it('beschrijving aanpassen ', () => {
  const event = {
    target: { value: 'Test' }
  } as unknown as Event;

  component.updateBeschrijving(event);

  expect(component.transactieData().beschrijving).toBe('Test');
});
it('AantalIsNul_Fout', () => {
  component.transactieData.set({
    aantal: 0,
    datum: '',
    beschrijving: ''
  });

  expect(component.formIsValid()).toBe(false);
});
});
