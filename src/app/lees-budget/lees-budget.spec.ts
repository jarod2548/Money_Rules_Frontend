import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { LeesBudget } from './lees-budget';

describe('LeesBudget', () => {
  let component: LeesBudget;
  let fixture: ComponentFixture<LeesBudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeesBudget],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LeesBudget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});