import { actionTypes } from './actions';
import { initialState } from './StoreProvider';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TRACKS:
            return {
                ...state,
                tracks: action.payload
            };
        
        defailt:
            return state;
    }
}

export default rootReducer;