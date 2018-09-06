import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import WizardForm from "./WizardForm";
import { Values } from "redux-form-website-template";


ReactDOM.render(

    <Provider store={store}>
        <div>
            <WizardForm/>
              </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
