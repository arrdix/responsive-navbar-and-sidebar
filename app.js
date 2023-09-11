// MANUAL TOGGLE

//    if (links.classList.contains('show-links')) {
//     links.classList.remove('show-links');
//    } else {
//     links.classList.add('show-links');
//    }

// NAVBAR

const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const info = document.querySelectorAll(".fab");

btn.addEventListener("click", function (btns) {
  links.classList.toggle("show-links");

  for (let i = 0; i < info.length; i++) {
    if (links.classList.contains("show-links")) {
      if (info[i].classList.contains("fa-facebook")) {
        info[i].textContent = " Facebook";
      } else if (info[i].classList.contains("fa-twitter")) {
        info[i].textContent = " Twitter";
      } else if (info[i].classList.contains("fa-behance")) {
        info[i].textContent = " Behance";
      } else {
        info[i].textContent = " LinkedIn";
      }
    } else {
      if (info[i].classList.contains("fa-facebook")) {
        info[i].textContent = " ";
      } else if (info[i].classList.contains("fa-twitter")) {
        info[i].textContent = " ";
      } else if (info[i].classList.contains("fa-behance")) {
        info[i].textContent = " ";
      } else {
        info[i].textContent = " ";
      }
    }
  }
});
