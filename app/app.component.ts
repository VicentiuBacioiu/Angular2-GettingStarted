import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pm-app',
  template: `
  <div>
    <nav class='navbar navbar-default'>
      <div class='container-fluid'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav navbar-nav'>
          <li><a [routerLink]="['']">Home</a></li>
          <li><a [routerLink]="['products']">Product List</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}