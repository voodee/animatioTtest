import Velocity from 'velocity-animate'

export default class Page3 {
	constructor() {
		
		const cubes = document.getElementsByClassName('cube');
		
		Velocity(
			cubes,
			{
				translateY: "10rem",
				rotateZ: "360deg"
			}, {
				loop: true,
				duration: 4000
			}
		)
		
	}
}