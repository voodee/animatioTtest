import $ from 'jquery'

$('.js-cube-box').ready(() => {

	const delay = 4000;
	
	let start = performance.now();

	requestAnimationFrame(function measure(time) {
		let timePassed = time - start;

		if (timePassed > delay) start = performance.now();
		timePassed = time - start;
		
		let translate = timePassed / delay * 10;
		
		if (translate > 5) {
			translate = 5 - (translate % 5)
		}
		$('.cube').css('transform', `translate(0, ${translate}rem)`);

		requestAnimationFrame(measure);
	})
});
