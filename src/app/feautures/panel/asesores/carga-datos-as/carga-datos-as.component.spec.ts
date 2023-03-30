import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDatosAsComponent } from './carga-datos-as.component';

describe('CargaDatosAsComponent', () => {
  let component: CargaDatosAsComponent;
  let fixture: ComponentFixture<CargaDatosAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaDatosAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDatosAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
