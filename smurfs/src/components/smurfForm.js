import React, { useState} from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import {addSmurf} from '../actions';


const SmurfForm = (props,{values, handleSubmit, status}) => {
  // const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })
//   console.log('Forms',smurfs)
  return (
    <Form>
      <label>
        Name:
        <Field type="text" name="name" placeholder="Smurf"  />
      </label>
      <label>
        Age: 
        <Field type="text" name="age" placeholder="Age"   />
      </label>
      <label>
        Height:
        <Field type="text" name="height" placeholder="Height in cm"  />
      </label>
      <button type="submit">Add Smurf</button>
    </Form>
  );
};

const FormikSmurfForm = withFormik({
  mapPropsToValues({name, age, height}) {
    return{
      name: name || '',
      age: age || '',
      height: height || ''
    };
  },

  handleSubmit(values, {props,resetForm, setSubmitting}){
    props.addSmurf(values);
    console.log('handle submit', values);
    resetForm('');
    setSubmitting(false);
  }

})(SmurfForm);

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { addSmurf }) (FormikSmurfForm);


