import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedvehiclesComponent } from './verifiedvehicles.component';

describe('VerifiedvehiclesComponent', () => {
  let component: VerifiedvehiclesComponent;
  let fixture: ComponentFixture<VerifiedvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedvehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
