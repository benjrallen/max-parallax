// place any jQuery/helper plugins in here, instead of separate, slower script files.


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



jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return -c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b;}return -c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b;}return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b;}return -c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b;}return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return (t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0){return b;}if(t==d){return b+c;}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b;}return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b;}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){return b;}if((t/=d)==1){return b+c;}if(!p){p=d*0.3;}if(a<Math.abs(c)){a=c;var s=p/4;}else{var s=p/(2*Math.PI)*Math.asin(c/a);}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){return b;}if((t/=d)==1){return b+c;}if(!p){p=d*0.3;}if(a<Math.abs(c)){a=c;var s=p/4;}else{var s=p/(2*Math.PI)*Math.asin(c/a);}return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0){return b;}if((t/=d/2)==2){return b+c;}if(!p){p=d*(0.3*1.5);}if(a<Math.abs(c)){a=c;var s=p/4;}else{var s=p/(2*Math.PI)*Math.asin(c/a);}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined){s=1.70158;}return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined){s=1.70158;}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined){s=1.70158;}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;}}}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2){return jQuery.easing.easeInBounce(x,t*2,0,c,d)*0.5+b;}return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b;}});

(function(A){A.fn.wheel=function(D){return this[D?"bind":"trigger"]("wheel",D)};A.event.special.wheel={setup:function(){A.event.add(this,C,B,{})},teardown:function(){A.event.remove(this,C,B)}};var C=!A.browser.mozilla?"mousewheel":"DOMMouseScroll"+(A.browser.version<"1.9"?" mousemove":"");function B(D){switch(D.type){case"mousemove":return A.extend(D.data,{clientX:D.clientX,clientY:D.clientY,pageX:D.pageX,pageY:D.pageY});case"DOMMouseScroll":A.extend(D,D.data);D.delta=-D.detail/3;break;case"mousewheel":D.delta=D.wheelDelta/120;if(A.browser.opera){D.delta*=-1}break}D.type="wheel";return A.event.handle.call(this,D,D.delta)}})(jQuery);



/* ---------------------------------- */

/* Worker */

(function($) {


    $.distancefromfold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return (fold + settings.threshold) - $element.offset().top ;
    };
    
    $.belowthefold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).height() + $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top + $(settings.container).height();
        }
        return fold <= $element.offset().top - settings.threshold;
    };
    
    $.rightoffold = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).width() + $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left + $(settings.container).width();
        }
        return fold <= $element.offset().left - settings.threshold;
    };
        
    $.abovethetop = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollTop();
        } else {
            var fold = $(settings.container).offset().top;
        }
        return fold >= $element.offset().top + settings.threshold  + $element.height();
    };
    
    $.leftofbegin = function($element, settings) {
        if (settings.container === undefined || settings.container === window) {
            var fold = $(window).scrollLeft();
        } else {
            var fold = $(settings.container).offset().left;
        }
        return fold >= $element.offset().left + settings.threshold + $element.width();
    };
    
    $.inview = function($element, settings) {
        return ($.abovethetop($element,settings)!=true && $.belowthefold($element,settings)!=true)
    };


    $.extend($.expr[':'], {
        "below-the-fold" : "$.belowthefold(a, {threshold : 0, container: window})",
        "above-the-fold" : "!$.belowthefold(a, {threshold : 0, container: window})",
        "right-of-fold"  : "$.rightoffold(a, {threshold : 0, container: window})",
        "left-of-fold"   : "!$.rightoffold(a, {threshold : 0, container: window})"
    });
    
})(jQuery);    


/* ---------------------------------- */

var Guru = Guru || {};

(function($){
	
	Guru.Events = {
		SECTION_ENTER: 'sectionEnter',
		SECTION_LEAVE: 'sectionLeave',
		
		SCROLL_TO: 'scrollTo',
		
		SCROLL: 'windowScroll',
		SCROLL_ENTER: 'windowScrollEnter',
		SCROLL_LEAVE: 'windwScrollLeave',
		
		KEY_UP: 'keyUp',
		KEY_DOWN: 'keyDown',
		KEY_LEFT: 'keyLeft',
		KEY_RIGHT: 'keyRight',
		KEY_ESC: 'keyEsc',
		KEY_SPACE: 'keySpace',
		
		CAROUSEL_NEXT: 'carouselNext',
		CAROUSEL_PREVIOUS: 'carouselPrev'
	};
	
	//variables to be set on Parallax init
    Guru.Body = null;
    Guru.Window = null;
    Guru.Scroll = null;
    Guru.Mobile = null;  //don't think I want this one    
    Guru.Unsupported = null;	//nor this one
	
	Guru.HAS_TRANSITIONS = ( $('.csstransitions').length ? true : false );
	
	//parses data-attr's out of element and sets the data in the object
	Guru.setObjectAttrData = function(){
		this.data = {
			offsetY:	parseInt( this.$self.attr('data-offsetY') ),
			Xposition:	this.$self.attr('data-Xposition'),
			speed:		parseFloat( this.$self.attr('data-speed') )
		};
	};
	
	Guru.Parallax = function(){
		
		this.backgrounds = [];
		
		this.mainNav = $('#fixed-nav');
		this.navs = $('nav');
		this.navFixed = false;
		this.current = [];
		this.navHeight = 0;
				
		this.init();
	};
	
	
	Guru.Parallax.prototype = {

		init: function(){
			var that = this;
			
			//set important variables
		    Guru.Body = $('body');
		    Guru.Window = $(window);		    
		    Guru.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : Guru.Body;
		    //probably don't need the next two
		    Guru.Mobile = (Guru.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)));
		    Guru.Unsupported = Guru.Body.hasClass('unsupported-browser');

			//the fixed nav stuff
			this.fixedNav();

			//attach keyboard events to body
			this.Keyboard.apply( Guru.Body, [{}] );

			//set up the backgrounds
			$('[data-type="background"]').each(function(){
				//var bg = new Guru.Parallax.Background( this );				
				that.backgrounds.push( new Guru.Parallax.Background( this ) );
			});
			
			//set the scrolling bind... do it in the background
			//this.Scrollable();
			
			
			//console.log('Parallax', this);
		},
		
		//returns index in array
		getBackgroundById: function( id ){
			var bg = null;
			
			$.each( this.backgrounds, function(i){
				//console.log('getting', id, this.id );
				
				if( id == this.id ){
					bg = i;
					return false;
				}
			});
			
			return bg;  //returns the index
		},
		
		//checks the current panels and returns the next one
		getNextBackground: function(){
			//bg is actual instance of background
			var bg = 0,
				that = this;
			
			$.each( this.current, function(){
				var idx = that.getBackgroundById( this );
				
				//console.log( idx, this);
				
				if( idx > bg )
					bg = idx;
			});

			//certain headers are position above the top of the actual element.  off && data-offscroll are key here
			var diff = Guru.Scroll.scrollTop() - this.backgrounds[ bg ].$self.offset().top + this.navHeight,
				off = parseInt( $( '#'+this.backgrounds[ bg ].id ).attr('data-offscroll') );
				
			if (off)
				diff += off;

			if( diff >= 0 && bg < this.backgrounds.length - 1 )
				bg = bg + 1;
			
			//console.log(' more than one current', diff, off, $( '#'+this.backgrounds[ bg ].id ).attr('data-offscroll') );
			return this.backgrounds[ bg ];
		},
		
		getPrevBackground: function(){
			//bg is actual instance of background
			var bg = this.backgrounds.length,
				that = this;
			
			$.each( this.current, function(){
				var idx = that.getBackgroundById( this );
				
				//console.log( idx, this);
				
				if( idx < bg )
					bg = idx;
			});

			//certain headers are position above the top of the actual element.  off && data-offscroll are key here
			var diff = Guru.Scroll.scrollTop() - this.backgrounds[ bg ].$self.offset().top + this.navHeight,
				off = parseInt( $( '#'+this.backgrounds[ bg ].id ).attr('data-offscroll') );
				
			if (off)
				diff += off;

			if( diff >= 0 && bg > 0 )
				bg = bg - 1;

			return this.backgrounds[ bg ];
		},
		
		scrollToPrev: function(){
			var bg = this.getPrevBackground();
			
			//console.log( 'SCROLL TO Prev', bg );

			return this.scrollToPanel( '#'+bg.id );
		},
		
		scrollToNext: function(){
			var bg = this.getNextBackground();
			
			//console.log( 'SCROLL TO NEXT', bg );

			return this.scrollToPanel( '#'+bg.id );
		},
		
		scrollToPanel: function( id ){
			//console.log( 'scroll to panel', id, this );
			
			var id = id,					
				target = $( id ).offset().top,
				off = parseInt( $(id).attr('data-offscroll') );
				
			if( off )
				target -= off;
			
			Guru.Scroll.stop(false, false).animate({
				scrollTop: target - this.navHeight
			}, 750);
				
		},
		
		//the fixed navigation
		fixedNav: function(){
			//console.log( 'fixednav', Guru.Window.scrollTop(), this.mainNav.offset().top, this.navs );
			var that = this,
				navOff = this.mainNav.offset();
				
			this.navHeight = this.mainNav.outerHeight();
			
			Guru.Window.bind('scroll', function(e){
				if( Guru.Window.scrollTop() >= navOff.top ){
					if( !that.navFixed ){
						that.navFixed = true;
						$('html').addClass('fixedNav');
					}
				} else {
					if( that.navFixed ){
						that.navFixed = false;
						$('html').removeClass('fixedNav');
					}
				}
			});
			

			//and bind the handlers for when the panel comes into view
			Guru.Body.bind( Guru.Events.SECTION_ENTER, function(e, id){
				//console.log( 'SECTION ENTER', e, id, that.navs.find('[data-id="'+id+'"]') );	
				that.navs.find('[data-id="'+id+'"]').addClass('active');
								
				if( $.inArray( id, that.current ) < 0 )
					that.current.push( id );
				
				//console.log( 'ENTER', that.current );
			});

			//and bind the handlers for when the panel leaves the view
			Guru.Body.bind( Guru.Events.SECTION_LEAVE, function(e, id){
				//console.log( 'SECTION LEAVE', e, id, that.navs.find('[data-id="'+id+'"]') );	
				that.navs.find('[data-id="'+id+'"]').removeClass('active');
				
				var i = $.inArray( id, that.current )
				if( i > -1 )
					that.current.splice( i, 1 );

				//console.log( 'Leave', that.current );
			});

			//and bind the handlers for when the space bar is pressed
			Guru.Body.bind( Guru.Events.KEY_SPACE, function(e){
				that.scrollToNext.call( that );
			});
			//and bind the handlers for when the space bar is pressed
			Guru.Body.bind( Guru.Events.KEY_ESC, function(e){
				that.scrollToPrev.call( that );
			});
			
			//bind a scrollTo function
			this.navs.find('.menu-item a').bind('click', function(e){
				e.preventDefault();
				
				//console.log( 'menu click', $(this).attr('href') );
				
				var href = $(this).attr('href');

				that.scrollToPanel.apply( that, [ href ] );
			});
			
			$('#contact-form').find('input, textarea').keydown(function(e){
				e.stopPropagation();
			});
			
		},
		//call it in the scope of whatever element, for this app, the body
		Keyboard: function(settings){
			var config = {};
			if(settings) $.extend(config, settings);
			
			this.each( function(){
				
		        var $self = $(this); //this doesn't look necessary
		      
		        $(document)
		        .bind('keydown',on_keydown);
		        
		        function on_keydown(e) {
		          
		          var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
		          
		          switch(key) {
		
		             case 27: //escape
		              Guru.Body.triggerHandler(Guru.Events.KEY_ESC);
					  e.preventDefault();
		             break;
		             
		             case 32: //space
		              Guru.Body.triggerHandler(Guru.Events.KEY_SPACE);
		              e.preventDefault();
		             break;
		             
		             case 38: //top
		              Guru.Body.triggerHandler(Guru.Events.KEY_UP);
		             break;
		           
		             case 39: //right
		              Guru.Body.triggerHandler(Guru.Events.KEY_RIGHT);
		              e.preventDefault();
		             break;
		             
		             case 40: ///bottom
		              Guru.Body.triggerHandler(Guru.Events.KEY_DOWN);
		             break;
		              
		             case 37: //left
		              Guru.Body.triggerHandler(Guru.Events.KEY_LEFT);
		             break;
		             
		          }//switch
		          
		        }//keydown
					
			});
		}
		
	};	
	
	Guru.Parallax.Background = function( el ){
		
		this.$self = $(el);
		this.id = this.$self.attr('id');
		this.is_nav = !!(this.$self.attr('data-nav'));
		this.threshold = parseInt(this.$self.attr('data-threshold'));
		this.background_images = [];
		this.sprites = [];
		this.active = false;
		
		this.init();

		//console.log( 'constructing background', this );

	};
	
	Guru.Parallax.Background.prototype = {
		init: function(){
			var that = this;
			
			//setup the background images
			$('[data-type="background-image"]', this.$self ).each( function(){
				that.background_images.push( new Guru.Parallax.BackgroundImage( this ) );	
			});

			//setup the sprites
			$('[data-type="sprite"]', this.$self ).each( function(){
				that.sprites.push( new Guru.Parallax.Sprite( this ) );	
			});

			this.Scrollable();
			
		},
				
		//The Scrollable function
		Scrollable: function(settings) {
			//var config = { threshold: -100, offset_scroll: 6, offset_intertia: .15 };

			//if (settings) $.extend(config, settings);
			
			var that = this,
				offsetCoords = this.$self.offset();
				
			//config.threshold = 0;
			
			if (Guru.Mobile || Guru.Unsupported) {  
				$.each(that.background_images, function(){
					this.$self.css({
						backgroundAttribute: 'scroll',
						backgroundRepeat: 'repeat'
					});
				});
			} else {
				Guru.Window.bind('scroll', function(e){
					if ( $.inview(that.$self,{threshold: that.threshold}) ) {
						//console.log( 'IN VIEW!', that.$self );
						
						if( !that.active ){
							that.active = true;
							
							if(that.is_nav)
								Guru.Body.triggerHandler( Guru.Events.SECTION_ENTER, that.id );
								
							that.$self.triggerHandler( Guru.Events.SCROLL_ENTER );
						}
						
						
						//this same calculation is used a lot
						var distance = $.distancefromfold(that.$self,{threshold: that.threshold}) - that.threshold;

						_scroll_background( distance );
						_scroll_sprites(  );
												
						//that.$self.triggerHandler( Guru.Events.SCROLL, $.distancefromfold( that.$self, {threshold: config.threshold} ) - config.threshold );
						that.$self.triggerHandler( Guru.Events.SCROLL, distance );
						
					} else {
						if( that.active ){
							that.active = false;
							that.$self.triggerHandler( Guru.Events.SCROLL_LEAVE );
							
							if(that.is_nav)
								Guru.Body.triggerHandler( Guru.Events.SECTION_LEAVE, that.id );
						}
					}
				});
			}
			
			   
			function _scroll_background( distance ) {
							    
			    var distance = distance;
			    
				$.each( that.background_images, function(){
					// Scroll the background at var speed
					// the yPos is a negative value because we're scrolling it UP!	
					var yPos = ~~(-distance * this.data.speed);

					//console.log( yPos, $.distancefromfold(that.$self,{threshold:config.threshold}) - config.threshold );
					// If this element has a Y offset then add it on
					if( this.data.offsetY )
						yPos += this.data.offsetY;
						
					this.$self.css({
						backgroundPosition: '50% '+ yPos + 'px'
					});
				});

			}
			
			function _scroll_sprites(){
				var distance = Guru.Window.scrollTop();
								
				$.each( that.sprites, function(){
					//var yPos = Math.floor( -distance * this.data.speed );
					var yPos = ~~(-distance / this.data.speed);
					//what is a ~~ ?  Super fast substitute for Math.floor() http://stackoverflow.com/questions/5971645/what-is-the-double-tilde-operator-in-javascript
										
					if( this.data.offsetY )
						yPos += this.data.offsetY;
					
					this.$self.css({
						top: yPos
					});
				});
				
			}
			       			
			return this;
			
		}	
		
	};
	
	Guru.Parallax.BackgroundImage = function( el ){
		this.$self = $( el );
		this.init();
	};
	
	Guru.Parallax.BackgroundImage.prototype = {
		
		init: function(){
			//set up that data-attr data
			Guru.setObjectAttrData.call( this );
		}

	};
	
	Guru.Parallax.Sprite = function( el ){
		this.$self = $( el );
		this.init();
	};
	
	Guru.Parallax.Sprite.prototype = {
		init: function(){
			//set up that data-attr data
			Guru.setObjectAttrData.call( this );
		}
	};

	
	/* ---------------------------------- */
	
	/* Carousel for the events */

	Guru.Carousel = function(settings){
		
		var config = {
			cont: 		'#some-cont',
			navSel: 	'.nav',
			prevSel: 	'.prev',
			nextSel: 	'.next',
			time:		333,
			slideSel: 	'.event-wrap'			
		};
		
		this.config = $.extend( config, settings );
				
		this.$cont = $(this.config.cont);

		if( !this.$cont.length )
			return false;
		
		this.slides = [];
		this.currentSlide = null;
		
//		this.$nav = {
//			prev: this.$cont.find(this.config.navSel).find(this.config.prevSel),
//			next: this.$cont.find(this.config.navSel).find(this.config.nextSel)
//		};
		
		this.init();
		
	};
		
	Guru.Carousel.prototype = {
		init: function(){			
			var that = this;
			
			//pass in the container for event interaction
			this.$cont.find( this.config.slideSel ).each(function(){
				//console.log( that.$cont );
				that.slides.push( new Guru.Carousel.Slide({
										el: this,
										parent: that,
										navSel: that.config.navSel,
										prevSel: that.config.prevSel,
										nextSel: that.config.nextSel
									  })
				);
			});
			
			if( !this.slides.length )
				return false;
			
			this.currentSlide = that.slides[0];
			
			//bind click handlers
//			this.$nav.next.click(function(e){
//				that.onNextClick.apply(that, arguments);
//			});
//			this.$nav.prev.click(function(e){
//				that.onPrevClick.apply(that, arguments);
//			});

			//and bind the handlers for slide navigation
			this.$cont.bind( Guru.Events.CAROUSEL_NEXT, function(e){
				//console.log( 'Guru.Events.CAROUSEL_NEXT ENTER', e );
				that.onNextClick.apply(that, arguments);				
			});
			this.$cont.bind( Guru.Events.CAROUSEL_PREVIOUS, function(e){
				//console.log( 'Guru.Events.CAROUSEL_PREVIOUS ENTER', e );	
				that.onPrevClick.apply(that, arguments);
			});

			Guru.Body.bind( Guru.Events.KEY_RIGHT, function(e){
				//console.log( 'KEY RIGHT!!!' );
				
				if ( $.inview(that.$cont,{threshold: 0}) ) {
					//console.log( 'INVIEW! ' );
					that.onNextClick.apply(that, arguments);
				}
			});
			Guru.Body.bind( Guru.Events.KEY_LEFT, function(e){
				//console.log( 'KEY Left!!!' );
				
				if ( $.inview(that.$cont,{threshold: 0}) ) {
					//console.log( 'INVIEW! ' );
					that.onPrevClick.apply(that, arguments);
				}
			});
			
			//console.log('initing carousel', this, $.inArray( this.currentSlide, this.slides ) );
		},
		getSlideIndex: function(){
			return $.inArray( this.currentSlide, this.slides );
		},
		hasNextSlide: function(){
			return ( this.getSlideIndex() < this.slides.length - 1 );
		},
		hasPrevSlide: function(){
			return ( this.getSlideIndex() > 0 );
		},
		onNextClick: function(e){			
			if( this.hasNextSlide() ){
				this.currentSlide = this.slides[ this.getSlideIndex() + 1 ];
				return this.slideChange();
			}
		},
		onPrevClick: function(e){
			if( this.hasPrevSlide() ){
				this.currentSlide = this.slides[ this.getSlideIndex() - 1 ];
				return this.slideChange();
			}
		},
		slideChange: function(){			
			var left = -1 * this.currentSlide.getLeft();
			
			if( Guru.HAS_TRANSITIONS ) {
				this.$cont.css({
					left: left
				});
			} else {
				this.$cont.stop(false, false).animate({
						left: left
					},
					this.config.time,
					'easeOutQuad'
				);
			}			
		}
	};
					
	
	Guru.Carousel.Slide = function( settings ){
		var config = {
			el: 		null,
			$cont:		null,
			navSel: 	'.nav',
			prevSel: 	'.prev',
			nextSel: 	'.next'
		};
		
		this.config = $.extend( config, settings );


		this.$self = $( this.config.el );
		
		if( !this.$self.length )
			return false;
		
		this.$nav = {
			prev: this.$self.find(this.config.navSel).find(this.config.prevSel),
			next: this.$self.find(this.config.navSel).find(this.config.nextSel)
		};
		
		
		//console.log( 'slide', this );
		
		this.init();
		
	};
	
	Guru.Carousel.Slide.prototype = {
		init: function(){
			var that = this;
			
			//hide certain nav elements
			if( !this.$self.next().length )
				this.$nav.next.hide();

			if( !this.$self.prev().length )
				this.$nav.prev.hide();
			
			//bind the nav events
			this.$nav.next.click(function(e){
				//that.onNextClick.apply(that, arguments);
				that.config.parent.$cont.triggerHandler( Guru.Events.CAROUSEL_NEXT, that );
			});
			this.$nav.prev.click(function(e){
				//that.onPrevClick.apply(that, arguments);
				that.config.parent.$cont.triggerHandler( Guru.Events.CAROUSEL_PREVIOUS, that );
			});
			
		},
		getLeft: function(){
			return this.$self.position().left;
		}
	};


	
})(jQuery);


(function($){
	
	
})(jQuery);



(function($){

	Guru.loadingGoogle = false;

	//google maps custom integration
	Guru.Map = function(config){
		//default configurable variables
		var me = this,
			defaults = {
				zoom: 4,
				//center on Salina kansas for good full us view
				centerLat: 38.7902935,
				centerLng: -97.64023729999997,
				mapHeight: 500,
				fitMarkers: false, //fit all the markers on the map?  overrides centerLatLng and zoom
				markerOverridesCenter: false,
				contId: 'gmapCont',
				dataCont: '.locationList',
				dataBlock: '.locationItem',
				dataAttr: 'location-data',
				locationKey: 'location_address',
				fallbackLocationKey: 'mailing_address',
				fallbackOverrideKey: false, //set as post meta to prefer the secondary address as the marker address
				markerImageKey: false,
				zoomControlStyle: 'DEFAULT',
				streetViewControl: false,
				scrollwheel: false,
				mapTypeId: 'ROADMAP',
				markerScale: 0.5,
				blocksAreClickable: false,
				scrollToMapOnClick: false,
				scrollSpeed: 500,
				directionsLink: false,
				globalInitID: 'GuruMapInit' //used to expose the setupConstants (used in init) function globally for googles async callback... change this to something unique for each instance running
			};
		for (var key in config) {
			defaults[key] = config[key] || defaults[key];
		}
		for (var key in defaults) {
			me[key] = defaults[key];
		}

		//me.loadingGoogle = false;

		me.setupConstants = function(){
			
			if ( typeof google !== 'undefined' && typeof google.maps !== 'undefined' && typeof google.maps.InfoWindow !== 'undefined' ) {
	
				//remove global access to this setup function
				if ( window[me.globalInitID] )
					window[me.globalInitID] = undefined;
	
				//constants
				Guru.loadingGoogle = false;
	
				me.infowindow = new google.maps.InfoWindow();
	
				me.directionsService = new google.maps.DirectionsService();
				//me.directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
				me.directionsDisplay = new google.maps.DirectionsRenderer();
				//keep that map out of it for now.
				me.directionsDisplay.setMap( null );
				//geocoder used to take address and convert it to latLng and make marker
				me.geocoder = new google.maps.Geocoder();
				me.center = null;
				me.cont = null;
				me.map = null;
				me.form = null;
				me.startAddy = '';
				me.endAddy = '';
				me.currentRoute = null;
				me.confirmBttn = null;
				//me.waypoints = [];
				me.dblclickListener = null;
	
				me.data = [];
				me.markers = [];
	
				me.init();
	
			} else {
				//console.log('no google');
	
				if (!Guru.loadingGoogle) {
					Guru.loadingGoogle = true;
	
					//make this setup function available globally
					window[me.globalInitID] = me.setupConstants;
	
					var script = document.createElement("script");
					script.type = "text/javascript";
					script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback="+me.globalInitID;
					document.body.appendChild(script);
				} else {
					setTimeout( me.setupConstants, 50 );
				}
	
	
			}
			
		};

		me.handleBlockClick = function(e){			
			//find associated marker, and setup the coords like google does
			var marker = me.markers[ $(this).attr('markerIndex') ],
				coords = { latLng: marker.position };
	
			//console.log('me.handleBlockClick', e, this, marker, coords);
			me.handleMarkerClick.apply( marker, [coords] );
	
			//move page up to see map?
			if ( me.scrollToMapOnClick ){
				//finding the target element is not 'smart' (enough) right now, make it smarter later.
				var target = $(me.cont).closest('section'),
					off = target.offset(),
					//different browsers use different elements to calculate the scrolltop ( webkit=body, mozilla=html, par example )
					sTop = $('body').scrollTop() || $('html').scrollTop();
	
				if( sTop > off.top )
					$('html, body').stop(false, false).animate({ scrollTop: off.top }, me.scrollSpeed );
	
				target = null;
				off = null;
			}
	
			return;
		};
	
		me.handleMarkerClick = function( coords ){	
			var content = '<div class="mapInfoDom">'+$(this.item.DOM).html();
	
	
			//here is where we print out a directions link
			if (me.directionsLink) {
				var addy = this.item[me.locationKey].replace(/ /g,'+').replace(/\n/g,',+'),
					//dUrl = 'http://maps.google.com/maps?saddr=&daddr='+addy+'&z=14'
					dUrl = 'http://maps.google.com/maps?saddr=&daddr='+addy
	
				//console.log( addy );
	
				content += '<a class="directionsLink" href="'+dUrl+'" title="Get directions to this site" target="_blank">Get Driving Directions</a>';
			}
	
			content += '</div>';
	
			//console.log( this.item.DOM );
	
			me.infowindow.setContent( content );
	
			me.infowindow.open(me.map, this);
		};


		me.setupConstants();
	};

	Guru.Map.prototype.init = function(){
		//gather data from page elements
		this.setupMarkerData();

		//console.log( 'data', me.data );

		//setup the map and initialize it.
		this.setupMap();

		//setup markers
		this.setupMarkers();

	};

	Guru.Map.prototype.setupMap = function(){
		var me = this;
		//find the container
		me.cont = document.getElementById( me.contId );

		//check dimensions
		if ( !$(me.cont).height() )
			$(me.cont).height( me.mapHeight );

		//console.log( 'me.cont', $(me.cont).width(), $(me.cont).height() );

		//set the google center
		me.center = new google.maps.LatLng( me.centerLat, me.centerLng );

		//get the map
		me.map = new google.maps.Map( me.cont, {
			center: me.center,
			zoom: me.zoom,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle[ me.zoomControlStyle ]
			},
			streetViewControl: me.streetViewControl,
			scrollwheel: me.scrollwheel,
			mapTypeId: google.maps.MapTypeId[ me.mapTypeId ]
		});
	};

	Guru.Map.prototype.setupMarkers = function(){
		var me = this;
		
		if ( me.data.length ) {
			//start bounds here for fitmarkers option later down
			var latLngBounds = new google.maps.LatLngBounds();

			//iterate through markers
			$.each(me.data, function(i){
				//console.log( i, this );

				var dataObj = this,
					address = ( me.fallbackOverrideKey && dataObj[ me.fallbackOverrideKey ] && dataObj[ me.fallbackLocationKey ] ?
									//if so, use the fallback key
									dataObj[ me.fallbackLocationKey ] :
									//otherwise, if there is no preference, try to use the primary key, and then fallback if it is not there
									dataObj[ me.locationKey ] || dataObj[ me.fallbackLocationKey ]
								);

				//console.log('dataObj', dataObj);

				if ( address ) {

					//console.log( 'address', address, me.stripTags( address ) );
					me.geocoder.geocode({

						address: me.stripTags( address )

					}, function(results, status){

						if (status === google.maps.GeocoderStatus.OK) {

							me.markers[i] = new google.maps.Marker({
								map: me.map,
								position: results[0].geometry.location,
								item: dataObj
							});

							//add a custom marker image?
							if ( me.markerImageKey && dataObj[ me.markerImageKey ] ){
								var img = dataObj[ me.markerImageKey ],
									src = img['src'],
									w = Math.floor( img.width * me.markerScale ),
									h = Math.floor( img.height * me.markerScale );

								me.markers[i].setIcon( new google.maps.MarkerImage(
																//url
																dataObj[ me.markerImageKey ].src,
																//original image size ( width, height )
																new google.maps.Size( w, h ),
																//origin in image ( left, top ), (0,0) is google default
																new google.maps.Point( 0, 0 ),
																//anchor point
																new google.maps.Point( w/2, h/2 ),
																new google.maps.Size( w, h )
															)
								);

								w = null;
								h = null;
								src = null;
								img = null;
							}

							//bind the click listener
							//google.maps.event.addListener( me.markers[i], 'mousedown', me.handleMarkerClick );
							google.maps.event.addListener( me.markers[i], 'click', me.handleMarkerClick );

							//attach click handler to block if set
							if ( me.blocksAreClickable ) {

								$(dataObj.DOM).attr({ markerIndex: i }).mousedown( me.handleBlockClick ).find('a').click(me.preventBlockLinks);

							}

							if (me.fitMarkers) {
								//extend the auto bounds
								latLngBounds.extend( me.markers[i].position );
								me.map.fitBounds( latLngBounds );
							}
							
							//reset the center if the overrides exist.  came in dolphin project
							if( me.markerOverridesCenter && dataObj.center_lat && dataObj.center_lng ) {
								me.map.setCenter( new google.maps.LatLng( dataObj.center_lat, dataObj.center_lng ) );
							}							
							//console.log( dataObj.DOM );
						} else {
							//something went wrong.
							alert("Geocode was not successful for the following reason: " + status);
						}
					});
				}

			});
		}
	};

	Guru.Map.prototype.preventBlockLinks = function(e){
		e.preventDefault();
	};
	
	Guru.Map.prototype.setupMarkerData = function(){
		var me = this;	
		//dataBlock supplied in config
		return $(me.dataCont).find(me.dataBlock).each(function(){
			//console.log( $(this).attr( me.dataAttr ) );
			var item = JSON.parse( $(this).attr( me.dataAttr ) );
			item.DOM = this;
			me.data.push( item );
		});
	};

	Guru.Map.prototype.stripTags = function(s){
		//s = String
		if (typeof s !== 'string')
			return false;
		return s.replace(/<([^>]+)>/g,'').replace(/\n|\r/g,' ');
		//return s.replace(/\\n/g,'');
	};

})(jQuery);

