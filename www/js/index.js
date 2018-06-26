
var app = {
    // Application Constructor
    initialize: function() {
        console.log("index js initialize");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {

        console.log("device ready");
        app.receivedEvent('deviceready');
        app.createLog();

        }

        createLog: function(){
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(getFileSystem){
        	console.log('file system open: ' + fs.name);
        	app.createFile(fs.root, "TestLogFile.csv", false);
        }
        }

        createFile: function (dirEntry, fileName, isAppend) {
            // Creates a new file or returns the file if it already exists.
            dirEntry.getFile(fileName, {create: true, exclusive: false}, function(fileEntry) {

                writeFile(fileEntry, null, isAppend);

            }, onErrorCreateFile);

        }




    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
