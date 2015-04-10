var nwgui = require('nw.gui');

var lf = require('logfile')W;
var win = lf.Window.get();
var dom = win.window;

lf.list(null,{logDir:'../../log'},function(e,data){
	var el = dom.$('#groups');
	for(var i = 0;i < data.length;i++){
		var lnk = dom.$('<a href="#" id="cat_' + data[i] + '">' + data[i] + '</a>')
		el.append();
	}
});