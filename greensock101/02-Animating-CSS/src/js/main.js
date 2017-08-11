(function($) {
    
	var img = $('img'),
			h2 = $('h2'),
			h1 = $('h1'),
			intro = $('.intro'),
			listItem = $('ul li'),
			tl = new TimelineLite();


	// Simple Tween
	// TweenLite.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.2});
	// TweenLite.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.4});
	// TweenLite.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.6});
	// TweenLite.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.8});
	// TweenLite.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 1});

	tl
		.from(h1, 1, {y:-15, autoAlpha: 0, ease:Power1.easeInOut})
		.add('intro')
		.from(intro, 1, {y:-15, autoAlpha: 0, ease:Power1.easeInOut})
		.from(img, 1, {y:-15, autoAlpha: 0, ease:Power1.easeInOut})
		.from(h2, 1, {y:-15, autoAlpha: 0, ease:Power1.easeInOut})
		.from(listItem, 1, {y:-15, autoAlpha: 0, ease:Power1.easeInOut});

	tl.pause();

	$('#btnPlay').on('click', function() {
		tl.play();
	});

	$('#btnPause').on('click', function() {
		tl.pause();
	});

	$('#btnResume').on('click', function() {
		tl.resume();
	});

	$('#btnReverse').on('click', function() {
		tl.reverse();
	});

	$('#btnSpeedUp').on('click', function() {
		tl.timeScale(10);
	});

	$('#btnSlowDown').on('click', function() {
		tl.timeScale(0.5);
	});

	$('#btnSeek').on('click', function() {
		tl.seek(1);
	});

	$('#btnProgress').on('click', function() {
		tl.progress(0.5);
	});

	$('#btnRestart').on('click', function() {
		tl.restart();
	});

})(jQuery);