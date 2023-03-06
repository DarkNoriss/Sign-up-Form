import "./style.scss";

const form = document.getElementById("myForm");
form.addEventListener("submit", submitForm);

const warningText = "* Passwords do not match";
const warningP = document.getElementById("warning");

function submitForm(event) {
  event.preventDefault();

  let firstName = event.target["first-name"].value;
  let lastName = event.target["last-name"].value;
  let email = event.target["email"].value;
  let phoneNumber = event.target["phone-number"].value;
  let password = event.target["password"].value;
  let confirmPassword = event.target["confirm-password"].value;

  if (password != confirmPassword) {
    warningP.innerText = warningText;
  } else {
    warningP.innerText = "";
    form.reset();
  }
}
