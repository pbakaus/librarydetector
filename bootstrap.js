Components.utils.import("resource://gre/modules/Services.jsm");
Components.utils.import("resource://gre/modules/AddonManager.jsm");

var self = this,
	BUTTON_ID = "librarydetector";

function include(path) {
	Services.scriptloader.loadSubScript(getResourceURI(path), self);
}

function getResourceURI(filePath) {
	return __SCRIPT_URI_SPEC__ + "/../" + filePath;
}


function install() {}
 
function uninstall() {}
 
function startup(data, reason) {

	include("content/tests.js");
	include("content/main.js");
	include("includes/utils.js");
	include("includes/buttons.js");

	if (ADDON_INSTALL == reason) {
		setDefaultPosition(BUTTON_ID, "addon-bar", "");
	}

	watchWindows(function(window) {

		if (!window)
			return;

		let doc = window.document,
			win = doc.querySelector("window");

		// add button
		let button = doc.createElement("box");
		button.setAttribute("id", BUTTON_ID);
		button.setAttribute("orient", "horizontal");
		restorePosition(doc, button);

		// make browser doc accessible to rest of app
		main.doc = doc;
		main.button = button;

		unload(function() {
			button.parentNode.removeChild(button);
		}, window);

		// run tests
		var gBrowser = window.getBrowser();

		gBrowser.addEventListener("load", function(event) {
			var browser = gBrowser.selectedBrowser;
			if(event.target === browser.contentDocument) {
				//Services.prompt.alert(null, "Library Detector", "tab load");
				main.run(browser.contentWindow.wrappedJSObject);
			}
		}, true);

		gBrowser.tabContainer.addEventListener("TabSelect", function() {

			var browser = gBrowser.selectedBrowser;
			//Services.prompt.alert(null, "Library Detector", "tab switch: " + browser.contentWindow.wrappedJSObject);
			main.run(browser.contentWindow.wrappedJSObject);

		}, false);



	}, "navigator:browser");

}
 
function shutdown(data, reason) unload();