import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosEditarComponent } from './livros-editar.component';

describe('LivrosEditarComponent', () => {
  let component: LivrosEditarComponent;
  let fixture: ComponentFixture<LivrosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
