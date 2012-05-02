var Guru = Guru || {};

(function($){
		
	//transitionTime
	var guruTransTime = 350,
		maxWidth = 960,
		//cache the jQuery window object
		$window = $(window);
	
	
	
		
	$(document).ready(function(){
		
		$('html.ie').length ? Guru.ie = true : Guru.ie = false;
		$('html.lte8').length ? Guru.lte8 = true : Guru.lte8 = false;
		typeof WebKitPoint !== 'undefined' ? Guru.webkit = true : Guru.webkit = false;

		contactPage();
		//setupParallax();
		//fixedNav();
		
		var parallax = new Guru.Parallax();
		
		
		eventsPage();

		//scroll is important to everything on the page
		$(window).trigger('scroll');
	});	
	
	function eventsPage(){
		new Guru.Carousel({
			cont: '#events-car'
		});
	}	

	function contactPage(){
		if( $('#gMap').length ){
			new Guru.Map({
				streetViewControl: true,
				fitMarkers: false,
				zoom: 16,
				centerLat: 36.1565,
				centerLng: -95.9806,
				//mapHeight: 206,
				contId: 'gMap',
				dataCont: '#contact .locationList', //specify the container id so it doesn't pick up all the location lists around the page
				locationKey: 'address',
				markerScale: 0.4,
				markerOverridesCenter: true,
				//markerImageKey: 'featured_custom_marker',
				blocksAreClickable: true,
				scrollToMapOnClick: true,
				scrollSpeed: 450,
				directionsLink: true,
				globalInitId: 'gMapInit'
			});
			
			//block the location links from doing anything.
			//console.log( $('.entry-content .locationList a') );
			//$('.entry-content .locCont a').live('click', function(e){
			//	e.preventDefault();
			//});
		}
	}

	
})(jQuery);
