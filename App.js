import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.name) errors.name = 'Field required';
      if(!values.email) errors.email = 'Username should be an email';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  })

  return (
    <div>
      <p>
        <form onSubmit={formik.handleSubmit}>
          <div>Name</div>
          <input name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
          {formik.errors.name ? <div style={{color:'red'}}>{formik.errors.name}</div>: null}
          <div id="emailField">Email</div>
          <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
          <div id="pswField" >Password</div>
          <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}
          <button id="submitBtn" type="submit">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default App;
