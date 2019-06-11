import React, { useReducer } from 'react';

import { actions } from './actions';
import rootReducer from './reducer';

export const initialState = {
    currentTrack: {  },
    currentAlbum: {  },
    tracks: [],
    albums: [],
    isPlaying: false,
};

let StoreContext;

const { Provider, Consumer } = (StoreContext = React.createContext());

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return <Provider value={{ state, actions, dispatch }}>{children}</Provider>;
};

export { StoreProvider, Consumer as StoreConsumer, StoreContext };