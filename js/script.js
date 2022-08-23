function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
};

function pricing(argument) {
  const movie = argument.movie;
  const time = argument.time;
  const age = argument.age;
  let price = 20
  if (movie === "movie2") {
    price -= 4
  }
  if (time === "day") {
    price -= 3
  }
  if (age === "senior") {
    price = price/2
  }
  console.log(price)
  return price;
}



function handleFormSubmission(event) {
  event.preventDefault();
  let inputtedMovie = document.querySelector('input[name="movie"]:checked').value;
  let inputtedTime = document.querySelector('input[name="time"]:checked').value;
  let inputtedAge = document.querySelector('input[name="age"]:checked').value;
  console.log(inputtedMovie, inputtedTime, inputtedAge)
  let newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
  console.log(newTicket)
  document.getElementById("result").innerText = pricing(newTicket);
  document.getElementById("output").removeAttribute("class");
}

window.addEventListener("load", function () {
  document.querySelector("form#ticket-form").addEventListener("submit", handleFormSubmission);
});