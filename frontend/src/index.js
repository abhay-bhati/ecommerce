import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthProvider from './store/authcontext';
import UserProvider from './store/usercontext';

ReactDOM.render(<AuthProvider><UserProvider><App /></UserProvider></AuthProvider>, document.getElementById('root'));
