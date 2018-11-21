import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPopInComponent } from './option-pop-in.component';

describe('OptionPopInComponent', () => {
  let component: OptionPopInComponent;
  let fixture: ComponentFixture<OptionPopInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionPopInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionPopInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
