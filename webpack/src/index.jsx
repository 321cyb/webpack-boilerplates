import HelloForm from './HelloForm';
import React from "react";
import ReactDOM  from 'react-dom';

import "./main.css";

import * as reducers from './reducers/count'


ReactDOM.render(<HelloForm />, document.getElementById('root'));
