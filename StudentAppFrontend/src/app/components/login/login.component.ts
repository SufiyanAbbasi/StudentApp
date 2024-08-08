import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router)

  userObj: any = {
    username: '',
    password: '',
  }

  login() {
    if (this.userObj.username == "admin" && this.userObj.password == "12345") {
      alert("User Login Successfully")
      localStorage.setItem('loginUser', this.userObj.username)
      this.router.navigateByUrl('crud');

    } else {
      alert("Invalid User")
    }
  }


}
