const
	DELAY       = 4000,
	SHIFT       = 20,
	SHIFT_HALF  = SHIFT / 2,
	ROTATE      = 360
	;

export default class Page2 {
	constructor() {
		
		let start = performance.now();
		
		const cubes = document.getElementsByClassName('cube');
		
		requestAnimationFrame(function measure(time) {
			let timePassed = time - start;
			
			if (timePassed > DELAY) {
				start = performance.now();
				timePassed = time - start;
			}
			
			let translate = timePassed / DELAY * SHIFT;
			if (translate > SHIFT_HALF) {
				translate = SHIFT_HALF - (translate % SHIFT_HALF)
			}
			
			let rotate = timePassed / DELAY * ROTATE;
			
			for (let i in cubes)
				if (cubes.hasOwnProperty(i))
					cubes[i].style.transform = `translate(0, ${translate}rem) rotate(${rotate}deg)`;
			
			requestAnimationFrame(measure);
		})
	}
}
