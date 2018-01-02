import { HttpService } from './service/http.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TuvoluModules, Component, ROUTES } from './tuvolu.constant';
import { TuvoluComponent } from './tuvolu.component';

@NgModule({
  declarations: [
    ...Component
  ],
  imports: [
    ...TuvoluModules,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpService],
  bootstrap: [TuvoluComponent]
})
export class TuvoluModule { }
