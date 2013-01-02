"use strict";

var main = {

	run: function(window) {

		while ( main.button.firstChild )
			main.button.removeChild( main.button.firstChild );
		
		var label = [];
		
		for(var i in LD_tests) {
			
			var passed = LD_tests[i].test(window);

			if(passed) {

				var node = main.doc.createElement('statusbarpanel');
				
				if(LD_tests[i].icon) {
					node.className = 'statusbarpanel-menu-iconic';
					node.setAttribute('src', getResourceURI(LD_tests[i].icon));
				}

				if(passed.version || passed.details) {
					node.setAttribute('tooltiptext', i+'\nVersion: '+(passed.version || '(not detectable)')+'\n'+(passed.details || ''));
				}
				
				node.setAttribute('label', i);
				main.button.appendChild(node);
				
			}
			
		}

	}

};