import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVisitantesZoomComponent } from './listado-visitantes-zoom.component';

describe('ListadoVisitantesZoomComponent', () => {
  let component: ListadoVisitantesZoomComponent;
  let fixture: ComponentFixture<ListadoVisitantesZoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoVisitantesZoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVisitantesZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
