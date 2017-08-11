(function($) {
    
	var img = $('img'),
			h2 = $('h2');
			i = 0;

	// Simple Tween
	TweenLite.from(img, 1, {
		x: -200, 
		ease: Power1.easeInOut, 
		onStart: onStart,
		onUpdate: onUpdate,
		onComplete: onComplete
	});

	function onStart() {
		console.log("animation started");
	}

	function onUpdate() {
		h2.text("loading...");
	}

	function onComplete() {
		h2.text("loaded");
	}
	

})(jQuery);