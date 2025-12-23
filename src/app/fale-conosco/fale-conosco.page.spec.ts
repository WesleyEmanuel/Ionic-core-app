import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaleConoscoPage } from './fale-conosco.page';

describe('FaleConoscoPage', () => {
  let component: FaleConoscoPage;
  let fixture: ComponentFixture<FaleConoscoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FaleConoscoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
