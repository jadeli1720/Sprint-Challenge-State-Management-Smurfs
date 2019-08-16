import axios from 'axios'

export const FETCH_SMURF_DATA_START = 'FETCH_SMURF_DATA_START';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA_SUCCESS';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA_FAILURE';
export const ADD_SMURF = 'ADD_SMURF'


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

// export const addSmurf = smurfChar => {
//     console.log('add action invoked')
//     return {type: 'ADD_SMURF', payload:smurfChar }
// }

export const addSmurf = ()=> {
    console.log('add action invoked')
    return dispatch =>{
        axios.post('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type: 'ADD_SMURF', payload:res })
                console.log('res success', res)
            })
            .catch( err => {
                console.log('err', err)
            })
    
    }
}