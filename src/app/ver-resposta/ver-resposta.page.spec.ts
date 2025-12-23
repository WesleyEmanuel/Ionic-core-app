import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerRespostaPage } from './ver-resposta.page';

describe('VerRespostaPage', () => {
  let component: VerRespostaPage;
  let fixture: ComponentFixture<VerRespostaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRespostaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
