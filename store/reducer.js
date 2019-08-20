import { actionTypes } from './actions';
import { initialState } from './StoreProvider';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SONGS:
            return {
                ...state,
                songs: action.payload
            };

        case actionTypes.SET_ALBUMS:
                return {
                    ...state,
                    albums: action.payload
                };
        
        default:
            return state;
    }
}

export default rootReducer;