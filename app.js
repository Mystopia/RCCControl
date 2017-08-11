import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';

var App = React.createClass({
	render: function() {
		return (
			<div className="App">
				<Header />
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('root'));