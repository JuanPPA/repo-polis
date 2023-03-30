import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparacionAsComponent } from './separacion-as.component';

describe('SeparacionAsComponent', () => {
  let component: SeparacionAsComponent;
  let fixture: ComponentFixture<SeparacionAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparacionAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparacionAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
