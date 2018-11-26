import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMediaComponent } from './ajouter-media.component';

describe('AjouterMediaComponent', () => {
  let component: AjouterMediaComponent;
  let fixture: ComponentFixture<AjouterMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
