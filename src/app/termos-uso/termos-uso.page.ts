import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termos-uso',
  templateUrl: './termos-uso.page.html',
  styleUrls: ['./termos-uso.page.scss'],
})
export class TermosUsoPage {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/menu']);
  }
}
