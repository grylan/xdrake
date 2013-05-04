// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {var url = "http://testsolar.zxq.net/scuola/test.xml";
	navigator.splashscreen.hide();
	FileTransfer();
}

/**
* Downloads a file form a given URL and saves it to the specified directory.
* @param source {String}          URL of the server to receive the file
* @param target {String}         Full path of the file on the device
* @param successCallback (Function}  Callback to be invoked when upload has completed
* @param errorCallback {Function}    Callback to be invoked upon error
* @param trustAllHosts {Boolean} Optional trust all hosts (e.g. for self-signed certs), defaults to false
*/
function FileTransfer(source, target, successCallback, errorCallback, trustAllHosts) {
	var self = this;
	var win = function(result) {
		if (typeof result.lengthComputable != "undefined") {
			if (self.onprogress) {
				return self.onprogress(newProgressEvent(result));
			}
		}
		else if (successCallback) {
			var entry = null;
			if (result.isDirectory) {
				entry = new (require('cordova/plugin/DirectoryEntry'))();
			}
			else if (result.isFile) {
				entry = new (require('cordova/plugin/FileEntry'))();
			}
			entry.isDirectory = result.isDirectory;
			entry.isFile = result.isFile;
			entry.name = result.name;
			entry.fullPath = result.fullPath;
			successCallback(entry);
		}
	};

	var fail = errorCallback && function(e) {
		var error = new FileTransferError(e.code, e.source, e.target, e.http_status);
		errorCallback(error);
	};

	exec(win, fail, 'FileTransfer', 'download', [source, target, trustAllHosts, this._id]);
};

