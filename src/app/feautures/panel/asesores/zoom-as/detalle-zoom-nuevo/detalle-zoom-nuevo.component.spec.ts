import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleZoomNuevoComponent } from './detalle-zoom-nuevo.component';

describe('DetalleZoomNuevoComponent', () => {
  let component: DetalleZoomNuevoComponent;
  let fixture: ComponentFixture<DetalleZoomNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleZoomNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleZoomNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
