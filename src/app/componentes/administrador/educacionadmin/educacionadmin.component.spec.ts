import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionadminComponent } from './educacionadmin.component';

describe('EducacionadminComponent', () => {
  let component: EducacionadminComponent;
  let fixture: ComponentFixture<EducacionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
