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

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Money Rulings');
  });
});
