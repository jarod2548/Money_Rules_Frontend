import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate() {
    return this.userService.authorize().pipe(
      map(user => {
        if (user) {
          this.router.navigate(['/home']);
          return false;
        }

        return true;
      }),
      catchError(() => of(true)) // if not logged in → allow login page
    );
  }
}