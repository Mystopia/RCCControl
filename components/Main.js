const os = require("os");

import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header.js';
import PowerControls from './PowerControls.js';


export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			devices: [
				{
					name: "Freezer 1",
					pin: 0,
					order: 1,
					isOn: false
				},
				{
					name: "Freezer 2",
					pin: 0,
					order: 2,
					isOn: true
				},
				{
					name: "Freezer 3",
					pin: 0,
					order: 3,
					isOn: true
				},
				{
					name: "Audio System",
					pin: 0,
					order: 4,
					isOn: true
				},
				{
					name: "LED Wall",
					pin: 0,
					order: 5,
					isOn: true
				},
				{
					name: "LED Roof",
					pin: 0,
					order: 6,
					isOn: true
				}
			]
		};

		this.setupGPIO();
		this.togglePower = this.togglePower.bind(this);
	}

	setupGPIO(){
		// Don't run this on desktops - pi-gpio won't work
		if (os.arch() == 'arm'){
			const gpio = require("pi-gpio");
		}
	}

	togglePower(device){
		console.log("Got a click!", device);
		//if (device.isOn)
	}

	turnOff(device){
		//
	}

	turnOn(device){
		//
	}

	render(){
		return(
			<div>
				<Header />
				<PowerControls 
					devices={this.state.devices} 
					togglePower={this.togglePower} 
				/>
			</div>
		);
	}
};
