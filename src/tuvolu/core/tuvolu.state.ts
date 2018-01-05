
import { TuvoluActions } from './tuvolu.actions';

export interface IDataState {
    imageUrl: String;
    infoUrl: String;
    rating: number;
    genres: String[];
    summary: String;
}

export interface ITuvoluState{
    searchText: String;
    loading: Boolean;
    networkError: Boolean;
    errorMessage: String;
    data: IDataState[];
}

export const INITIAL_STATE = {
    searchText: '',
    loading: false,
    networkError: false,
    errorMessage: '',
    data: []
}

export function rootReducer(lastState = INITIAL_STATE, action) {
    switch(action.type) {
        case TuvoluActions.ADD_SEARCH_DATA:
            return {
                ...lastState,
                searchText: action.payload.data
            };
        case TuvoluActions.UPDATE_LOADING_STATE:
            return {
                ...lastState,
                loading: action.payload.loading
            };
        case TuvoluActions.ADD_TVDATA:
            return {
                ...lastState,
                data : action.payload.data,
                networkError: action.payload.networkError,
                loading : action.payload.loading
            };
        case TuvoluActions.GET_REQUEST_ERROR:
            return {
                ...lastState,
                errorMessage: action.payload.errorMessage,
                networkError: action.payload.networkError,
                loading : action.payload.loading
            };
        default:
            return lastState;
    }
}
