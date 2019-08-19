import axios from 'axios'

//get request
export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

//post request
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

//delete request
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';


//Get data from server
export const getSmurfData = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_DATA_START' });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                //res.data
                dispatch({ type: 'FETCH_SMURF_DATA_SUCCESS', payload: res.data });
                // console.log('res success', res)
            })
            .catch(err => {
                dispatch({ type: 'FETCH_SMURF_DATA_FAILURE', payload: err.response });
                // console.log('error', err)
            });
    };
};


//Post new smurf input in smurfForm to server
export const addSmurf = newSmurf => {
    return dispatch => {
        dispatch({ type: 'POST_SMURF_START' })
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                dispatch({ type: 'POST_SMURF_SUCCESS', payload: res.data })
                console.log('res success', res.data)
            })
            .catch(err => {
                dispatch({ type: 'POST_SMURF_FAILURE', payload: err.response })
                console.log('error', err)
            });

    };
};

//Delete

export const deleteSmurf = smurf => {
    return dispatch => {
        dispatch({ type: 'DELETE_SMURF_START' })
        axios.delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
            .then(res => {
                dispatch({ type: 'DELETE_SMURF_SUCCESS', payload: res.data })
                console.log('res success', res.data)
            })
            .catch(err => {
                dispatch({ type: 'DELETE_SMURF_FAILURE', payload: err.response })
                console.log('error', err)
            });
    };
};