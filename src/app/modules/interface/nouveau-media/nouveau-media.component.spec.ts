import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauMediaComponent } from './nouveau-media.component';

describe('NouveauMediaComponent', () => {
  let component: NouveauMediaComponent;
  let fixture: ComponentFixture<NouveauMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
