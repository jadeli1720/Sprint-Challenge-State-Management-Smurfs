import React, { useState } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup"

const SmurfForm = ({ state }) => {
    const [newSmurf, setNewSmurf] = useState([])
    // console.log(newSmurf);
    return (
        <>
            <Form>
                <Field type="text" name='name' placeholder='Name' />
                <Field type="text" name='age' placeholder='Age' />
                <Field type="text" name='height' placeholder='Height' />
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}




