import {FETCH_SMURF_DATA_START} from '../actions';

const initialState = {
    smurfs: [],
    test: "It must me working"
    
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_DATA_START:
            return{
                ...state,
            };
        default:
            return state;
    }
}