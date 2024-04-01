const form = document.querySelector(".contact__box--form-box");

// find elements
$("#staticform").submit(function (event) {
	event.preventDefault();
	$.ajax({
		url: "https://api.staticforms.xyz/submit", // url where to submit the request
		type: "POST", // type of action POST || GET
		dataType: "json", // data type
		data: $("#staticform").serialize(), // post data || get data
		success: function (result) {
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
		},
		error: function (xhr, resp, text) {
			const formHeight = form.clientHeight;
			form.classList.add("contact__box--form-box--done");
			form.textContent = "";
			form.style.height = `${formHeight}px`;
			form.innerHTML = `
 				<div class="contact__form-send-box">
 					<i class="fa-solid fa-circle-xmark contact__form-send-icon"></i>
 					<p class="contact__form-send-text">Si è verificato un errore. Riprovare più tardi. In alternativa, potete contattarci via e-mail o telefono</p>
 				</div>
 			`;
		},
	});
});
