import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main.js';

export default class App extends React.Component {
	render(){
		return (
			<div className="App">
				<Main />
			</div>
		);
	}
};

ReactDOM.render(<App/>, document.getElementById('root'));