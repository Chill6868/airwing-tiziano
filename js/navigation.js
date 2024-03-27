const navDesktop = document.querySelector(".nav");
const navMobile = document.querySelector(".nav-mobile__bottom-container");
const navMobileBurgerBtn = document.querySelector(".nav-mobile__hamburger");

// -------------------------------------------------------------------------------------------------

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

const showMobileNav = () => {
	navMobile.classList.toggle("nav-mobile__bottom-container--active");
};

// -------------------------------------------------------------------------------------------------

document.addEventListener("scroll", handleNav);
navMobileBurgerBtn.addEventListener("click", showMobileNav);
