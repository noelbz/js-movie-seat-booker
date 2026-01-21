// Function to update summary.
function updateSummary(movieSelect) {
  const selectedSeats = document.querySelectorAll(".seat.selected").length;
  const price = Number(movieSelect.value);

  document.getElementById("count").textContent = selectedSeats;
  document.getElementById("total").textContent = selectedSeats * price;
}
// Function to clear selected seats.
export function clearSelectedSeats() {
  const selectedSeats = document.querySelectorAll(".seat.selected");
  selectedSeats.forEach(function(seat) {
    seat.classList.remove("selected");
  })
}
// Function to initiate seats.
export function initSeats(container, movieSelect) {
  container.addEventListener("click", function(event) {
    const clickedElement = event.target;
    const isSeat = clickedElement.classList.contains("seat");
    const isOccupied = clickedElement.classList.contains("occupied");
    if (isSeat && !isOccupied) {
      clickedElement.classList.toggle("selected");
      updateSummary(movieSelect);
    }
  })
  movieSelect.addEventListener("change", function() {
    updateSummary(movieSelect);
  })
}