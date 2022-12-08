import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoinfoComponent } from './fotoinfo.component';

describe('FotoinfoComponent', () => {
  let component: FotoinfoComponent;
  let fixture: ComponentFixture<FotoinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
