import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBookPage } from './photo-book.page';

describe('PhotoBookPage', () => {
  let component: PhotoBookPage;
  let fixture: ComponentFixture<PhotoBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
