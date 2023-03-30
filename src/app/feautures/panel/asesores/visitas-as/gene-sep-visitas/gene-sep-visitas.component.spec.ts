import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneSepVisitasComponent } from './gene-sep-visitas.component';

describe('GeneSepVisitasComponent', () => {
  let component: GeneSepVisitasComponent;
  let fixture: ComponentFixture<GeneSepVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneSepVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneSepVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
