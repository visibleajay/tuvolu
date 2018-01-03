
import { Injectable } from '@angular/core';

import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { ITuvoluState } from './tuvolu.state';

@Injectable()
export class TuvoluActions {

    static ADD_SEARCH_DATA = "ADD_SEARCH_DATA"
    static SEARCH_URL = "SEARCH_URL";
    static UPDATE_LOADING_STATE = 'UPDATE_LOADING_STATE';
    static ADD_TVDATA = "ADD_TVDATA";
    static MAKE_API_REQUEST = "MAKE_API_REQUEST";
    static GET_REQUEST_ERROR = "GET_REQUEST_ERROR";
    static GET_REQUEST_SUCCESS = "GET_REQUEST_SUCCESS";

    constructor(private ngRedux: NgRedux<ITuvoluState>){}

    getData(value: String) {
        this.ngRedux.dispatch(
            this.addSearchString(value)
        );
        this.ngRedux.dispatch(this.updateLoadingData(true));
        this.ngRedux.dispatch(this.makeAPIRequest(value));
        // this.makeAPIRequest(value).subscribe(data => this.updateData(data));
    }

    // updateData(data) {
    //     // this.ngRedux.dispatch(
    //     //     this.addTVData(data)
    //     // )
    //     this.ngRedux.dispatch(
    //         this.updateLoadingData(false)
    //     )
    // }

    updateLoadingData(value: Boolean) {
        return {
            type: TuvoluActions.UPDATE_LOADING_STATE,
            payload: {
                loading: value
            }
        }
    }

    static addTVData(data) {
        return {
            type: TuvoluActions.ADD_TVDATA,
            payload: {
                data: TuvoluActions.getTVData(data),
                loading: false
            }
        }
    }

    static getTVData = (tvDataSet) => {
        return tvDataSet.map((info) => {
            return {
                image: info['show']['image'] ? info['show']['image']['medium'] : 'NA',
                link: info['show']['name'].link(info['show']['url']).replace(/^<a/, '$& target="_blank"') || 'NA',
                rating: info['show']['rating'] ? info['show']['rating']['average'] ? info['show']['rating']['average'] : 0  : 0,
                genres: info['show']['genres'],
                summary: info['show']['summary'] || 'Not Available',        
            }
        });
    }

    addSearchString(searchValue: String) {
        return {
            type: TuvoluActions.ADD_SEARCH_DATA,
            payload: {
                data: searchValue
            }
        }
    }

    makeAPIRequest(value: String) {
        // return this.http.getData(value);
        return {
            type: TuvoluActions.MAKE_API_REQUEST,
            payload: {
                searchText: value
            }
        }
    }

    // static APISuccess(success) {
    //     return {
    //         type: TuvoluActions.GET_REQUEST_SUCCESS,
    //         payload: {
    //             data: success
    //         }
    //     }
    // }

    static handleAPIError(error) {
        return {
            type: TuvoluActions.GET_REQUEST_ERROR,
            payload: {
                error: error
            }
        }
    }
}