const inputs = document.querySelectorAll(".contact__form-input");
const labels = document.querySelectorAll(".contact__form-label");

// console.log(inputs);

const checkInputValue = (input) => {
	if (input.value != "") {
		const inputBox = input.closest("div");
		const inputLabelSibling = inputBox.querySelector(".contact__form-label");

		inputLabelSibling.classList.add("contact__form-label--active");
	} else {
		const inputBox = input.closest("div");
		const inputLabelSibling = inputBox.querySelector(".contact__form-label");

		inputLabelSibling.classList.remove("contact__form-label--active");
	}
};

inputs.forEach((input) => {
	input.addEventListener("keyup", () => {
		checkInputValue(input);
	});
});
