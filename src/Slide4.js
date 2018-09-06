import React, { Component } from 'react';
import { Values } from "redux-form-website-template";


class Slide4 extends Component {

  
    render() {
        const {previousPage} = this.props;
        return (
            <div>
                <div>Your Results</div>
                <Values form="wizard">
                </Values>
                <div>
                    <button type="button" className="previous" onClick={previousPage}>Previous</button>
                </div>
            </div>
        )
    }
};



export default Slide4;