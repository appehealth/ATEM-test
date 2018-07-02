angular.module( 'App.services', [] )
  .factory( 'cordovaReady', [ function() {
    return function( fn ) {
      var queue = [],
        impl = function() {
          queue.push( [].slice.call( arguments ) );
        };

      document.addEventListener( 'deviceready', function() {
        queue.forEach( function( args ) {
          fn.apply( this, args );
        } );
        impl = fn;
      }, false );

      return function() {
        return impl.apply( this, arguments );
      };
    };
  } ] )
  .service( 'storeEvents', function() {
    var eventStorage = [];
    var sensorStorage = [];
    var startTime;
    var x;
    var y;
    var z;

    window.addEventListener( 'devicemotion', function( event ) {
      x = Math.round( event.acceleration.x );
      y = Math.round( 100 * event.acceleration.y ) / 100;
      z = Math.round( 100 * event.acceleration.z ) / 100;
    } );

    function logEvent( logText, component, item ) {
      var timestamp = Date.now() - startTime;
      eventStorage.push( timestamp + ': Component ' + component + ', Item ' + item + ': ' + logText );
    }

    function logSensor() {
      var timestamp = Date.now() - startTime;
      sensorStorage.push( timestamp + '; ' + x + '; ' + y + '; ' + z );
    }

    function showEvents() {
      console.log( eventStorage.join( '\n' ) );
    }

    function showSensor() {
      console.log( 'Timestamp;X;Y;Z' + '\n' + sensorStorage.join( '\n' ) );
    }

    function logStart() {
      startTime = Date.now();
      logEvent( 'Start' );
      setInterval( logSensor, 300 );
    }

    return {
      logStart: logStart,
      logEvent: logEvent,
      eventStorage: eventStorage,
      sensorStorage: sensorStorage,
      showEvents: showEvents,
      showSensor: showSensor
    };

  } );