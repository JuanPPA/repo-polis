import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdComponent } from './inicio-ad.component';

describe('InicioAdComponent', () => {
  let component: InicioAdComponent;
  let fixture: ComponentFixture<InicioAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
