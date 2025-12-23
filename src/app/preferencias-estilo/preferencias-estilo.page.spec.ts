import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferenciasEstiloPage } from './preferencias-estilo.page';

describe('PreferenciasEstiloPage', () => {
  let component: PreferenciasEstiloPage;
  let fixture: ComponentFixture<PreferenciasEstiloPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenciasEstiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
