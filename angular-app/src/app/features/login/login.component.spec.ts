import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from 'src/app/features/login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login successfully', () => {
    const router = TestBed.get(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.form.controls['email'].setValue('admin@mail.com');
    component.form.controls['password'].setValue('password');
    component.submit();
    expect(navigateSpy).toHaveBeenCalled();
  });

  it('should not login successfully', () => {
    const router = TestBed.get(Router);
    const navigateSpy = spyOn(router, 'navigate');
    component.form.controls['email'].setValue('admin@mail.com');
    component.form.controls['password'].setValue('1234456');
    component.submit();
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  it('should validate password and return error', () => {
    const passwordControl = component.form.controls['password'];
    passwordControl.setValue('12');
    const result = component.validatePasswordLength(4)(passwordControl);
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    expect(result.passwordLength).toBeTrue();
  });

  it('should validate password', () => {
    const passwordControl = component.form.controls['password'];
    passwordControl.setValue('1234');
    const result = component.validatePasswordLength(4)(passwordControl);
    expect(result).toBeNull();
  });
});
