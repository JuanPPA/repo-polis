import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreosGerenteComponent } from './correos-gerente.component';

describe('CorreosGerenteComponent', () => {
  let component: CorreosGerenteComponent;
  let fixture: ComponentFixture<CorreosGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreosGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorreosGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
