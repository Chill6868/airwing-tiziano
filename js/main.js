const swiper = new Swiper(".swiper", {
	effect: "coverflow",
	speed: 1000,
	loop: true,
	grabCursor: true,
	slidesPerView: 1,
	FreeMode: {
		enabled: true,
	},
	autoplay: {
		delay: 2500,
		pauseOnMouseEnter: true,
	},
	breakpoints: {
		// when window width is >= 320px
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},
});
