var unslider;

var slider = function(){
	var onSlided = function(){
		var index = $('.dots .active').text();
		var object;
		if( object = $('.control-active') ){
			object.removeClass( 'control-active' );
			if( object = $('[index='+index+']') ){
				object.addClass( 'control-active' );
			}
		}
		return;
	};
	var parameters = {
		speed: 500 ,
		delay: 3000 ,
		complete: onSlided ,
		keys: false ,
		dots: true ,
		fluid: false
	};
	unslider = $('#screenshots-contents').unslider( parameters ).data( 'unslider' );
	return;
}

var show = function(){
	$(this).css( 'opacity' , '1' );
	return;
}

var hide = function(){
	$(this).css( 'opacity' , '0' );
	return;
}

var nextSlide = function(){
	unslider.next();
	return;
}

var previousSlide = function(){
	unslider.prev();
	return;
}

var moveSlide = function(){
	var index = $(this).attr( 'index' );
	if( isFinite( index ) ){
		unslider.move( index - 1 );
	}
	return;
}

var initialize = function(){
	// facebook(document, 'script', 'facebook-jssdk');
	twitter(document, 'script', 'twitter-wjs');
	slider();
	$('#control-on-left, #control-on-right').hover( show , hide );
	$('#control-on-left').click( previousSlide );
	$('#control-on-right').click( nextSlide );
	$('[index]').click( moveSlide );
	return;
}

$(document).ready( initialize );