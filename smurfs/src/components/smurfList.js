import React from "react";
import { connect } from "react-redux";

const SmurfList = props => {
    return (
        <>
            <p>This is from the SmurfList</p>
            {props.test}
        </>
    )
}

const mapStateToProps = state => {
    console.log('smurfList', state);
    return {
        test:state.test
    }
}

export default connect(mapStateToProps, {}) (SmurfList);