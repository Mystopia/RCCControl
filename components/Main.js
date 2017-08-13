const os = require("os");

import React from 'react'
import ReactDOM from 'react-dom'
import update from 'immutability-helper';

import Header from './Header.js';
import PowerControls from './PowerControls.js';

//
// GPIO Pinouts
//   Pi physical pin number: 22  18  16  15  13  12  11  07
//       Pi GPIO pin number: 
//                Relay IN#: 01  02  03  04  05  06  07  08
//

export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			devices: [
				{
					id: 1,
					name: "Freezer 1",
					pin: 22,
					outlet: 1,
					isOn: true
				},
				{
					id: 2,
					name: "Freezer 2",
					pin: 18,
					outlet: 2,
					isOn: true
				},
				{
					id: 3,
					name: "Freezer 3",
					pin: 16,
					outlet: 3,
					isOn: true
				},
				{
					id: 4,
					name: "Audio System",
					pin: 15,
					outlet: 4,
					isOn: true
				},
				{
					id: 5,
					name: "LED Wall",
					pin: 13,
					outlet: 5,
					isOn: true
				},
				{
					id: 6,
					name: "LED Roof",
					pin: 12,
					outlet: 6,
					isOn: true
				}
			]
		};

		this.turnOn      = this.turnOn.bind(this);
		this.turnOff     = this.turnOff.bind(this);
		this.togglePower = this.togglePower.bind(this);
	}

	setupGPIO(){
		if (os.arch() == 'arm'){
			this.rpio = require('rpio');
		}
	}

	togglePower(device){
		if (device.isOn) this.turnOff(device);
		else this.turnOn(device);
	}

	turnOff(device){
		console.log("Turning off device", device.id);
		if (this.rpio){
			rpio.open(device.pin, rpio.INPUT);
			console.log('Pin is currently set ' + (rpio.read(device.pin) ? 'high' : 'low'));
			rpio.open(device.pin, rpio.OUTPUT, rpio.LOW);
		}

		// Update state
		device.isOn = false;
		var index = this.state.devices.findIndex(x => x.id == device.id);
		if (index !== -1) this.setState(update(this.state.devices, {index: {$set: device }}));
	}

	turnOn(device){
		console.log("Turning on device", device.id);
		if (this.rpio){
			rpio.open(device.pin, rpio.INPUT);
			console.log('Pin is currently set ' + (rpio.read(device.pin) ? 'high' : 'low'));
			rpio.open(device.pin, rpio.OUTPUT, rpio.HIGH);
		}

		// Update state
		device.isOn = true;
		var index = this.state.devices.findIndex(x => x.id == device.id);
		if (index !== -1) this.setState(update(this.state.devices, {index: {$set: device }}));
	}

	readState(device){
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
