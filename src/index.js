import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
	<h2 style={{ color }}>Hello React with JSX!!</h2>,
	document.getElementById('root')
);