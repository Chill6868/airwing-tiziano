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
 					<p class="contact__form-send-text">Thank you for reaching out! We'll get back to you shortly.</p>
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
 					<p class="contact__form-send-text">An error occurred. Please try again later. Alternatively, you can contact us via email or phone.</p>
 				</div>
 			`;
		},
	});
});
