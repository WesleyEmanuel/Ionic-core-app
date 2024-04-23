import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(
    private authService: AuthService,
    private navController: NavController
  ) {}

  subscriptions: Subscription[] = [];
  ngOnInit(): void {
    setTimeout(() => {
      this.redirect();
    }, 3000); 
  }

  redirect() {
    const sub = this.authService.usuario$.subscribe((usuario) => {
      console.log(usuario)
      if (usuario) {
        this.navController.navigateRoot('/home');
      } else {
        this.navController.navigateRoot('/auth/login');
      }
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
