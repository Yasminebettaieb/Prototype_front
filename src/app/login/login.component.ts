import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'app/_services/user-auth.service';
import { UserServiceService } from 'app/_services/user-service.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private userService: UserServiceService,
    private userAuthService: UserAuthService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.spinner.show();
    this.userService.login(this.form).subscribe(
      (response: any) => {
        this.spinner.hide();
        this.userAuthService.setRoles(response.roles);
        this.userAuthService.setToken(response.accessToken);
        this.userAuthService.setName(response.username);
        this.userAuthService.setId(response.id);
        console.log(response.username);
        console.log(response.id);
        const role = response.roles[0];
        if (role === 'ROLE_ADMINISTRATEUR') {
          this.router.navigate(['/dashboard']);
        }
        else if (role === 'ROLE_CHEF_SERVICE') {
          this.router.navigate(['/ChefService']);
        }
        else if (role === 'ROLE_RECEPTIONISTE') {
          this.router.navigate(['/receptionniste']);
        }
        else if (role === 'ROLE_MEDECIN') {
          this.router.navigate(['/medecin']);
        }
        else if (role === 'ROLE_TECHNICIAN') {
          this.router.navigate(['/medecin']);
        }
        else if (role === 'ROLE_INFERMIER') {
          this.router.navigate(['/ChefService']);
        }
        this.isLoginFailed = false;
        this.isLoggedIn = true;
      },
      (error) => {
        this.spinner.hide();
        console.log(error)
        this.errorMessage = error.message;
        this.isLoginFailed = true;

      }
    );
  }

}
