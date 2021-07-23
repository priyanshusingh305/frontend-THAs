
const boxEl = document.querySelectorAll(".box");

boxEl.forEach((bo) =>
	bo.addEventListener("click", () => {
		bo.classList.toggle("changeColor");
	})
);
