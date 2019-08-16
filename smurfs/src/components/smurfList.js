import React from "react";
import { connect } from "react-redux";
import Smurf from './smurf'

const SmurfList = props => {
    console.log('SmurfList', props.smurfs)
    return (
        <div>
            {props.smurfs.map(char => (
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
        test:state.test,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {}) (SmurfList);