import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { getSmurfData } from '../actions';
import Smurf from './smurf'

const SmurfList = props => {
    console.log('SmurfList', props.smurfs)
    return (
        <div>
            <button onClick={props.getSmurfData}>
                {props.isLoading ? (
                    <Loader type="ThreeDots"
                        color="#ff7930"
                        height={40}
                        width={40} />
                ) : ('See Smurfs')
                }
            </button>
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
        test: state.test,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { getSmurfData })(SmurfList);