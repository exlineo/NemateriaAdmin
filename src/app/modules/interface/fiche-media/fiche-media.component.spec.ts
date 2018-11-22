import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheMediaComponent } from './fiche-media.component';

describe('FicheMediaComponent', () => {
  let component: FicheMediaComponent;
  let fixture: ComponentFixture<FicheMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
