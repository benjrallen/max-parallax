/*	Preface:  I know that this is some pretty ugly javascript, but this admin interface needs to get done pronto, so I copy, and thus I paste */

/*
 * Try/Catch the console
 */
try{
    console.log('Hello Console.');
} catch(e) {
    window.console = {};
    var cMethods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");
    for (var i=0; i<cMethods.length; i++) {
        console[ cMethods[i] ] = function(){};
    }
}

(function($){
	
	$(document).ready(function(){
		
		datePickers();
	});
	

	function datePickers(){
		if( $('.max_event_day').length ){
			$('.max_event_day').datepicker({
				dateFormat : 'yy-mm-dd'
			});
		}
	}
	
})(jQuery);