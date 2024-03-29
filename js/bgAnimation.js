const minDuration = 4000;
const maxDuration = 10000;

let animationConfig = {};

const icons = document.querySelectorAll(".bg-animation__icon");

if (innerWidth >= 992) {
	icons.forEach((icon) => {
		const randomRotation = Math.floor(Math.random() * 361);
		const directions = ["+", "-"];
		const directionsCount = Math.floor(Math.random() * directions.length);
		const randomDirection = directions[directionsCount];
		const randomRotationDirection = eval(
			randomRotation + randomDirection + 360
		);

		const randomDuration =
			Math.floor(Math.random() * (maxDuration - minDuration + 1)) + minDuration;

		icon.style.rotate = `${randomRotation}deg`;

		animationConfig = {
			duration: randomDuration, // Czas trwania animacji w milisekundach
			iterations: Infinity, // Ilość iteracji animacji (1 oznacza jedną iterację)
		};

		icon.animate(
			[
				// Stan początkowy animacji
				{ rotate: `${randomRotation}deg` },

				// Stan końcowy animacji
				{
					rotate: `${randomRotationDirection}deg`,
				},
			],
			animationConfig
		);
	});
} else {
	icons.forEach((icon) => {
		const randomRotation = Math.floor(Math.random() * 361);
		icon.style.rotate = `${randomRotation}deg`;
	});
}
