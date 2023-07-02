import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCronometroComponent } from './nuevo-cronometro.component';

describe('NuevoCronometroComponent', () => {
  let component: NuevoCronometroComponent;
  let fixture: ComponentFixture<NuevoCronometroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoCronometroComponent]
    });
    fixture = TestBed.createComponent(NuevoCronometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
