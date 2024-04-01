const form = document.querySelector(".contact__box--form-box");

// form.addEventListener("submit", (e) => {
// 	e.preventDefault();

// const formHeight = form.clientHeight;
// form.classList.add("contact__box--form-box--done");
// form.textContent = "";
// form.style.height = `${formHeight}px`;
// form.innerHTML = `
//  	<div class="contact__form-send-box">
//  		<i class="fa-solid fa-circle-check contact__form-send-icon"></i>
//  		<p class="contact__form-send-text">Grazie per averci contattato! Vi risponderemo a breve.</p>
//  	</div>
//  `;
// e.target.submit();
// });

// find elements
$(".contact__box--form-box").submit(function (event) {
	event.preventDefault();
	$.ajax({
		url: "https://api.staticforms.xyz/submit", // url where to submit the request
		type: "POST", // type of action POST || GET
		dataType: "json", // data type
		data: $(".contact__box--form-box").serialize(), // post data || get data
		success: function (result) {
			// you can see the result from the console
			// tab of the developer tools
			alert(JSON.parse(result));
		},
		error: function (xhr, resp, text) {
			alert(xhr, resp, text);
		},
	});
});
