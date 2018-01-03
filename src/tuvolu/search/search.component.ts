import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {IDataState} from '../core/tuvolu.state';
import { select } from '@angular-redux/store';
import { TuvoluActions } from '../core/tuvolu.actions';

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

  constructor( public tuvoluActions: TuvoluActions ) {}
}
