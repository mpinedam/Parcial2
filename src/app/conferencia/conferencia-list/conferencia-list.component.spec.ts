/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { conferenciaListComponent } from './conferencia-list.component';

describe('conferenciaListComponent', () => {
  let component: conferenciaListComponent;
  let fixture: ComponentFixture<conferenciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ conferenciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(conferenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
