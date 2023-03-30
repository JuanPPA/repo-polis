import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDatosAsNuevoComponent } from './carga-datos-as-nuevo.component';

describe('CargaDatosAsNuevoComponent', () => {
  let component: CargaDatosAsNuevoComponent;
  let fixture: ComponentFixture<CargaDatosAsNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaDatosAsNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDatosAsNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
