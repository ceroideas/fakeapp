import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisPage } from './minis.page';

describe('MinisPage', () => {
  let component: MinisPage;
  let fixture: ComponentFixture<MinisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
