'use strict'

const {app, BrowserWindow, ipcMain, webContents} = require('electron')
const url		= require( 'url' ) 
const path		= require( 'path' )

let win

function createWindow() {
	
	win = new BrowserWindow({
		show: false,
		x: 100,
		y: 100,
		width: 800,
		height: 600,
		vibrancy: 'sidebar',
		webPreferences: {
			devTools: true,
			nodeIntegration: true,
		}
	})
	
	win.loadURL(url.format ({ 
		
		pathname: path.join(__dirname, 'app.html'), 
		protocol: 'file:', 
		slashes: true 
	}))
	
	win.once('ready-to-show', () => {
		
		win.show()
	})
	
	win.on('closed', () => {
		
		app.quit()
	})
	
	require( './popup' )
}

app.on('ready', createWindow)