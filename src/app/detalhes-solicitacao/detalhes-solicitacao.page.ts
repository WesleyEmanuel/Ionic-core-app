import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitacao } from '../solicitacoes-estilista/solicitacoes-estilista.page';

@Component({
  selector: 'app-detalhes-solicitacao',
  templateUrl: './detalhes-solicitacao.page.html',
  styleUrls: ['./detalhes-solicitacao.page.scss'],
})
export class DetalhesSolicitacaoPage implements OnInit {
  solicitacaoId: number | null = null;
  solicitacao: Solicitacao | null = null;

  // Mock data - em produção viria de um service
  mockSolicitacoes: Solicitacao[] = [
    {
      id: 1,
      data: '00/00/0000',
      tipoServico: 'Montagem de Composição',
      cliente: 'Juliana Silva',
      status: 'em-andamento',
      orcamento: 'R$ 4.000,00',
      pecasFaltam: 'Blusas, jeans, jaquetas',
      coresPreferidas: '',
      estilosPreferidos: 'Romântico, Clássico',
    },
    {
      id: 2,
      data: '00/00/0000',
      tipoServico: 'Duvida Rápida',
      cliente: 'Juliana Silva',
      status: 'em-andamento',
    },
    {
      id: 3,
      data: '00/00/0000',
      tipoServico: 'Indicação de Compras',
      cliente: 'Juliana Silva',
      status: 'em-andamento',
    },
    {
      id: 4,
      data: '00/00/0000',
      tipoServico: 'Organização de Closet',
      cliente: 'Juliana Silva',
      status: 'em-andamento',
    },
    {
      id: 5,
      data: '00/00/0000',
      tipoServico: 'Organização de Closet',
      cliente: 'Juliana Silva',
      status: 'em-andamento',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.solicitacaoId = +params['id'];
      this.loadSolicitacao();
    });
  }

  loadSolicitacao() {
    if (this.solicitacaoId) {
      this.solicitacao =
        this.mockSolicitacoes.find((s) => s.id === this.solicitacaoId) || null;
    }
  }

  verChat() {
    if (this.solicitacaoId) {
      this.router.navigate(['/chat-solicitacao', this.solicitacaoId]);
    }
  }

  montarComposicao() {
    // Implementar lógica para montar composição
    console.log('Montar Composição');
  }

  encerrarSolicitacao() {
    // Implementar lógica para encerrar solicitação
    console.log('Encerrar Solicitação');
    // Após encerrar, voltar para a lista
    this.router.navigate(['/home/solicitacoes-estilista']);
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'todos': 'Todos',
      'em-andamento': 'Em Andamento',
      'finalizados': 'Finalizados',
    };
    return labels[status] || status;
  }
}

