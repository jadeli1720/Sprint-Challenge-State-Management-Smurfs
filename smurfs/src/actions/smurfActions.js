import axios from 'axios'

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';


export const getSmurfData = () => {
    return dispatch => {
        dispatch({type: 'FETCH_SMURF_DATA_START'});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {

            console.log('res success', res)
        })
        .catch(err => {
            console.log('error', err)
        });
    };
};