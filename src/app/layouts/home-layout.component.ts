import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
<div class="container-scroller">
  <app-navbar></app-navbar>
  <div class="container-fluid page-body-wrapper">
    <app-sidebar></app-sidebar>
    <div class="main-panel">
      <div class="content-wrapper">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class HomeLayoutComponent {}