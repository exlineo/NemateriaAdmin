import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiltreComponent } from './filtre.component';

describe('FiltreComponent', () => {
  let component: FiltreComponent;
  let fixture: ComponentFixture<FiltreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
