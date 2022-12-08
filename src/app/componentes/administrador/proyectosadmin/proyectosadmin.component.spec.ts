import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosadminComponent } from './proyectosadmin.component';

describe('ProyectosadminComponent', () => {
  let component: ProyectosadminComponent;
  let fixture: ComponentFixture<ProyectosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
