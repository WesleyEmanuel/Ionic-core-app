import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Solicitacao {
  id: number;
  data: string;
  tipoServico: string;
  cliente: string;
  estilistaResponsavel?: string;
  status: 'todos' | 'em-andamento' | 'finalizados';
  orcamento?: string;
  pecasFaltam?: string;
  coresPreferidas?: string;
  estilosPreferidos?: string;
}

@Component({
  selector: 'app-solicitacoes-estilista',
  templateUrl: './solicitacoes-estilista.page.html',
  styleUrls: ['./solicitacoes-estilista.page.scss'],
})
export class SolicitacoesEstilistaPage implements OnInit {
  selectedTab: 'todos' | 'em-andamento' | 'finalizados' = 'todos';

  solicitacoes: Solicitacao[] = [
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

  constructor(private router: Router) {}

  ngOnInit() {}

  selectTab(tab: 'todos' | 'em-andamento' | 'finalizados') {
    this.selectedTab = tab;
  }

  get filteredSolicitacoes(): Solicitacao[] {
    if (this.selectedTab === 'todos') {
      return this.solicitacoes;
    }
    return this.solicitacoes.filter((s) => s.status === this.selectedTab);
  }

  verDetalhes(solicitacao: Solicitacao) {
    this.router.navigate(['/home/detalhes-solicitacao', solicitacao.id]);
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

