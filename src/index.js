import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';
import CraftDemoForm from "./CraftDemoForm";
import { Values } from "redux-form-website-template";


ReactDOM.render(

    <Provider store={store}>
        <div>
            <CraftDemoForm  />
              </div>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
