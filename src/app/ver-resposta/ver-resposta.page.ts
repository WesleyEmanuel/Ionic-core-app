import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../suas-mensagens/suas-mensagens.page';

@Component({
  selector: 'app-ver-resposta',
  templateUrl: './ver-resposta.page.html',
  styleUrls: ['./ver-resposta.page.scss'],
})
export class VerRespostaPage implements OnInit {
  mensagemId: string | null = null;
  mensagem: Mensagem | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.mensagemId = this.route.snapshot.paramMap.get('id');
    this.carregarMensagem();
  }

  carregarMensagem() {
    // Tenta obter os dados do history state primeiro
    const historyState = window.history.state;
    const mensagem = historyState?.mensagem as Mensagem | undefined;

    if (mensagem) {
      this.mensagem = mensagem;
    } else if (this.mensagemId) {
      // Fallback: se não houver dados no state, busca pelo ID
      // Em produção, aqui faria uma chamada à API
      this.mensagem = {
        id: this.mensagemId,
        titulo: 'Título',
        data: '16/03/2023',
        status: 'pendente',
        preview: 'Lorem ipsum dolor sit amet...',
        conteudo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      };
    }
  }

  goBack() {
    this.router.navigate(['/suas-mensagens']);
  }

  getStatusColor(status: string): string {
    return status === 'pendente' ? '#FFC107' : '#4CAF50';
  }
}
