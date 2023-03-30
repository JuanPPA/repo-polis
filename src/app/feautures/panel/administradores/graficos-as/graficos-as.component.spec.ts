import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosAsComponent } from './graficos-as.component';

describe('GraficosAsComponent', () => {
  let component: GraficosAsComponent;
  let fixture: ComponentFixture<GraficosAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficosAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
