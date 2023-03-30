import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVisitasNuevoComponent } from './detalle-visitas-nuevo.component';

describe('DetalleVisitasNuevoComponent', () => {
  let component: DetalleVisitasNuevoComponent;
  let fixture: ComponentFixture<DetalleVisitasNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVisitasNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVisitasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
