import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Mensagem {
  id: number;
  texto?: string;
  imagem?: string;
  video?: string;
  remetente: 'eu' | 'outro';
  timestamp: string;
  dataLabel?: string;
}

@Component({
  selector: 'app-chat-solicitacao',
  templateUrl: './chat-solicitacao.page.html',
  styleUrls: ['./chat-solicitacao.page.scss'],
})
export class ChatSolicitacaoPage implements OnInit {
  solicitacaoId: number | null = null;
  novaMensagem: string = '';
  nomeContato: string = 'Mariana Lima';
  statusContato: string = 'Online';

  mensagens: Mensagem[] = [
    {
      id: 1,
      texto: 'Lorem ipsum dolor sit amet consectetur. Gravida tempor tortor suspendisse sed egestas mi mi ullamcorper. Cras eu turpis mi netus elit. Elit eget elementum nulla est aliquam. Purus amet et cursus et quam.Lorem ipsum dolor sit amet consectetur. Gravida tempor tortor suspendisse sed egestas mi mi ullamcorper. Cras eu turpis mi netus elit. Elit eget elementum nulla est aliquam. Purus amet et cursus et.',
      remetente: 'outro',
      timestamp: '00:00',
      dataLabel: 'Hoje',
    },
    {
      id: 2,
      texto: 'Lorem ipsum dolor sit amet consectetur. Gravida tempor tortor',
      remetente: 'eu',
      timestamp: '00:00',
    },
    {
      id: 3,
      imagem: 'assets/icon/favicon.png',
      video: '',
      remetente: 'eu',
      timestamp: '00:00',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.solicitacaoId = +params['id'];
    });
  }

  enviarMensagem() {
    if (this.novaMensagem.trim()) {
      this.mensagens.push({
        id: this.mensagens.length + 1,
        texto: this.novaMensagem,
        remetente: 'eu',
        timestamp: new Date().toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      });
      this.novaMensagem = '';
    }
  }

  voltar() {
    if (this.solicitacaoId) {
      this.router.navigate(['/detalhes-solicitacao', this.solicitacaoId]);
    } else {
      this.router.navigate(['/solicitacoes-estilista']);
    }
  }

  abrirMenu() {
    // Implementar menu de opções
    console.log('Menu aberto');
  }
}

