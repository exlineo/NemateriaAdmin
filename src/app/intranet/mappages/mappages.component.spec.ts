import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MappagesComponent } from './mappages.component';

describe('MappagesComponent', () => {
  let component: MappagesComponent;
  let fixture: ComponentFixture<MappagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MappagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MappagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
