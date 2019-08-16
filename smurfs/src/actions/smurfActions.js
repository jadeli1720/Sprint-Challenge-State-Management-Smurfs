import axios from 'axios'

//get request
export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';

//post request
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'


export const getSmurfData = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_DATA_START' });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                //res.data
                dispatch({ type: 'FETCH_SMURF_DATA_SUCCESS', payload: res.data });
                console.log('res success', res)
            })
            .catch(err => {
                dispatch({ type:'FETCH_SMURF_DATA_FAILURE', payload: err.response });
                console.log('error', err)
            });
    };
};



export const addSmurf = newSmurf => {
    return dispatch =>{
        dispatch({type: 'POST_SMURF_START'})
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                dispatch({type: 'POST_SMURF_SUCCESS', payload:res.data })
                console.log('res success', res.data)
            })
            .catch( err => {
                console.log('err', err)
            })
    
    }
}