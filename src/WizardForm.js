import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";


class CraftDemoForm extends Component {
    
    constructor(props){
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
               page: 1,

        };

    }

    nextPage() {
        this.setState({page:this.state.page +1});
    }

    previousPage() {
        this.setState({page: this.state.page -1});

    }
    
    
    render () {
        const { page } = this.state;

        return (
          <div>
              here
              {page === 1 && <Slide1 onSubmit={this.nextPage}></Slide1>}
              {page === 2 && <Slide2   previousPage={this.previousPage} onSubmit={this.nextPage}></Slide2>}
              {page === 3 && <Slide3  previousPage={this.previousPage} onSubmit={this.nextPage}></Slide3>}
              {page === 4 && <Slide4  previousPage={this.previousPage} ></Slide4>}
         
          </div>
            
        );
    }
    
}



export default CraftDemoForm;