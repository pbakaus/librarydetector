var LD_tests = {
	
	'jQuery': {
		icon: 'content/icons/jquery.ico',
		test: function(win) {
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery) {
				return { version: jq.fn.jquery };
			} else {
				return false;
			}
		}
	},
	
	'jQuery UI': {
		icon: 'content/icons/jquery_ui.ico',
		test: function(win) {
			
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery && jq.ui) {

				var plugins = 'accordion,datepicker,dialog,draggable,droppable,progressbar,resizable,selectable,slider,menu,grid,tabs'.split(','), concat = [];
				for (var i=0; i < plugins.length; i++) { if(jq.ui[plugins[i]]) concat.push(plugins[i].substr(0,1).toUpperCase() + plugins[i].substr(1)); };
			
				return { version: jq.ui.version, details: concat.length ? 'Plugins used: '+concat.join(',') : '' };
			} else {
				return false;
			}
			
		}
	},
	
	'Dojo': {
		icon: 'content/icons/dojo.ico',
		test: function(win) {
			if(win.dojo) {
				return { version: win.dojo.version.toString(), details: 'Details: '+(win.dijit ? 'Uses Dijit' : 'none') };
			} else {
				return false;
			}
		}
	},
	
	'Prototype': {
		icon: 'content/icons/prototype.png',
		test: function(win) {
			if(win.Prototype && win.Prototype.Version) {
				return { version: win.Prototype.Version };
			} else {
				return false;
			}
		}
	},
	
	'Scriptaculous': {
		icon: 'content/icons/scriptaculous.ico',
		test: function(win) {
			if(win.Scriptaculous && win.Scriptaculous.Version) {
				return { version: win.Scriptaculous.Version };
			} else {
				return false;
			}
		}
	},
	
	'MooTools': {
		icon: 'content/icons/mootools.png',
		test: function(win) {
			if(win.MooTools && win.MooTools.version) {
				return { version: win.MooTools.version };
			} else {
				return false;
			}
		}
	},
	
	'Spry': {
		icon: 'content/icons/spry.png',
		test: function(win) {
			if(win.Spry) {
				return { version: '(not detectable)' };
			} else {
				return false;
			}
		}
	},
	
	'YUI': {
		icon: 'content/icons/yui.ico',
		test: function(win) {
			if(win.YAHOO && win.YAHOO.VERSION) {
				return { version: win.YAHOO.VERSION };
			} else {
				return false;
			}
		}
	},
	
	'Qooxdoo': {
		icon: 'content/icons/qooxdoo.ico',
		test: function(win) {
			if(win.qx && win.qx.Bootstrap) {
				return { version: '(not detectable)' };
			} else {
				return false;
			}
		}
	},
	
	'Ext JS': {
		icon: 'content/icons/extjs.ico',
		test: function(win) {
			if(win.Ext && win.Ext.version) {
				return { version: win.Ext.version };
			} else {
				return false;
			}
		}
	},
	
	'base2': {
		icon: 'content/icons/base2.gif',
		test: function(win) {
			if(win.base2 && win.base2.version) {
				return { version: win.base2.version };
			} else {
				return false;
			}
		}
	}
	
};