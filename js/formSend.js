const form = document.querySelector(".contact__box--form-box");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formHeight = form.clientHeight;
	form.classList.add("contact__box--form-box--done");
	form.textContent = "";
	form.style.height = `${formHeight}px`;
	form.innerHTML = `
		<div class="contact__form-send-box">
			<i class="fa-solid fa-circle-check contact__form-send-icon"></i>
			<p class="contact__form-send-text">Grazie per averci contattato! Vi risponderemo a breve.</p>
		</div>
	`;
});
