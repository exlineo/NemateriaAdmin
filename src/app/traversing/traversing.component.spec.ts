import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraversingComponent } from './traversing.component';

describe('TraversingComponent', () => {
  let component: TraversingComponent;
  let fixture: ComponentFixture<TraversingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraversingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraversingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
