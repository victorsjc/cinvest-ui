import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
  <div class="container">
  <div class="row">
  <div class="col-md-6 offset-md-3">
    <router-outlet></router-outlet>
  </div>
  </div>
  </div>
  `,
  styles: []
})
export class LoginLayoutComponent {}