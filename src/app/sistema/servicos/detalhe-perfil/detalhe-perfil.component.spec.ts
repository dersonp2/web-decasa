import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePerfilComponent } from './detalhe-perfil.component';

describe('DetalhePerfilComponent', () => {
  let component: DetalhePerfilComponent;
  let fixture: ComponentFixture<DetalhePerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
