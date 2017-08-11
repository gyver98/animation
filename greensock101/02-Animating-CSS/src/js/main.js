(function($) {
    
	var img = $('img'),
			h2 = $('h2'),
			h1 = $('h1'),
			intro = $('.intro'),
			listItem = $('ul li'),
			buttons = $('button'),
			tl = new TimelineLite();


	// Simple Tween
	// TweenLite.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.2});
	// TweenLite.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.4});
	// TweenLite.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.6});
	// TweenLite.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.8});
	// TweenLite.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 1});

	tl
		.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut})
		.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut}, '-=0.15')
		.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut}, '-=0.15')
		.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut}, '-=0.15')
		.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut}, '-=0.15')
		.staggerFrom(buttons, 1, {cycle: {
			x: [50, -50],
			scale: [2, 0.5]
		}, autoAlpha: 0, ease:Power1.easeOut}, 0.5);
					

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