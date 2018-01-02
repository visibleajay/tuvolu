import { Component } from '@angular/core';
import { HttpService } from '../service/http.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import {IDataState} from '../core/tuvolu.state';
import { select } from '@angular-redux/store';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  @select('data') 
  showInformation$: Observable<IDataState[]>;

  @select('searchText')
  searchValue$: Observable<String>;

  @select('loading')
  loadingData$: Observable<Boolean>;

  constructor( public httpService: HttpService,
               public route: ActivatedRoute ) { }
}
