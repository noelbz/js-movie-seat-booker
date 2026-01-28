# Movie Seat Booker

A simple movie seat booking application built with HTML, CSS, and JavaScript.

## Description
This project allows users to:
- Select a movie from a dropdown menu
- Choose available seats in a cinema layout
- See the number of selected seats and total price update dynamically

Movie data is fetched from a local JSON server using `fetch()`.

---

## Project Structure

- **index.html** – Application structure
- **style.css** – Styling and visual seat states
- **js/main.js** – Application entry point and initialization
- **js/seats.js** – Seat selection logic and event handling
- **js/movieService.js** – Fetches movie data from JSON server
- **db.json** – Local database for movie data

---

## Technologies Used

- HTML
- CSS
- JavaScript (ES Modules)
- JSON Server
- ESLint
- Git & GitHub

---

## How to Run the Project

### 1. Start JSON Server
```bash
npx json-server db.json --port 3000
