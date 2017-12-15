import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public httpService: HttpService, public router: Router) {}
  
  ngOnInit() {
  }

  getData(text: string) {
    this.router.navigate(['search', text ]);
    console.log(`Inside getData ${text}`);
    this.httpService.getData(text).subscribe((data) => console.log(data));    
  }
}
