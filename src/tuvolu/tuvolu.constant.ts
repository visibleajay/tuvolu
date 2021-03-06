
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';
import { MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import {NgReduxModule} from '@angular-redux/store';

export const TuvoluModules = [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    StarRatingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgReduxModule
];

import { TuvoluComponent } from './tuvolu.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

export const Component = [
    TuvoluComponent,
    SearchComponent,
    HomeComponent,
    SearchDataComponent,
    SearchBarComponent
];

import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

export const ROUTES: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'search', 
    component: SearchComponent,
    canActivate: [AuthGuard]
  },{
    path: 'home',
    component: HomeComponent
  }];