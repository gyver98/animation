(function($) {
    
	var img = $('img'),
			h2 = $('h2'),
			h1 = $('h1'),
			intro = $('.intro'),
			listItem = $('ul li');


	// Simple Tween
	TweenLite.from(h1, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.2});
	TweenLite.from(intro, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.4});
	TweenLite.from(img, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.6});
	TweenLite.from(h2, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 0.8});
	TweenLite.from(listItem, 0.3, {y:-15, autoAlpha: 0, ease:Power1.easeInOut, delay: 1});

})(jQuery);