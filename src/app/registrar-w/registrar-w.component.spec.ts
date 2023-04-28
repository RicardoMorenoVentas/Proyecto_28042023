import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarWComponent } from './registrar-w.component';

describe('RegistrarWComponent', () => {
  let component: RegistrarWComponent;
  let fixture: ComponentFixture<RegistrarWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
