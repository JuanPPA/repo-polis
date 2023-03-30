import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAsComponent } from './reporte-as.component';

describe('ReporteAsComponent', () => {
  let component: ReporteAsComponent;
  let fixture: ComponentFixture<ReporteAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
