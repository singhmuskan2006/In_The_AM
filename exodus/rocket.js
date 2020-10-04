let rocketbody = document.querySelector('#rocketbody');
let loading = document.querySelector('#loading');
let main = document.querySelector('.mainstuff');

	let startKeyFrame1 = {
		"left": "20vw",
		"top": "11em",
		transform: 'rotate(50deg)'
	};
	let endKeyFrame1 = {
		"left": "45.5vw",
		"top": "7em",
		transform: 'rotate(0deg)'
	};
	let options1 = {
		duration: 2000,
		easing: "cubic-bezier(0.22, 1, 0.50, 1)",
		fill: "forwards"
	};
	rocketbody.animate([startKeyFrame1, endKeyFrame1], options1);

	setTimeout(() => {
		landing();
	}, 1800)

	let landing = () => { 
		let startKeyFrame2 = {
		"left": "45.5vw",
		"top": "7em"
		};
		let endKeyFrame2 = {
			"left": "45.5vw",
			"top": "12em"
		};
		let options2 = {
			duration: 2000,
			easing: "cubic-bezier(0.22, 1, 0.50, 1)",
			fill: "forwards"
		};
		rocketbody.animate([startKeyFrame2,endKeyFrame2], options2);
	};

	setTimeout(() => {
		load();
	}, 3800)

	let load = () => {
		let startKeyFrame3 = {
		"opacity": "1"
		};
		let endKeyFrame3 = {
			"opacity": "0"
		};
		let options3 = {
			duration: 20,
			fill: "forwards"
		};
		loading.animate([startKeyFrame3,endKeyFrame3], options3);
	};

	setTimeout(() => {
		yeah();
	}, 3800)

	let yeah = () => {
		let startKeyFrame4 = {
		"opacity": "0"
		};
		let endKeyFrame4 = {
			"opacity": "1"
		};
		let options4 = {
			duration: 20,
			fill: "forwards"
		};
		main.animate([startKeyFrame4,endKeyFrame4], options4);
	};

