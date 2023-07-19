import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGenderComponent } from './filter-gender.component';

describe('FilterGenderComponent', () => {
  let component: FilterGenderComponent;
  let fixture: ComponentFixture<FilterGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
