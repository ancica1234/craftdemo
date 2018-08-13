import React from 'react';
import { Field, reduxForm}  from 'redux-form';


const renderFields = ({input, label,type}) => (
    <div>
    <label>{label}</label>
        <div><input {...input} type={type}></input></div>
        </div>
);

let Page2 = function(props) {
    const {handleSubmit, previousPage} = props;
    return (

        <form onSubmit={handleSubmit}>
            <div>What's your name? </div>
            <Field  name="yourname" type="text"  component={renderFields}>

            </Field>
            <div> <button type="button" className="previous" onClick = {previousPage}>Previous</button>
            </div>
            <div> <button type="submit" className="next">Next</button>
            </div>
        </form>

    )
};

Page2 =  reduxForm({
        form:"wizard",
        destroyOnUnmount: false, //        <------ preserve form data
        forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    }
)(Page2);


export default Page2;