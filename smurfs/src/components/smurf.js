import React from "react";


const Smurf = (props) => {
    // console.log('Smurf', props)
    return (
        <div>
            <h3>Name: {props.smurf.name} </h3>
            <p>Age: {props.smurf.age} </p>
            <p>Height: {props.smurf.height} </p>
            <button onClick={() =>{props.delete(props.smurf)} } >Remove</button>
        </div>
    )
}

export default Smurf;