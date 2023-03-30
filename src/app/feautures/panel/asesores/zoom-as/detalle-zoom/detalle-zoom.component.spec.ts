import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleZoomComponent } from './detalle-zoom.component';

describe('DetalleZoomComponent', () => {
  let component: DetalleZoomComponent;
  let fixture: ComponentFixture<DetalleZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
