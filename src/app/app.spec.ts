import { TestBed } from '@angular/core/testing';
import { routes } from './app.routes';
import { App } from './app';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
      provideRouter(routes),
      provideHttpClient(),
      importProvidersFrom(FormsModule),
   ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
  const fixture = TestBed.createComponent(App);
  fixture.detectChanges();

  const compiled = fixture.nativeElement as HTMLElement;

  const banner = compiled.querySelector('#banner-name');
  expect(banner).not.toBeNull();
  expect(banner!.textContent).toContain('Money Rulings');
});
});
