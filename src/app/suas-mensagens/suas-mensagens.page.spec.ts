import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuasMensagensPage } from './suas-mensagens.page';

describe('SuasMensagensPage', () => {
  let component: SuasMensagensPage;
  let fixture: ComponentFixture<SuasMensagensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuasMensagensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
