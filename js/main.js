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

const navDesktop = document.querySelector(".nav");

const handleNav = () => {
	if (scrollY >= 100) {
		navDesktop.style.transform = "translateY(-50px)";
		navDesktop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		navDesktop.style.backdropFilter = "blur(16px)";
	} else {
		navDesktop.style.transform = "translateY(0)";
		navDesktop.style.backgroundColor = "";
		navDesktop.style.backdropFilter = "blur(0)";
	}
};

document.addEventListener("scroll", handleNav);
