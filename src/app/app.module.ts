import { HttpService } from './service/http.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppModules } from './app.constant';
import { Component } from './app.constant';
import { ROUTES } from './app.constant';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ...Component
  ],
  imports: [
    ...AppModules,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
