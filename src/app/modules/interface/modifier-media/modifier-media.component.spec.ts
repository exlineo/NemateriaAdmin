import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMediaComponent } from './modifier-media.component';

describe('ModifierMediaComponent', () => {
  let component: ModifierMediaComponent;
  let fixture: ComponentFixture<ModifierMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
