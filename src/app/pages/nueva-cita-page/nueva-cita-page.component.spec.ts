import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCitaPageComponent } from './nueva-cita-page.component';

describe('NuevaCitaPageComponent', () => {
  let component: NuevaCitaPageComponent;
  let fixture: ComponentFixture<NuevaCitaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaCitaPageComponent]
    });
    fixture = TestBed.createComponent(NuevaCitaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
