jQuery(function($) {

	
    $('body').scrollspy({target: ".main-nav", offset: 50});   

	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-slider .item').css('height',slideHeight);
	});
	
	//Scroll Menu
	$(window).on('scroll', function(){
		if( $(window).scrollTop()>slideHeight ){
			$('.main-nav').addClass('navbar-fixed-top');
		} else {
			$('.main-nav').removeClass('navbar-fixed-top');
		}
	});
	

	

	// User define function
	
	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 5000);
		return false;
	});

	// $(".showbtn").toggleClass("showit");
	$(".showbtn").click(function(){
		$(".showtbl").toggleClass("showit");
		$(".showtbl").toggleClass("hideit");
	});
	
	$(".secbtn").click(function(){
		$(".mngtbl").toggleClass("showit");
		$(".mngtbl").toggleClass("hideit");
	});
	
	//Initiat WOW JS

	//smoothScroll
	
	
	// Progress Bar
	

	//Countdown
	

	// Portfolio Single View
	

	// Close Portfolio Single View
	
	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	//Google Map
	
	
});

