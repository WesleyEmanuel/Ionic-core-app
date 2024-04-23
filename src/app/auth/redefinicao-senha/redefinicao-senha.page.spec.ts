import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RedefinicaoSenhaPage } from './redefinicao-senha.page';

describe('RedefinicaoSenhaPage', () => {
  let component: RedefinicaoSenhaPage;
  let fixture: ComponentFixture<RedefinicaoSenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinicaoSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
