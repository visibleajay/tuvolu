
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';
import { MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

export const TuvoluModules = [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    StarRatingModule,
    MatCardModule,
    MatProgressSpinnerModule
];

import { TuvoluComponent } from './tuvolu.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchDataComponent } from './search-data/search-data.component';

export const Component = [
    TuvoluComponent,
    SearchComponent,
    HomeComponent,
    SearchDataComponent
];

import { Routes } from '@angular/router';

export const ROUTES: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'search/:text', 
    component: SearchComponent
  },{
    path: 'home',
    component: HomeComponent
  }];