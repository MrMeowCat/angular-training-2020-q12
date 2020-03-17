import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', this.validatePasswordLength(6)]
  });

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  submit(): void {
    // Помечаем контролы как touched и вызываем валидаторы
    this.form.markAsTouched();
    this.form.updateValueAndValidity();
    if (!this.form.valid) {
      return;
    }
    const {email, password} = this.form.value;
    this.loginService.login(email, password).subscribe((success: boolean) => {
      if (success) {
        this.router.navigate(['/', 'home']);
      } else {
        this.form.controls['password'].setValue('');
        this.form.controls['password'].setErrors({invalidPassword: true});
      }
    });
  }

  validatePasswordLength(minLength: number): ValidatorFn {
    // Уточнение по поводу возвращаемого типа. Объект должен возвращаться,
    // когда есть ошибка, и в него нужно засетать любой ключ с не-false значением
    // иначе функция должна вернуть null, что означает отсутствие ошибки
    return (control: FormControl): ValidationErrors | null => {
      return control.value && control.value.length >= minLength ?
        null : {passwordLength: true};
    }
  }
}
