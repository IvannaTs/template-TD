var headerMenu = '.header-menu';

$(headerMenu+'-touch').on('click', function() {
	$(headerMenu).slideToggle();
	$(this).toggleClass('open');
});

$(window).on('resize', function() {
	if($(headerMenu).is(':hidden')) {
		$(headerMenu).removeAttr('style');
	}
});


function onScroll(){
    $(headerMenu + ' a').each(function(){
		var anchor      = $(this).attr('href');
		var scrollTop   = $(document).scrollTop();
		var positionTop = $(anchor).position().top;
		var outerHeight = $(anchor).outerHeight();
	
        if ((positionTop <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
            $(headerMenu + ' a.active').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
}

$(document).on('scroll', onScroll);

$(headerMenu+' a').on('click', function(e){
	e.preventDefault();
	$(document).off('scroll');
	$(headerMenu+' a.active').removeClass('active');
    $(this).addClass('active');
	
	var anchor = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop: $(anchor).offset().top
	}, 500, function() {
		window.location.hash = anchor;
		$(document).on('scroll', onScroll);
	});
});