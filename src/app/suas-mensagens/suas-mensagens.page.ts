import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Mensagem {
  id: string;
  titulo: string;
  data: string;
  status: 'pendente' | 'respondida';
  preview: string;
  conteudo: string;
}

@Component({
  selector: 'app-suas-mensagens',
  templateUrl: './suas-mensagens.page.html',
  styleUrls: ['./suas-mensagens.page.scss'],
})
export class SuasMensagensPage implements OnInit {
  mensagens: Mensagem[] = [
    {
      id: '1',
      titulo: 'Título',
      data: '16/03/2023',
      status: 'pendente',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      id: '2',
      titulo: 'Título',
      data: '16/03/2023',
      status: 'respondida',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      id: '3',
      titulo: 'Título',
      data: '16/03/2023',
      status: 'respondida',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/menu']);
  }

  verResposta(mensagem: Mensagem) {
    this.router.navigate(['/ver-resposta', mensagem.id], {
      state: { mensagem },
    });
  }

  getStatusColor(status: string): string {
    return status === 'pendente' ? '#FFC107' : '#4CAF50';
  }

  novaMensagem() {
    this.router.navigate(['/fale-conosco']);
  }
}
