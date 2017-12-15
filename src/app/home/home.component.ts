import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public router: Router) {}

  getData(text: string) {
    this.router.navigate(['search', text ]);
  }
}
