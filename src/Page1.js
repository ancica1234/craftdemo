import React from 'react';
import { Field, reduxForm}  from 'redux-form';

const renderField = ({ input, label, type }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input}  type={type} />
        </div>
    </div>
);
let Page1 = function(props) {
  const {handleSubmit} = props;
  return (
      
      <form onSubmit={handleSubmit}>
          <Field  label="How are you" 
                  name="howareyou" 
                  type="text"  
                  component={renderField}>
              
          </Field>
          <div>     <button type="submit" className="next">Next</button>
          </div>
        </form>  
      
  )
};

Page1 =  reduxForm({
        form:"wizard",
        destroyOnUnmount: false, //        <------ preserve form data
        forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    }
)(Page1);


export default Page1;