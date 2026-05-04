let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(n) {
  slides.forEach(function(slide) {
    slide.classList.remove("active");
  });

  slides[n].classList.add("active");
}

function nextSlide() {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  showSlide(index);
}

function prevSlide() {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  showSlide(index);
}

setInterval(nextSlide, 4000);

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;
  let error = document.getElementById("error");

  if (name == "" || email == "" || phone == "" || message == "") {
    error.style.color = "red";
    error.innerHTML = "Please fill all fields.";
    return false;
  }

  if (phone.length != 10) {
    error.style.color = "red";
    error.innerHTML = "Phone number must be 10 digits.";
    return false;
  }

  error.style.color = "green";
  error.innerHTML = "Message submitted successfully!";
  return false;
}
