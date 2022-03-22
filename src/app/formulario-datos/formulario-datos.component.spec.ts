import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDatosComponent } from './formulario-datos.component';

describe('FormularioDatosComponent', () => {
  let component: FormularioDatosComponent;
  let fixture: ComponentFixture<FormularioDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
