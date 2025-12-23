import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {
  userName = 'Mariana Lima';
  user: User | null = null;
  isStylist = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const sub = this.authService.usuario$.subscribe((usuario) => {
      this.user = usuario;
      if (usuario) {
        this.userName = usuario.nome || 'Mariana Lima';
        // Assumindo que perfil_id 1 = cliente, 2 = estilista (ajustar conforme necessário)
        this.isStylist = usuario.perfil_id === 2;
      }
    });
    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onItemClick(key: string) {
    switch (key) {
      case 'password':
        this.router.navigate(['/alterar-senha']);
        break;
      case 'info':
        this.router.navigate(['/minhas-informacoes']);
        break;
      case 'orders':
        this.router.navigate(['/minhas-compras']);
        break;
      case 'requests':
        this.router.navigate(['/home/solicitacoes-estilista']);
        break;
      case 'style-preferences':
        this.router.navigate(['/preferencias-estilo']);
        break;
      case 'financial':
        this.router.navigate(['/financeiro']);
        break;
      case 'clients':
        this.router.navigate(['/clientes']);
        break;
      case 'contact':
        this.router.navigate(['/suas-mensagens']);
        break;
      case 'terms':
        this.router.navigate(['/termos-uso']);
        break;
      default:
        console.log('Menu item clicked:', key);
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
