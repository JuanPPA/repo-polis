import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseGerenteComponent } from './base-gerente.component';

describe('BaseGerenteComponent', () => {
  let component: BaseGerenteComponent;
  let fixture: ComponentFixture<BaseGerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseGerenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseGerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
