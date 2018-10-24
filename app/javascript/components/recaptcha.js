const enableBtn = () => {
  document.getElementById("button1").style.display = "block";
  recaptcha.style.opacity = "0"
}

document.getElementById("button1").style.display = "none";

const recaptcha = document.querySelector(".g-recaptcha")


recaptcha.setAttribute("data-callback", "enableBtn");
console.log(recaptcha)

export { enableBtn }
