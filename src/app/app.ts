import { isPlatformBrowser } from '@angular/common';
import { Component, computed, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserService } from './services/user.service';
import { LoginResponseDTO } from './models/LoginResponseDTO';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//test
export class App {

  constructor(private userService : UserService, 
              private router : Router,
              @Inject(PLATFORM_ID) private platformId: Object){}

  ngOnInit(){
      if (isPlatformBrowser(this.platformId)) {
         this.userService.authorize()
      .pipe(
        catchError(() => of(null)) // swallow completely here
      )
      .subscribe(user => {
        if (user) {
          this.userData.set(user);
        }
        else{
          this.router.navigate(['/login']);
        }
      });
      }
    }

  protected readonly title = signal('my-angular-app');

  userData = signal<LoginResponseDTO>({naam: '' ,  role:''});

  userName = computed(() => this.userData()?.naam ?? '');
}
