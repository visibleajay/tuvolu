import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  showInformation: JSON;
  searchValue: string;
  loadingData: Boolean;
  subscribe: Subscription;

  constructor( public httpService: HttpService, public route: ActivatedRoute ) { }

  ngOnInit() {
    this.searchValue = this.route.snapshot.paramMap.get('text');
    this.getUser(this.searchValue);
  }

  getUser(text: string) {
    this.loadingData = true;
    this.subscribe = this.httpService.getData(text)
                    .subscribe((res)=> this.fetchData(res));
  }

  fetchData(res) {
    this.showInformation = res.map( (info) => {
      return {
        image: info['show']['image'] ? info['show']['image']['medium'] : 'NA',
        link: info['show']['name'].link(info['show']['url']).replace(/^<a/, '$& target="_blank"') || 'NA',
        rating: info['show']['rating'] ? info['show']['rating']['average'] ? info['show']['rating']['average'] : 0  : 0,
        genres: info['show']['genres'],
        summary: info['show']['summary'] || 'Not Available',
      }
    });
    this.loadingData = false;
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
