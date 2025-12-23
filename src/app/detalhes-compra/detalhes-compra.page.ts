import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Compra } from '../minhas-compras/minhas-compras.page';

interface DetalhesCompra {
  id: string;
  data: string;
  descricao: string;
  preco: number;
  metodoPagamento: string;
  bandeira: string;
  numeroCartao: string;
  parcelas: string;
  subtotal: number;
  total: number;
}

@Component({
  selector: 'app-detalhes-compra',
  templateUrl: './detalhes-compra.page.html',
  styleUrls: ['./detalhes-compra.page.scss'],
})
export class DetalhesCompraPage implements OnInit {
  compraId: string | null = null;
  detalhes: DetalhesCompra | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.compraId = this.route.snapshot.paramMap.get('id');
    this.carregarDetalhes();
  }

  carregarDetalhes() {
    // Tenta obter os dados do history state primeiro
    const historyState = window.history.state;
    const compra = historyState?.compra as Compra | undefined;

    if (compra) {
      // Usa os dados passados pela navegação
      this.detalhes = {
        id: compra.id,
        data: compra.data,
        descricao: compra.descricao,
        preco: compra.preco,
        metodoPagamento: compra.metodoPagamento || 'Crédito',
        bandeira: compra.bandeira || 'Mastercard',
        numeroCartao: compra.numeroCartao || '.....998',
        parcelas: compra.parcelas || 'em 2x sem juros',
        subtotal: compra.subtotal || compra.preco,
        total: compra.total || compra.preco,
      };
    } else if (this.compraId) {
      // Fallback: se não houver dados no state, busca pelo ID
      // Em produção, aqui faria uma chamada à API
      this.detalhes = {
        id: this.compraId,
        data: '00/00/0000',
        descricao: 'Montagem de Composição',
        preco: 99.99,
        metodoPagamento: 'Crédito',
        bandeira: 'Mastercard',
        numeroCartao: '.....998',
        parcelas: 'em 2x sem juros',
        subtotal: 99.99,
        total: 99.99,
      };
    }
  }

  goBack() {
    this.router.navigate(['/minhas-compras']);
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  }

  verChat() {
    // TODO: implementar navegação para chat
    console.log('Ver Chat clicked');
  }

  getLogoContainerClass(): string {
    if (!this.detalhes) return '';
    const bandeira = this.detalhes.bandeira?.toLowerCase() || '';
    if (bandeira.includes('visa')) {
      return 'visa';
    }
    return '';
  }

  getLogoClass(): string {
    if (!this.detalhes) return 'mastercard-logo';
    const bandeira = this.detalhes.bandeira?.toLowerCase() || '';
    if (bandeira.includes('visa')) {
      return 'visa-logo';
    } else if (bandeira.includes('mastercard') || bandeira.includes('master')) {
      return 'mastercard-logo';
    }
    return 'mastercard-logo';
  }

  getLogoText(): string {
    if (!this.detalhes) return 'MC';
    const bandeira = this.detalhes.bandeira?.toLowerCase() || '';
    if (bandeira.includes('visa')) {
      return 'VISA';
    } else if (bandeira.includes('mastercard') || bandeira.includes('master')) {
      return 'MC';
    }
    return 'MC';
  }
}
