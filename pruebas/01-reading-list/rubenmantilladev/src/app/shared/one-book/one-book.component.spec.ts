import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBookComponent } from './one-book.component';

describe('OneBookComponent', () => {
  let component: OneBookComponent;
  let fixture: ComponentFixture<OneBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneBookComponent]
    });
    fixture = TestBed.createComponent(OneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
