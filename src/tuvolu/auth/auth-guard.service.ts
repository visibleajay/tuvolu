
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { ITuvoluState } from '../core/tuvolu.state';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor( public ngRedux: NgRedux<ITuvoluState>,
                 public router: Router ) {}
    
    canActivate(): boolean {
        if ( !this.ngRedux.getState().searchText.length ) {
            this.router.navigate(['home']);
            return false;
        }
        return true;
    }
}
