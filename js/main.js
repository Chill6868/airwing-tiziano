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

// -------------------------------------------------------------------------------------------------

const navDesktop = document.querySelector(".nav");

const handleNav = () => {
	if (scrollY >= 100) {
		navDesktop.style.transform = "translateY(-50px)";
		// navDesktop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		// navDesktop.style.backdropFilter = "blur(16px)";
	} else {
		navDesktop.style.transform = "translateY(0)";
		// navDesktop.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
		// navDesktop.style.backdropFilter = "blur(0)";
	}
};

document.addEventListener("scroll", handleNav);
// -------------------------------------------------------------------------------------------------

const video = document.querySelector(".header__video");
let videos;

if (window.innerWidth < 1200) {
	videos = ["./videos/header/header1sm.mp4", "./videos/header/header2sm.mp4"];
} else {
	videos = ["./videos/header/header1lg.mp4", "./videos/header/header2lg.mp4"];
}

let activeVideo = 0;

video.src = videos[activeVideo];
video.play();

video.addEventListener("ended", () => {
	if (activeVideo == 0) {
		activeVideo = 1;
	} else {
		activeVideo = 0;
	}
	video.src = videos[activeVideo];
	video.play();
});
