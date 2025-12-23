import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  selectedProfile: 'client' | 'stylist' = 'client';
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSelectProfile(profile: 'client' | 'stylist') {
    this.selectedProfile = profile;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (!this.email || !this.password) {
      return;
    }

    this.isLoading = true;
    
    // Login mockado - aceita qualquer email e senha
    this.authService.loginMock(this.email, this.password, this.selectedProfile).subscribe({
      next: () => {
        this.isLoading = false;
        // Navega para a home após login bem-sucedido
        this.router.navigate(['/home']);
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

}
