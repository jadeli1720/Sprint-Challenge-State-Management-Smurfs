import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    ADD_SMURF
} from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SMURF_DATA_SUCCESS:
            return {
                ...state,
                isLoading:false,
                smurfs: action.payload,
                error:''
            };
        case ADD_SMURF: {
            const newSmurf = {
                name: action.payload,
                age: action.payload,
                height: action.payload,
                id: Date.now()
            };
            return {
                ...state,
                smurfs: [...state.smurfs, newSmurf]
            }
        }
        default:
            return state;
    }
}