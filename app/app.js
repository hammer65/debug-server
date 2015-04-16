var nwgui = require('nw.gui');
var app = require('application');
var lf = require('logfile');

var win = nwgui.Window.get();
var dom = win.window;
var logconfig = {logs:{logDir:'../../log'}};
var application = new app(logconfig,nwgui);

application.list();