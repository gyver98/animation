(function($) {
    
	var img = $('img'),
			h2 = $('h2');

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
		console.log("animation in progress");
	}

	function onComplete() {
		console.log("animation completed");
	}
	

})(jQuery);