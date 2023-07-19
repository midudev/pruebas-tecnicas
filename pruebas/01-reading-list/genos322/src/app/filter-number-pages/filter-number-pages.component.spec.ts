import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNumberPagesComponent } from './filter-number-pages.component';

describe('FilterNumberPagesComponent', () => {
  let component: FilterNumberPagesComponent;
  let fixture: ComponentFixture<FilterNumberPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNumberPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterNumberPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
