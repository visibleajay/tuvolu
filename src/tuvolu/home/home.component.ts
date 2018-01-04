import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TuvoluActions } from '../core/tuvolu.actions';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public router: Router,
              public actions: TuvoluActions) {}

  getData(text: string) {
    if ( text.length ) {
      this.actions.getData(text);
      this.router.navigate(['search']);
    }
  }
}
