import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() showFilter: boolean = false;
  @Input() backRoute: string = '';
  @Output() backClick = new EventEmitter<void>();
  @Output() filterClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onBackClick() {
    if (this.backRoute) {
      this.router.navigate([this.backRoute]);
    } else {
      this.backClick.emit();
    }
  }

  onFilterClick() {
    this.filterClick.emit();
  }
}



