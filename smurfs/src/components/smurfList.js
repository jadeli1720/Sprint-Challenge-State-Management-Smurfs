import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { getSmurfData } from '../actions';
import FormikSmurfForm from './smurfForm';
import Smurf from './smurf'

const SmurfList = props => {
    // console.log('SmurfList', props.smurfs)
    return (
        <div>
            <button onClick={props.getSmurfData}>
                {props.isLoading ? (
                    <Loader type="ThreeDots"
                        color="#ff7930"//change color
                        height={40}
                        width={40} />
                ) : ('See Smurfs')
                }
            </button>
            <FormikSmurfForm />
            {props.smurfs && props.smurfs.map(char => (
                <Smurf
                    key={char.id}
                    smurf={char}
                />
            ))}

        </div>
    )
}

const mapStateToProps = state => {
    console.log('maptostate', state);
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, { getSmurfData })(SmurfList);