$(document).ready(function(){
	// Set Options
	var speed = 500;            //fade speed
	var autoswitch = true;      //auto slider options
	var autoswitchSpeed= 4000;  // Auto slider speed

	//Add initial active class
	$('.slide').first().addClass('active');

	// Hide all Slides

	$('.slide').hide();

	//Show the first slide

	$('.active').show();

	//Next Slide Handler

	$('#next').on('click', nextSlide);

	//Previous Slide Handler

    $('#prev').on('click', previousSlide);

    //autoSlider Handler

    if(autoswitch) {
    	setInterval(nextSlide, autoswitchSpeed);
    }



	//Switch to the nexr slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

    //Switch to the previous slide
	function previousSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	

});