import React, { Component } from 'react';
import PropTypes from 'prop-types';


import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";


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
              {page === 1 && <Page1 onSubmit={this.nextPage}></Page1>}
              {page === 2 && <Page2   previousPage={this.previousPage} onSubmit={this.nextPage}></Page2>}
              {page === 3 && <Page3  previousPage={this.previousPage} onSubmit={this.nextPage}></Page3>}
              {page === 4 && <Page4  previousPage={this.previousPage} ></Page4>}
         
          </div>
            
        );
    }
    
}



export default CraftDemoForm;