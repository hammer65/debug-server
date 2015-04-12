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

function logWindow(cat){
	lf.read(cat,logconfig,function(reader){
		var wObj = nwgui.Window.open('logfile.html',{width: 400, height: 600});
		wObj.on('loaded',function(){
			while(reader.hasNextLine()){
				this.window.fillLine(reader.nextLine());
			}
		});
	});
}

listMain();