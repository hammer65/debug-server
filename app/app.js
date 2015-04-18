var nwgui = require('nw.gui');
var app = require('application');
var lf = require('logfile');
var clock = require('clock');

var win = nwgui.Window.get();
var dom = win.window;
var logconfig = {
		logs:{logDir:'../../log'},
		logWindow:{
			width: 600,
			height: 800
		}
	};
var application = new app(logconfig,nwgui);

application.list();
clock.on('update',function(time){
	var el = $('#clock').html(time);
});
