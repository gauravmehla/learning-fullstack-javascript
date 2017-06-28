import React from 'react';
import ReactDOM from 'react-dom';

import Data from './testData';

import App from './components/App'

ReactDOM.render(
	<App contests={Data.contests}/>,
	document.getElementById('root')
);