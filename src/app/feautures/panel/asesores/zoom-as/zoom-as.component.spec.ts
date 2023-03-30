import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomAsComponent } from './zoom-as.component';

describe('ZoomAsComponent', () => {
  let component: ZoomAsComponent;
  let fixture: ComponentFixture<ZoomAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomAsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
