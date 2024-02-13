import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-login-view-unrouted',
  templateUrl: './login-view-unrouted.component.html',
  styleUrls: ['./login-view-unrouted.component.css']
})
export class LoginViewUnroutedComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {

      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', Validators.required]
      });
    
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      console.log(username, password);

      this.sessionService.login(username, password).subscribe(
        (response) => {
          this.sessionService.setToken(response);
          console.log('Login successful');
          this.router.navigate(['/pacientes']);
        },
        (error) => {
          console.error('Login failed', error);
          // Aquí puedes manejar errores en caso de que falle el inicio de sesión
        }
      );
    }
  }
}
