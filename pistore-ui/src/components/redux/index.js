// File: @/components/redux/index.js

import { SET_SHOW_FREE } from './Action';

const initialState = {
    showFree: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_FREE:
            return {
                ...state,
                showFree: !state.showFree,
            };
        default:
            return state;
    }
};

export default reducer;
