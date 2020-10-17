import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountManagerComponent } from './acount-manager.component';

describe('AcountManagerComponent', () => {
  let component: AcountManagerComponent;
  let fixture: ComponentFixture<AcountManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
