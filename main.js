//
// Main.js
// Electron/Node setup
// (using basic flow from http://duckysoftware.com/?p=1110
// and Benja template)
//

// To have access to local or global scripts
require(process.cwd() + '/node_modules/benja').paths();

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

//const path = require('path');
//const url = require('url');

// in case by default WebGL doesn't work ... (rpi or others)
app.commandLine.appendSwitch('--ignore-gpu-blacklist');

app.once('ready', () => {
	const area = electron.screen.getPrimaryDisplay().workAreaSize;
	this.window = new BrowserWindow({
		backgroundColor: '#000000',
		frame: false,
		fullscreen: true,
		x: 0,
		y: 0,
		width: area.width,
		height: area.height
	});

	this.window.once('closed', () => {
		// cleanup the reference
		this.window = null;
	});
	
	let url = require('url').format({
		protocol: 'file',
		slashes: true,
		pathname: require('path').join(__dirname, 'index.html')
	});
	this.window.loadURL(url);
	// test CSS
	// .loadURL('https://codepen.io/bennettfeely/full/tfbCo/');
	// test WebGL
	// .loadURL('http://get.webgl.org/');
	// stress WebGL
	// .loadURL('https://threejs.org/examples/webgl_geometry_cube.html');


	// for debugging purpose, it might be handy to be able
	// to reload the window simply via `touch ~/app/reload`
	require('fs').watch('reload', () => app.quit());
});