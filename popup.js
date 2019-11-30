'use strict'

const {
	BrowserWindow,
	Menu,
	MenuItem,
	ipcMain
} = require( 'electron' )


let sidebarcontextmenu,
	sidebarMenuTemplate

ipcMain.on('popup-menu', ( event, message ) => {
	
	sidebarMenuTemplate = [
		{
				label: message.item1,
				click (item, focusedWindow) { if(focusedWindow) console.log('click1')  }
		},
		{
				label: message.item2,
				click (item, focusedWindow) { if(focusedWindow) console.log('click2')  }
		},
		{
				label: message.item3,
				click (item, focusedWindow) { if(focusedWindow) console.log('click3')  }
		}
	]
		
	const sidebarMenu = Menu.buildFromTemplate( sidebarMenuTemplate )
	const win = BrowserWindow.fromWebContents( event.sender )
	sidebarcontextmenu = sidebarMenu.popup( win )
})
