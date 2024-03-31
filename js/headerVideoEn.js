const video = document.querySelector(".header__video");
let videos;

// -------------------------------------------------------------------------------------------------

if (window.innerWidth < 1200) {
	videos = ["../videos/header/header1sm.mp4", "../videos/header/header2sm.mp4"];
} else {
	videos = ["../videos/header/header1lg.mp4", "../videos/header/header2lg.mp4"];
}

let activeVideo = 0;

video.src = videos[activeVideo];
video.play();

// -------------------------------------------------------------------------------------------------

video.addEventListener("ended", () => {
	if (activeVideo == 0) {
		activeVideo = 1;
	} else {
		activeVideo = 0;
	}
	video.src = videos[activeVideo];
	video.play();
});
