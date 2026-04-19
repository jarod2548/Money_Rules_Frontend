import { Component, computed, Inject, PLATFORM_ID, signal } from '@angular/core';
import { LoginDTO } from '../models/LoginDTO';
import { RegisterDTO } from '../models/RegisterDTO';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, of } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private userService : UserService, 
              private snackBar : MatSnackBar){}

  

  showLogin = signal(true);
  // 🔹 form state (signal)
  login = signal<LoginDTO>({ username: '', wachtwoord: '' });
  loginSubmitted = signal(false);

  // 🔹 Register form state
  register = signal<RegisterDTO>({ username: '', wachtwoord: '', email: '' });
  registerSubmitted = signal(false);

  // ===== Login Validation =====
  loginNaamError = computed(() => {
    if (!this.loginSubmitted()) return '';
    const value = this.login().username;
    if (!value) return 'Naam is verplicht';
    if (value.length < 1) return 'Minimaal 1 karakter(s)';
    return '';
  });

  loginWachtwoordError = computed(() => {
    if (!this.loginSubmitted()) return '';
    const value = this.login().wachtwoord;
    if (!value) return 'Wachtwoord is verplicht';
    if (value.length < 6) return 'Minimaal 6 karakters';
    return '';
  });

  loginFormValid = computed(() =>
    !this.loginNaamError() && !this.loginWachtwoordError()
  );

  // ===== Register Validation =====
  registerNaamError = computed(() => {
    if (!this.registerSubmitted()) return '';
    const value = this.register().username;
    if (!value) return 'Naam is verplicht';
    if (value.length < 1) return 'Minimaal 1 karakter(s)';
    return '';
  });

  registerWachtwoordError = computed(() => {
    if (!this.registerSubmitted()) return '';
    const value = this.register().wachtwoord;
    if (!value) return 'Wachtwoord is verplicht';
    if (value.length < 6) return 'Minimaal 6 karakters';
    return '';
  });

  registerEmailError = computed(() => {
    if (!this.registerSubmitted()) return '';
    const value = this.register().email;
    if (!value) return 'Email is verplicht';
    if (!value.includes('@')) return 'Ongeldig email adres';
    return '';
  });

  registerFormValid = computed(() =>
    !this.registerNaamError() &&
    !this.registerWachtwoordError() &&
    !this.registerEmailError()
  );

  // ===== Update helpers =====
  updateLoginNaam(value: string) {
    this.login.update(l => ({ ...l, username: value }));
  }
  updateLoginWachtwoord(value: string) {
    this.login.update(l => ({ ...l, wachtwoord: value }));
  }

  updateRegisterNaam(value: string) {
    this.register.update(r => ({ ...r, username: value }));
  }
  updateRegisterWachtwoord(value: string) {
    this.register.update(r => ({ ...r, wachtwoord: value }));
  }
  updateRegisterEmail(value: string) {
    this.register.update(r => ({ ...r, email: value }));
  }

  // 🔹 submit
  submitLogin() {
    console.log("starting login")
    this.loginSubmitted.set(true);
    if (!this.loginFormValid()) {
      console.log("wrong login formatted")
      return;
    }

    console.log('Login DTO:', this.login());
    this.userService.login(this.login()).subscribe(resultaat => {
      console.log(resultaat); 
      if(resultaat.length != 0 && resultaat != null){
        //this.router.navigate(["/home"]);
      }
    });
  }
  submitRegister() {
    this.registerSubmitted.set(true);
    if (!this.registerFormValid()) return;
    this.userService.maakAccount(this.register()).subscribe(success => {
  if (success) {
    this.toggleForm();
    this.snackBar.open('Account created', 'Close');
  } else {
    this.snackBar.open('Account creation failed', 'Close');
  }
});
  }

   toggleForm() {
    this.showLogin.update(v => !v);
  }
}
