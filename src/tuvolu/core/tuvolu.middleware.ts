
import { TuvoluActions } from './tuvolu.actions';


export const APIMiddleware = store => next => action => {
    let result = next(action);
    if ( action.type == TuvoluActions.MAKE_API_REQUEST ) {
        // const value = store.getState().searchText;
        fetch(`http://api.tvmaze.com/search/shows?q=${action.payload.searchText}`)
        .then(res => res.json())
        .then( (res) => {
            result = next(TuvoluActions.addTVData(res));
        })
        .catch( (error) => {
            result = next(TuvoluActions.handleAPIError(error.message));
        });
    }
    return result;
}
