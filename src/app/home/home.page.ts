import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  isStylist: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Se inscreve no observable do usuário para reagir a mudanças (incluindo após login)
    const sub = this.authService.usuario$.pipe(
      map((usuario) => {
        console.log('Usuário atualizado:', usuario);
        return usuario?.perfil_id === 2; // 2 = estilista
      })
    ).subscribe((isStylist) => {
      this.isStylist = isStylist;
      console.log('isStylist atualizado:', this.isStylist);
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onPlusClick() {
    // TODO: ação do botão central (+)
    // Ex: abrir modal, navegar, etc.
  }
}
