const seatsEl = document.querySelectorAll(".seats");

seatsEl.forEach((seats) =>
	seats.addEventListener("click", () => {
		seats.classList.toggle("seatsclicked");
	})
);
