import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosCrudComponent } from './livros-crud.component';

describe('LivrosCrudComponent', () => {
  let component: LivrosCrudComponent;
  let fixture: ComponentFixture<LivrosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
