import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';
import { MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import {HttpService} from './service/http.service';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SearchDataComponent } from './search-data/search-data.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},{
  path: 'search/:text', 
  component: SearchComponent
},{
  path: 'home',
  component: HomeComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SearchDataComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
