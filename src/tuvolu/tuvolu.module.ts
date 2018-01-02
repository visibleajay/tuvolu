import { HttpService } from './service/http.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TuvoluModules, Component, ROUTES } from './tuvolu.constant';
import { TuvoluComponent } from './tuvolu.component';

import {NgRedux, DevToolsExtension} from '@angular-redux/store';

import { ITuvoluState, rootReducer, INITIAL_STATE } from './core/tuvolu.state';

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
export class TuvoluModule {
  constructor(ngRedux: NgRedux<ITuvoluState>,
              devTools: DevToolsExtension) {
                const storeEnhancers = devTools.isEnabled() ? [ devTools.enhancer() ] : [];
                ngRedux.configureStore(rootReducer, INITIAL_STATE, [], storeEnhancers);
              }
}
