import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionGerenteComponent } from './asignacion-gerente.component';

describe('AsignacionGerenteComponent', () => {
  let component: AsignacionGerenteComponent;
  let fixture: ComponentFixture<AsignacionGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
