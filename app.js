'use strict'

const { ipcRenderer } = require( 'electron' )


let element = document.querySelector('body');


element.addEventListener("click", function(e) {
    
	let data = {
		'item1': 'first item',
		'item2': 'second item',
		'item3': 'third item',
	}
	
	ipcRenderer.send('popup-menu', data )
})