import React from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import {addSmurf} from '../actions';


const SmurfForm = (props,{values, handleSubmit, status}) => {
  // const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })
  return (
    <Form>
      <label>
        Name:
        <Field type="text" name="name" placeholder="Smurf" value={props.values.name} />
      </label>
      <label>
        Age: 
        <Field type="text" name="age" placeholder="Age"  />
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

  handleSubmit(values, {resetForm, setSubmitting}){
      addSmurf(values);
    resetForm('');
    setSubmitting(false);
  }

})(SmurfForm);

const mapStateToProps = state => {
    // console.log('maptostate', state);
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { addSmurf }) (FormikSmurfForm);


