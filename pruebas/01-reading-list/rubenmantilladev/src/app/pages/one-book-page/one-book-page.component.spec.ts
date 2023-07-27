import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBookPageComponent } from './one-book-page.component';

describe('OneBookPageComponent', () => {
  let component: OneBookPageComponent;
  let fixture: ComponentFixture<OneBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneBookPageComponent]
    });
    fixture = TestBed.createComponent(OneBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
