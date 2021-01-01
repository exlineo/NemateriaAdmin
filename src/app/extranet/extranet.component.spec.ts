import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExtranetComponent } from './extranet.component';

describe('ExtranetComponent', () => {
  let component: ExtranetComponent;
  let fixture: ComponentFixture<ExtranetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtranetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
