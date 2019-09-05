import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyPad from './components/KeyPad';

const element = [
    { index: 1, key1: 'Clear', key2: '/', class1: "info clear", class2:"success operation" },
    { index: 2, key1: 7, key2: 8, key3: 9, key4: '-', class1: "danger key", class2:"danger key", class3:"danger key", class4:"success operation" },
    { index: 3, key1: 4, key2: 5, key3: 6, key4: '+', class1: "danger key", class2:"danger key", class3:"danger key", class4:"success operation" },
    { index: 4, key1: 1, key2: 2, key3: 3, key4: '=', class1: "danger key", class2:"danger key", class3:"danger key", class4:"success operation" },
    { index: 5, key1: 'Prev', key2: 0, key3: 'Next', key4: 'C', class1: "info key", class2:"danger key", class3:"info key", class4:"info operation" }
];

ReactDOM.render(<KeyPad keypadObj={element} />, document.getElementById('root'));

