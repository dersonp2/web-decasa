import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NPedidosComponent } from './n-pedidos.component';

describe('NPedidosComponent', () => {
  let component: NPedidosComponent;
  let fixture: ComponentFixture<NPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
