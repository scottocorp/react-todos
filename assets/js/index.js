var _ = require('lodash');

import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './../css/style.css';

// Import less
import less from './../less/style.less';

// Import Components
import App from './components/App';

// Provider is needed to bind redux to react
import { Provider } from 'react-redux';

import store from './store';

const router = (
	<Provider store={store}>
    <App />
	</Provider>
)

render(router, document.getElementById('root'));
