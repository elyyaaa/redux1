import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import  {rootReducer} from "./redux/reducer/reducer";
import { Provider } from 'react-redux';
import {thunk} from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

