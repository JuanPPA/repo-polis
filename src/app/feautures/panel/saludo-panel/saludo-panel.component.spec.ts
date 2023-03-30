import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoPanelComponent } from './saludo-panel.component';

describe('SaludoPanelComponent', () => {
  let component: SaludoPanelComponent;
  let fixture: ComponentFixture<SaludoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
