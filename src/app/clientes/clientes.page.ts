import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/menu']);
  }
}
