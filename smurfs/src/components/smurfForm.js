import React, { useState } from "react";


export default function SmurfForm({ state, add }) {
    const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })
    // console.log(newSmurf);

    function handleChange(e) {
        const updateSmurf = { ...newSmurf, [e.target.name]: e.target.value }
        // console.log(
        //     "handleChange",
        //     e.target.name,
        //     e.target.value,
        //     updateSmurf
        // );
        setNewSmurf(updateSmurf)
    }

    function submitSmurf(e) {
        e.preventDefault();
        add(newSmurf);
        setNewSmurf({ name: '', age: '', height: '' })
    }

    console.log('Set New Smurf',setNewSmurf);



    return (
        <>
            <form onSubmit={submitSmurf}>
                <input
                    type="text"
                    value={state.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={state.age}
                    name="age"
                    placeholder="Age"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={state.height}
                    name="height"
                    placeholder="Height"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
                {/* onClick={() => {add(add)} } */}
            </form>
        </>
    )


}


