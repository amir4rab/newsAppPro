import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherManagerComponent } from './weather-manager.component';

describe('WeatherManagerComponent', () => {
  let component: WeatherManagerComponent;
  let fixture: ComponentFixture<WeatherManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
