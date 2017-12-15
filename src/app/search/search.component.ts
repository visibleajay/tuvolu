import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: String;
  searchValue: string;
  show: Boolean;

  constructor( public httpService: HttpService, public route: ActivatedRoute ) { }

  ngOnInit() {
    this.searchValue = this.route.snapshot.paramMap.get('text');
    this.getUser(this.searchValue);
  }

  getUser(text: string) {
    // this.show=false;
    this.httpService.getData(text)
                    .subscribe((res)=> this.fetchData(res));
  }

  fetchData(res) {
    this.data = res.map( (data) => {
      return {
        image: data['show']['image'] ? data['show']['image']['medium'] : 'NA',
        link: data['show']['name'].link(data['show']['url']).replace(/^<a/, '$& target="_blank"') || 'NA',
        rating: data['show']['rating'] ? data['show']['rating']['average'] ? data['show']['rating']['average'] : 0  : 0,
        genres: data['show']['genres'],
        summary: data['show']['summary'] || 'Not Available',
      }
    });
  }
}
