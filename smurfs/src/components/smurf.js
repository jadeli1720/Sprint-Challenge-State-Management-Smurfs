import React from "react";

const Smurf = (props) => {
    console.log('Smurf', props)
    return(
        <div>
            this is smurf
            <h3>Name: {props.smurf.name} </h3>
            <p>Age: {props.smurf.age} </p>
            <p>Height: {props.smurf.height} </p>
        </div>
    )
}

export default Smurf;