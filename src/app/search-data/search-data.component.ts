import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.scss']
})
export class SearchDataComponent implements OnInit {

  @Input() info;

  constructor() { }

  ngOnInit() {
  }

}
