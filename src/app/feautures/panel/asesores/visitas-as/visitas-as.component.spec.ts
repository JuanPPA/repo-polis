import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasAsComponent } from './visitas-as.component';

describe('VisitasAsComponent', () => {
  let component: VisitasAsComponent;
  let fixture: ComponentFixture<VisitasAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitasAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
