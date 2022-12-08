import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesadminComponent } from './habilidadesadmin.component';

describe('HabilidadesadminComponent', () => {
  let component: HabilidadesadminComponent;
  let fixture: ComponentFixture<HabilidadesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
