import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Transaction {
  diaSemana: string;
  diaNumero: string;
  mes: string;
  valor: number;
  descricao: string;
  nome: string;
  status: 'recebido' | 'a-receber';
}

interface Servico {
  nome: string;
  preco: string;
}

interface DadosBancarios {
  tipoConta: string;
  banco: string;
  agencia: string;
  conta: string;
  digito: string;
}

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {
  selectedTab: 'extrato' | 'tabela' | 'dados' = 'extrato';
  selectedDatePeriod: string = '7 Dias';
  selectedStatus: 'recebidos' | 'a-receber' = 'a-receber';

  datePeriods: string[] = ['Hoje', '7 Dias', '15 Dias', 'Mês', 'Outro'];

  valorTotalAReceber: number = 3000;
  valorTotalRecebido: number = 1000000;

  transactions: Transaction[] = [
    {
      diaSemana: 'SEG',
      diaNumero: '04',
      mes: 'MAR',
      valor: 100,
      descricao: 'Montagem de Composição',
      nome: 'Mariana Lema',
      status: 'a-receber',
    },
    {
      diaSemana: 'SEG',
      diaNumero: '04',
      mes: 'MAR',
      valor: 50,
      descricao: 'Dúvida Rápida',
      nome: 'Vivian Ferreira',
      status: 'recebido',
    },
    {
      diaSemana: 'SEG',
      diaNumero: '04',
      mes: 'MAR',
      valor: 100,
      descricao: 'Indicação de Compras',
      nome: 'Mariana Lema',
      status: 'a-receber',
    },
    {
      diaSemana: 'SEG',
      diaNumero: '04',
      mes: 'MAR',
      valor: 50,
      descricao: 'Organização de Closet',
      nome: 'Vivian Ferreira',
      status: 'recebido',
    },
    {
      diaSemana: 'SEG',
      diaNumero: '04',
      mes: 'MAR',
      valor: 100,
      descricao: 'Indicação de Compras',
      nome: 'Mariana Lema',
      status: 'a-receber',
    },
  ];

  servicos: Servico[] = [
    { nome: 'Montagem de Composição', preco: '' },
    { nome: 'Dúvida Rápida', preco: '' },
    { nome: 'Indicação de Compras', preco: '' },
    { nome: 'Organização de Closet', preco: '' },
    { nome: 'Cuidados com Peça', preco: '' },
  ];

  dadosBancarios: DadosBancarios = {
    tipoConta: '',
    banco: '',
    agencia: '',
    conta: '',
    digito: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/menu']);
  }

  onFilterClick() {
    // Implementar lógica de filtro se necessário
    console.log('Filter clicked');
  }

  selectTab(tab: 'extrato' | 'tabela' | 'dados') {
    this.selectedTab = tab;
  }

  selectDatePeriod(period: string) {
    this.selectedDatePeriod = period;
  }

  selectStatus(status: 'recebidos' | 'a-receber') {
    this.selectedStatus = status;
  }

  get filteredTransactions(): Transaction[] {
    if (this.selectedStatus === 'recebidos') {
      return this.transactions.filter((t) => t.status === 'recebido');
    } else {
      return this.transactions.filter((t) => t.status === 'a-receber');
    }
  }

  formatarValorTotal(valor: number): string {
    // Formata sem decimais para valores totais grandes
    return valor.toLocaleString('pt-BR');
  }

  formatarMoeda(valor: number): string {
    // Para valores redondos, mostra sem decimais; para outros, mostra com decimais
    if (valor % 1 === 0) {
      return `R$ ${valor.toLocaleString('pt-BR')}`;
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(valor);
  }

  salvarPrecos() {
    console.log('Preços salvos:', this.servicos);
    // Implementar lógica de salvamento
  }

  salvarDadosBancarios() {
    console.log('Dados bancários salvos:', this.dadosBancarios);
    // Implementar lógica de salvamento
  }
}
