import {
    //get
    FETCH_SMURF_DATA_START,
    FETCH_SMURF_DATA_SUCCESS,
    FETCH_SMURF_DATA_FAILURE,
    //add
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE,
    //delete
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE
} from '../actions';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        //Get smurf data
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
        case FETCH_SMURF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        
        //Add new smurf
        case POST_SMURF_START:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_SMURF_SUCCESS: {
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isLoading:false,
                error:''
            }
        }
        case POST_SMURF_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }

        //Delete smurf
        case DELETE_SMURF_START: {
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        }
        case DELETE_SMURF_SUCCESS: {
            return {
                ...state,
                smurf: action.payload,
                isLoading:false,
                error: ''
            }
        }
        case DELETE_SMURF_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        default:
            return state;
    }
}