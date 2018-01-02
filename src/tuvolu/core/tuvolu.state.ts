
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
    data: IDataState[];
}

export const INITIAL_STATE = {
    searchText: '',
    loading: false,
    data: []
}

export function rootReducer(lastState = INITIAL_STATE, action) {
    switch(action.type) {
        case TuvoluActions.ADD_SEARCH_DATA:
            return Object.assign({},
                lastState,
                {searchText: action.payload.data}
            );
        case TuvoluActions.UPDATE_LOADING_STATE:
            return Object.assign({},
                lastState,
                {loading: action.payload.loading}    
            );
        case TuvoluActions.ADD_TVDATA:
            return Object.assign(
                {},
                lastState,
                {data: action.payload.data}
            ) ;
        default:
            lastState;
    }
}
