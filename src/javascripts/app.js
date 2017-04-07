import 'modules'
//
//
// if ($('.js-cube-box').length) {
//
// 	$('.js-cube-box').ready(() => {
//
//
// 	});
// }



window.delay = seconds => {
	const start = performance.now();
	while ( performance.now() < start + seconds * 1000 ) {}
};



let fps = 0;
requestAnimationFrame(function measure() {
	++fps;
	requestAnimationFrame(measure)
});

let counter = 0;
setInterval(() => {
	++counter;
}, 1);

setInterval(() => {
	document.getElementById('fps').innerHTML = fps;
	fps = 0;
	
	document.getElementById('counter').innerHTML = counter;
	counter = 0;
}, 1000);