const squareEl = document.querySelector(".square");

for (let i = 0; i < 400; i++) {
	squareEl.innerHTML += `<div class = "box"></div>`;
}

const boxEl = document.querySelectorAll(".box");

boxEl.forEach((bo) =>
	bo.addEventListener("click", () => {
		bo.classList.toggle("changeColor");
	})
);
