import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProfileComponent } from './fiche-profile.component';

describe('FicheProfileComponent', () => {
  let component: FicheProfileComponent;
  let fixture: ComponentFixture<FicheProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
