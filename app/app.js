var nwgui = require('nw.gui');

var lf = require('logfile');

var win = nwgui.Window.get();
var dom = win.window;
var logconfig = {logDir:'../../log'};

function listMain(){
	lf.list(null,logconfig,function(e,data){
		if(e){ console.log(e); return false}
		var el = dom.$('#groups');
		var row, lnk;
		for(var i = 0;i < data.length;i++){
			row = dom.$('<div class="category"></div>');
			lnk = dom.$('<a href="#" data-category="' + data[i] + '" id="cat_' + data[i] + '">' + data[i] + '</a><br />');
			lnk.click(function(event){
				var el = event.target;
				logWindow(el.getAttribute('data-category'));
				event.preventDefault();
			});
			row.append(lnk);
			el.append(row);
		}
	});
}



listMain();