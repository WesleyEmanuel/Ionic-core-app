import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Compra {
  id: string;
  data: string;
  descricao: string;
  preco: number;
  metodoPagamento?: string;
  bandeira?: string;
  numeroCartao?: string;
  parcelas?: string;
  subtotal?: number;
  total?: number;
}

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.page.html',
  styleUrls: ['./minhas-compras.page.scss'],
})
export class MinhasComprasPage implements OnInit {
  compras: Compra[] = [
    {
      id: '123456',
      data: '00/00/0000',
      descricao: 'Montagem de Composição',
      preco: 99.99,
      metodoPagamento: 'Crédito',
      bandeira: 'Mastercard',
      numeroCartao: '.....998',
      parcelas: 'em 2x sem juros',
      subtotal: 99.99,
      total: 99.99,
    },
    {
      id: '123457',
      data: '00/00/0000',
      descricao: 'Atualização de Guarda Roupa',
      preco: 149.99,
      metodoPagamento: 'Crédito',
      bandeira: 'Visa',
      numeroCartao: '.....123',
      parcelas: 'em 3x sem juros',
      subtotal: 149.99,
      total: 149.99,
    },
    {
      id: '123458',
      data: '00/00/0000',
      descricao: 'Consultoria de Estilo',
      preco: 199.99,
      metodoPagamento: 'Débito',
      bandeira: 'Mastercard',
      numeroCartao: '.....456',
      parcelas: 'à vista',
      subtotal: 199.99,
      total: 199.99,
    },
    {
      id: '123459',
      data: '00/00/0000',
      descricao: 'Montagem de Composição',
      preco: 99.99,
      metodoPagamento: 'Crédito',
      bandeira: 'Mastercard',
      numeroCartao: '.....789',
      parcelas: 'em 2x sem juros',
      subtotal: 99.99,
      total: 99.99,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/menu']);
  }

  verDetalhes(compra: Compra) {
    this.router.navigate(['/detalhes-compra', compra.id], {
      state: { compra },
    });
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  }
}
