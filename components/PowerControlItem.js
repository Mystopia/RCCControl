import React from 'react'
import ReactDOM from 'react-dom'
import ToggleButton from 'react-toggle-button'

export default class PowerControlItem extends React.Component {
	render(){
		return(
			<li onClick={(value) => {this.props.powerButtonAction(this.props.device)}}>
				<div className="name">{this.props.device.name}
					<div className="receptacle">{this.props.device.outlet}</div>
				</div>
				<div className="switch">
					<ToggleButton
						value={ this.props.device.isOn || false }
						onToggle={(value) => {this.props.powerButtonAction(this.props.device)}}
						inactiveLabel=""
							activeLabel=""
							colors={{
							active: {
								base: 'rgb(127,195,38)',
								hover: 'rgb(128, 218, 11)'
							}
							}}
					/>
				</div>
			</li>
		);
	}
};