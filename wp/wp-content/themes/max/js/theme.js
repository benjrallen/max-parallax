try{console.log("Hello Console.")}catch(e$$5){window.console={};for(var cMethods="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),i=0;i<cMethods.length;i++)console[cMethods[i]]=function(){}}jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return jQuery.easing[jQuery.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){return(a/=e/2)<1?d/2*a*a+b:-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){return(a/=e/2)<1?d/2*a*a*a+b:d/
2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){return(a/=e/2)<1?d/2*a*a*a*a+b:-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){return(a/=e/2)<1?d/2*a*a*a*a*a+b:d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/
e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){return a==0?b:a==e?b+d:(a/=e/2)<1?d/2*Math.pow(2,10*(a-1))+b:d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*
a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){return(a/=e/2)<1?-d/2*(Math.sqrt(1-a*a)-1)+b:d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){var c=1.70158,f=0,g=d;if(a==0)return b;if((a/=e)==1)return b+d;f||(f=e*0.3);g<Math.abs(d)?(g=d,c=f/4):c=f/(2*Math.PI)*Math.asin(d/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/f))+b},easeOutElastic:function(c,a,b,d,e){var c=1.70158,f=0,g=d;if(a==0)return b;if((a/=
e)==1)return b+d;f||(f=e*0.3);g<Math.abs(d)?(g=d,c=f/4):c=f/(2*Math.PI)*Math.asin(d/g);return g*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/f)+d+b},easeInOutElastic:function(c,a,b,d,e){var c=1.70158,f=0,g=d;if(a==0)return b;if((a/=e/2)==2)return b+d;f||(f=e*0.3*1.5);g<Math.abs(d)?(g=d,c=f/4):c=f/(2*Math.PI)*Math.asin(d/g);return a<1?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/f)+b:g*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/f)*0.5+d+b},easeInBack:function(c,a,b,d,e,f){f==void 0&&
(f=1.70158);return d*(a/=e)*a*((f+1)*a-f)+b},easeOutBack:function(c,a,b,d,e,f){f==void 0&&(f=1.70158);return d*((a=a/e-1)*a*((f+1)*a+f)+1)+b},easeInOutBack:function(c,a,b,d,e,f){f==void 0&&(f=1.70158);return(a/=e/2)<1?d/2*a*a*(((f*=1.525)+1)*a-f)+b:d/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+b},easeInBounce:function(c,a,b,d,e){return d-jQuery.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*
(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){return a<e/2?jQuery.easing.easeInBounce(c,a*2,0,d,e)*0.5+b:jQuery.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}});
(function(c){function a(a){switch(a.type){case "mousemove":return c.extend(a.data,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY});case "DOMMouseScroll":c.extend(a,a.data);a.delta=-a.detail/3;break;case "mousewheel":a.delta=a.wheelDelta/120,c.browser.opera&&(a.delta*=-1)}a.type="wheel";return c.event.handle.call(this,a,a.delta)}c.fn.wheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};c.event.special.wheel={setup:function(){c.event.add(this,b,a,{})},teardown:function(){c.event.remove(this,
b,a)}};var b=!c.browser.mozilla?"mousewheel":"DOMMouseScroll"+(c.browser.version<"1.9"?" mousemove":"")})(jQuery);
(function(c){c.distancefromfold=function(a,b){return(b.container===void 0||b.container===window?c(window).height()+c(window).scrollTop():c(b.container).offset().top+c(b.container).height())+b.threshold-a.offset().top};c.belowthefold=function(a,b){return(b.container===void 0||b.container===window?c(window).height()+c(window).scrollTop():c(b.container).offset().top+c(b.container).height())<=a.offset().top-b.threshold};c.rightoffold=function(a,b){return(b.container===void 0||b.container===window?c(window).width()+
c(window).scrollLeft():c(b.container).offset().left+c(b.container).width())<=a.offset().left-b.threshold};c.abovethetop=function(a,b){return(b.container===void 0||b.container===window?c(window).scrollTop():c(b.container).offset().top)>=a.offset().top+b.threshold+a.height()};c.leftofbegin=function(a,b){return(b.container===void 0||b.container===window?c(window).scrollLeft():c(b.container).offset().left)>=a.offset().left+b.threshold+a.width()};c.inview=function(a,b){return c.abovethetop(a,b)!=!0&&c.belowthefold(a,
b)!=!0};c.extend(c.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);var Guru=Guru||{};
(function(c){Guru.Events={SECTION_ENTER:"sectionEnter",SECTION_LEAVE:"sectionLeave",SCROLL_TO:"scrollTo",SCROLL:"windowScroll",SCROLL_ENTER:"windowScrollEnter",SCROLL_LEAVE:"windwScrollLeave",KEY_UP:"keyUp",KEY_DOWN:"keyDown",KEY_LEFT:"keyLeft",KEY_RIGHT:"keyRight",KEY_ESC:"keyEsc",KEY_SPACE:"keySpace",CAROUSEL_NEXT:"carouselNext",CAROUSEL_PREVIOUS:"carouselPrev"};Guru.Body=null;Guru.Window=null;Guru.Scroll=null;Guru.Mobile=null;Guru.Unsupported=null;Guru.HAS_TRANSITIONS=c(".csstransitions").length?
!0:!1;Guru.setObjectAttrData=function(){this.data={offsetY:parseInt(this.$self.attr("data-offsetY")),Xposition:this.$self.attr("data-Xposition"),speed:parseFloat(this.$self.attr("data-speed"))}};Guru.Parallax=function(){this.backgrounds=[];this.mainNav=c("#fixed-nav");this.navs=c("nav");this.navFixed=!1;this.current=[];this.navHeight=0;this.init()};Guru.Parallax.prototype={init:function(){var a=this;Guru.Body=c("body");Guru.Window=c(window);Guru.Scroll=c.browser.mozilla||c.browser.msie?c("html"):
Guru.Body;Guru.Mobile=Guru.Body.hasClass("webkit-mobile")||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i);Guru.Unsupported=Guru.Body.hasClass("unsupported-browser");this.fixedNav();this.Keyboard.apply(Guru.Body,[{}]);c('[data-type="background"]').each(function(){a.backgrounds.push(new Guru.Parallax.Background(this))})},getBackgroundById:function(a){var b=null;c.each(this.backgrounds,function(c){if(a==this.id)return b=c,!1});return b},getNextBackground:function(){var a=
0,b=this;c.each(this.current,function(){var c=b.getBackgroundById(this);c>a&&(a=c)});var d=Guru.Scroll.scrollTop()-this.backgrounds[a].$self.offset().top+this.navHeight,e=parseInt(c("#"+this.backgrounds[a].id).attr("data-offscroll"));e&&(d+=e);d>=0&&a<this.backgrounds.length-1&&(a+=1);return this.backgrounds[a]},getPrevBackground:function(){var a=this.backgrounds.length,b=this;c.each(this.current,function(){var c=b.getBackgroundById(this);c<a&&(a=c)});var d=Guru.Scroll.scrollTop()-this.backgrounds[a].$self.offset().top+
this.navHeight,e=parseInt(c("#"+this.backgrounds[a].id).attr("data-offscroll"));e&&(d+=e);d>=0&&a>0&&(a-=1);return this.backgrounds[a]},scrollToPrev:function(){return this.scrollToPanel("#"+this.getPrevBackground().id)},scrollToNext:function(){return this.scrollToPanel("#"+this.getNextBackground().id)},scrollToPanel:function(a){var b=c(a).offset().top;(a=parseInt(c(a).attr("data-offscroll")))&&(b-=a);Guru.Scroll.stop(!1,!1).animate({scrollTop:b-this.navHeight},750)},fixedNav:function(){var a=this,
b=this.mainNav.offset();this.navHeight=this.mainNav.outerHeight();Guru.Window.bind("scroll",function(){if(Guru.Window.scrollTop()>=b.top){if(!a.navFixed)a.navFixed=!0,c("html").addClass("fixedNav")}else if(a.navFixed)a.navFixed=!1,c("html").removeClass("fixedNav")});Guru.Body.bind(Guru.Events.SECTION_ENTER,function(b,e){a.navs.find('[data-id="'+e+'"]').addClass("active");c.inArray(e,a.current)<0&&a.current.push(e)});Guru.Body.bind(Guru.Events.SECTION_LEAVE,function(b,e){a.navs.find('[data-id="'+e+
'"]').removeClass("active");var f=c.inArray(e,a.current);f>-1&&a.current.splice(f,1)});Guru.Body.bind(Guru.Events.KEY_SPACE,function(){a.scrollToNext.call(a)});Guru.Body.bind(Guru.Events.KEY_ESC,function(){a.scrollToPrev.call(a)});this.navs.find(".menu-item a").bind("click",function(b){b.preventDefault();b=c(this).attr("href");a.scrollToPanel.apply(a,[b])});c("#contact-form").find("input, textarea").keydown(function(a){a.stopPropagation()})},Keyboard:function(a){var b={};a&&c.extend(b,a);this.each(function(){c(this);
c(document).bind("keydown",function(a){switch(a.charCode?a.charCode:a.keyCode?a.keyCode:0){case 27:Guru.Body.triggerHandler(Guru.Events.KEY_ESC);a.preventDefault();break;case 32:Guru.Body.triggerHandler(Guru.Events.KEY_SPACE);a.preventDefault();break;case 38:Guru.Body.triggerHandler(Guru.Events.KEY_UP);break;case 39:Guru.Body.triggerHandler(Guru.Events.KEY_RIGHT);a.preventDefault();break;case 40:Guru.Body.triggerHandler(Guru.Events.KEY_DOWN);break;case 37:Guru.Body.triggerHandler(Guru.Events.KEY_LEFT)}})})}};
Guru.Parallax.Background=function(a){this.$self=c(a);this.id=this.$self.attr("id");this.is_nav=!!this.$self.attr("data-nav");this.threshold=parseInt(this.$self.attr("data-threshold"));this.background_images=[];this.sprites=[];this.active=!1;this.init()};Guru.Parallax.Background.prototype={init:function(){var a=this;c('[data-type="background-image"]',this.$self).each(function(){a.background_images.push(new Guru.Parallax.BackgroundImage(this))});c('[data-type="sprite"]',this.$self).each(function(){a.sprites.push(new Guru.Parallax.Sprite(this))});
this.Scrollable()},Scrollable:function(){function a(a){c.each(d.background_images,function(){var b=~~(-a*this.data.speed);this.data.offsetY&&(b+=this.data.offsetY);this.$self.css({backgroundPosition:"50% "+b+"px"})})}function b(){var a=Guru.Window.scrollTop();c.each(d.sprites,function(){var b=~~(-a/this.data.speed);this.data.offsetY&&(b+=this.data.offsetY);this.$self.css({top:b})})}var d=this;this.$self.offset();Guru.Mobile||Guru.Unsupported?c.each(d.background_images,function(){this.$self.css({backgroundAttribute:"scroll",
backgroundRepeat:"repeat"})}):Guru.Window.bind("scroll",function(){if(c.inview(d.$self,{threshold:d.threshold})){if(!d.active)d.active=!0,d.is_nav&&Guru.Body.triggerHandler(Guru.Events.SECTION_ENTER,d.id),d.$self.triggerHandler(Guru.Events.SCROLL_ENTER);var e=c.distancefromfold(d.$self,{threshold:d.threshold})-d.threshold;a(e);b();d.$self.triggerHandler(Guru.Events.SCROLL,e)}else if(d.active)d.active=!1,d.$self.triggerHandler(Guru.Events.SCROLL_LEAVE),d.is_nav&&Guru.Body.triggerHandler(Guru.Events.SECTION_LEAVE,
d.id)});return this}};Guru.Parallax.BackgroundImage=function(a){this.$self=c(a);this.init()};Guru.Parallax.BackgroundImage.prototype={init:function(){Guru.setObjectAttrData.call(this)}};Guru.Parallax.Sprite=function(a){this.$self=c(a);this.init()};Guru.Parallax.Sprite.prototype={init:function(){Guru.setObjectAttrData.call(this)}};Guru.Carousel=function(a){this.config=c.extend({cont:"#some-cont",navSel:".nav",prevSel:".prev",nextSel:".next",time:333,slideSel:".event-wrap"},a);this.$cont=c(this.config.cont);
if(!this.$cont.length)return!1;this.slides=[];this.currentSlide=null;this.init()};Guru.Carousel.prototype={init:function(){var a=this;this.$cont.find(this.config.slideSel).each(function(){a.slides.push(new Guru.Carousel.Slide({el:this,parent:a,navSel:a.config.navSel,prevSel:a.config.prevSel,nextSel:a.config.nextSel}))});if(!this.slides.length)return!1;this.currentSlide=a.slides[0];this.$cont.bind(Guru.Events.CAROUSEL_NEXT,function(b){a.onNextClick.apply(a,arguments)});this.$cont.bind(Guru.Events.CAROUSEL_PREVIOUS,
function(b){a.onPrevClick.apply(a,arguments)});Guru.Body.bind(Guru.Events.KEY_RIGHT,function(b){c.inview(a.$cont,{threshold:0})&&a.onNextClick.apply(a,arguments)});Guru.Body.bind(Guru.Events.KEY_LEFT,function(b){c.inview(a.$cont,{threshold:0})&&a.onPrevClick.apply(a,arguments)})},getSlideIndex:function(){return c.inArray(this.currentSlide,this.slides)},hasNextSlide:function(){return this.getSlideIndex()<this.slides.length-1},hasPrevSlide:function(){return this.getSlideIndex()>0},onNextClick:function(){if(this.hasNextSlide())return this.currentSlide=
this.slides[this.getSlideIndex()+1],this.slideChange()},onPrevClick:function(){if(this.hasPrevSlide())return this.currentSlide=this.slides[this.getSlideIndex()-1],this.slideChange()},slideChange:function(){var a=-1*this.currentSlide.getLeft();Guru.HAS_TRANSITIONS?this.$cont.css({left:a}):this.$cont.stop(!1,!1).animate({left:a},this.config.time,"easeOutQuad")}};Guru.Carousel.Slide=function(a){this.config=c.extend({el:null,$cont:null,navSel:".nav",prevSel:".prev",nextSel:".next"},a);this.$self=c(this.config.el);
if(!this.$self.length)return!1;this.$nav={prev:this.$self.find(this.config.navSel).find(this.config.prevSel),next:this.$self.find(this.config.navSel).find(this.config.nextSel)};this.init()};Guru.Carousel.Slide.prototype={init:function(){var a=this;this.$self.next().length||this.$nav.next.hide();this.$self.prev().length||this.$nav.prev.hide();this.$nav.next.click(function(){a.config.parent.$cont.triggerHandler(Guru.Events.CAROUSEL_NEXT,a)});this.$nav.prev.click(function(){a.config.parent.$cont.triggerHandler(Guru.Events.CAROUSEL_PREVIOUS,
a)})},getLeft:function(){return this.$self.position().left}}})(jQuery);(function(){})(jQuery);
(function(c){Guru.loadingGoogle=!1;Guru.Map=function(a){var b=this,d={zoom:4,centerLat:38.7902935,centerLng:-97.64023729999997,mapHeight:500,fitMarkers:!1,markerOverridesCenter:!1,contId:"gmapCont",dataCont:".locationList",dataBlock:".locationItem",dataAttr:"location-data",locationKey:"location_address",fallbackLocationKey:"mailing_address",fallbackOverrideKey:!1,markerImageKey:!1,zoomControlStyle:"DEFAULT",streetViewControl:!1,scrollwheel:!1,mapTypeId:"ROADMAP",markerScale:0.5,blocksAreClickable:!1,
scrollToMapOnClick:!1,scrollSpeed:500,directionsLink:!1,globalInitID:"GuruMapInit"},e;for(e in a)d[e]=a[e]||d[e];for(e in d)b[e]=d[e];b.setupConstants=function(){if(typeof google!=="undefined"&&typeof google.maps!=="undefined"&&typeof google.maps.InfoWindow!=="undefined")window[b.globalInitID]&&(window[b.globalInitID]=void 0),Guru.loadingGoogle=!1,b.infowindow=new google.maps.InfoWindow,b.directionsService=new google.maps.DirectionsService,b.directionsDisplay=new google.maps.DirectionsRenderer,b.directionsDisplay.setMap(null),
b.geocoder=new google.maps.Geocoder,b.center=null,b.cont=null,b.map=null,b.form=null,b.startAddy="",b.endAddy="",b.currentRoute=null,b.confirmBttn=null,b.dblclickListener=null,b.data=[],b.markers=[],b.init();else if(Guru.loadingGoogle)setTimeout(b.setupConstants,50);else{Guru.loadingGoogle=!0;window[b.globalInitID]=b.setupConstants;var a=document.createElement("script");a.type="text/javascript";a.src="http://maps.googleapis.com/maps/api/js?sensor=false&callback="+b.globalInitID;document.body.appendChild(a)}};
b.handleBlockClick=function(){var a=b.markers[c(this).attr("markerIndex")];b.handleMarkerClick.apply(a,[{latLng:a.position}]);b.scrollToMapOnClick&&(a=c(b.cont).closest("section").offset(),(c("body").scrollTop()||c("html").scrollTop())>a.top&&c("html, body").stop(!1,!1).animate({scrollTop:a.top},b.scrollSpeed))};b.handleMarkerClick=function(){var a='<div class="mapInfoDom">'+c(this.item.DOM).html();if(b.directionsLink){var d="http://maps.google.com/maps?saddr=&daddr="+this.item[b.locationKey].replace(/ /g,
"+").replace(/\n/g,",+");a+='<a class="directionsLink" href="'+d+'" title="Get directions to this site" target="_blank">Get Driving Directions</a>'}a+="</div>";b.infowindow.setContent(a);b.infowindow.open(b.map,this)};b.setupConstants()};Guru.Map.prototype.init=function(){this.setupMarkerData();this.setupMap();this.setupMarkers()};Guru.Map.prototype.setupMap=function(){this.cont=document.getElementById(this.contId);c(this.cont).height()||c(this.cont).height(this.mapHeight);this.center=new google.maps.LatLng(this.centerLat,
this.centerLng);this.map=new google.maps.Map(this.cont,{center:this.center,zoom:this.zoom,zoomControlOptions:{style:google.maps.ZoomControlStyle[this.zoomControlStyle]},streetViewControl:this.streetViewControl,scrollwheel:this.scrollwheel,mapTypeId:google.maps.MapTypeId[this.mapTypeId]})};Guru.Map.prototype.setupMarkers=function(){var a=this;if(a.data.length){var b=new google.maps.LatLngBounds;c.each(a.data,function(d){var e=this,f=a.fallbackOverrideKey&&e[a.fallbackOverrideKey]&&e[a.fallbackLocationKey]?
e[a.fallbackLocationKey]:e[a.locationKey]||e[a.fallbackLocationKey];f&&a.geocoder.geocode({address:a.stripTags(f)},function(f,k){if(k===google.maps.GeocoderStatus.OK){a.markers[d]=new google.maps.Marker({map:a.map,position:f[0].geometry.location,item:e});if(a.markerImageKey&&e[a.markerImageKey]){var h=e[a.markerImageKey],j=Math.floor(h.width*a.markerScale),h=Math.floor(h.height*a.markerScale);a.markers[d].setIcon(new google.maps.MarkerImage(e[a.markerImageKey].src,new google.maps.Size(j,h),new google.maps.Point(0,
0),new google.maps.Point(j/2,h/2),new google.maps.Size(j,h)))}google.maps.event.addListener(a.markers[d],"click",a.handleMarkerClick);a.blocksAreClickable&&c(e.DOM).attr({markerIndex:d}).mousedown(a.handleBlockClick).find("a").click(a.preventBlockLinks);a.fitMarkers&&(b.extend(a.markers[d].position),a.map.fitBounds(b));a.markerOverridesCenter&&e.center_lat&&e.center_lng&&a.map.setCenter(new google.maps.LatLng(e.center_lat,e.center_lng))}else alert("Geocode was not successful for the following reason: "+
k)})})}};Guru.Map.prototype.preventBlockLinks=function(a){a.preventDefault()};Guru.Map.prototype.setupMarkerData=function(){var a=this;return c(a.dataCont).find(a.dataBlock).each(function(){var b=JSON.parse(c(this).attr(a.dataAttr));b.DOM=this;a.data.push(b)})};Guru.Map.prototype.stripTags=function(a){return typeof a!=="string"?!1:a.replace(/<([^>]+)>/g,"").replace(/\n|\r/g," ")}})(jQuery);Guru=Guru||{};
(function(c){c(window);c(document).ready(function(){c("html.ie").length?Guru.ie=!0:Guru.ie=!1;c("html.lte8").length?Guru.lte8=!0:Guru.lte8=!1;typeof WebKitPoint!=="undefined"?Guru.webkit=!0:Guru.webkit=!1;c("#gMap").length&&new Guru.Map({streetViewControl:!0,fitMarkers:!1,zoom:16,centerLat:36.1565,centerLng:-95.9806,contId:"gMap",dataCont:"#contact .locationList",locationKey:"address",markerScale:0.4,markerOverridesCenter:!0,blocksAreClickable:!0,scrollToMapOnClick:!0,scrollSpeed:450,directionsLink:!0,
globalInitId:"gMapInit"});new Guru.Parallax;new Guru.Carousel({cont:"#events-car"});c(window).trigger("scroll")})})(jQuery);
