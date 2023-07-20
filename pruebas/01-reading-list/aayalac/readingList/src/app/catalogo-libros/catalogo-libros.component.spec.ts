import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoLibrosComponent } from './catalogo-libros.component';

describe('CatalogoLibrosComponent', () => {
  let component: CatalogoLibrosComponent;
  let fixture: ComponentFixture<CatalogoLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoLibrosComponent]
    });
    fixture = TestBed.createComponent(CatalogoLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
