import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneSepVisitasNuevoComponent } from './gene-sep-visitas-nuevo.component';

describe('GeneSepVisitasNuevoComponent', () => {
  let component: GeneSepVisitasNuevoComponent;
  let fixture: ComponentFixture<GeneSepVisitasNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneSepVisitasNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneSepVisitasNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
