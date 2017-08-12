import React from 'react'
import ReactDOM from 'react-dom'

import PowerControlItem from './PowerControlItem.js';

export default class PowerControls extends React.Component{
	render(){
		return(
			<ul className="powercontrols">
				{this.props.devices.map(device => {
					return(
						<PowerControlItem 
							key={device.id}
							device={device} 
							powerButtonAction={this.props.togglePower} 
						/>
					)
				})}
			</ul>
		);
	}
};