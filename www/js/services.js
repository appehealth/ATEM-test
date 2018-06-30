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
    var startTime;

    function logEvent( logText, component, item ) {
      var timestamp = Date.now() - startTime;
      eventStorage.push( timestamp + ': Component ' + component + ', Item ' + item + ': ' + logText );
    }

    function showEvents() {
      console.log( eventStorage.join( '\n' ) );
    }

    function logStart() {
      startTime = Date.now();
      logEvent( 'Start' );
    }

    return {
      logStart: logStart,
      logEvent: logEvent,
      showEvents: showEvents
    };

  } );