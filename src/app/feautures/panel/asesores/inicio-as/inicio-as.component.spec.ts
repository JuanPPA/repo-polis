import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAsComponent } from './inicio-as.component';

describe('InicioAsComponent', () => {
  let component: InicioAsComponent;
  let fixture: ComponentFixture<InicioAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
