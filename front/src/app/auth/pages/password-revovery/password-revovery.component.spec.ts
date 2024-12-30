import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRevoveryComponent } from './password-revovery.component';

describe('PasswordRevoveryComponent', () => {
  let component: PasswordRevoveryComponent;
  let fixture: ComponentFixture<PasswordRevoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordRevoveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordRevoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
