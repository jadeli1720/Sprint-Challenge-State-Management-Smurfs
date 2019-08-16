import {
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,

    POST_SMURF_START,
    POST_SMURF_SUCCESS
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
        case POST_SMURF_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            };
        case POST_SMURF_SUCCESS: {
            
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading:false,
                error:''
            }
        }
        default:
            return state;
    }
}