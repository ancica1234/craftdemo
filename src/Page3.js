import React from 'react';
import { Field, reduxForm}  from 'redux-form';


const renderFields = ({input, type, label}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type}></input>
        </div>

    </div>

);
let Page3 = function(props) {


    const {handleSubmit, previousPage} = props;

    return (

        <div>
            <form onSubmit={handleSubmit}>
            <div>What's your email? </div>
            <Field  name="email" type="text"  component={renderFields}>

            </Field>
            <div> <button type="button" className="previous" onClick = {previousPage}>Previous</button>
            </div>
            <div>     <button type="submit"  className="next">Next</button>
            </div>
        </form>
   </div>
    )

};

Page3 =  reduxForm({
        form:"wizard",
        destroyOnUnmount: false, //        <------ preserve form data
        forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    }
)(Page3);


export default Page3;