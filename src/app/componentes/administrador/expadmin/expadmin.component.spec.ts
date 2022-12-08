import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpadminComponent } from './expadmin.component';

describe('ExpadminComponent', () => {
  let component: ExpadminComponent;
  let fixture: ComponentFixture<ExpadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
