window.onload = () => {
main.setAttribute("class", "loading-form");
};
const CARD_MAIN = document.querySelector(".card-main");
const FORM_CARD = document.querySelector("#validated_success");
const BTN_FORM = document.getElementById("sub");
const USR_EMAIL = document.getElementById("user_email");
const USR_PASSWORD = document.getElementById("user_password");
const CHECK_BOX = document.getElementById("check");
const ALT = document.getElementById("fa_fa_pass");

const ERROR_EMAIL = document.querySelector(".error_gmail");
const ERROR_PASSWORD = document.querySelector(".error_password");
const ERROR_CHECK = document.querySelector(".error_check");
const TERMS_CHECK = document.querySelector(".terms-check");

const EMAIL_VALIDATE = "admin@gmail.com";
const PASSOWRD_VALIDATE = "admin";

ALT.addEventListener("click", () => {
  if (USR_PASSWORD.type === "password") {
    USR_PASSWORD.type = "text";
    ALT.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    USR_PASSWORD.type = "password";
    ALT.classList.replace("fa-eye", "fa-eye-slash");
  }
});

BTN_FORM.addEventListener("click", (e) => {
  e.preventDefault();
  
  let validated = true;
  
  USR_EMAIL.classList.remove("error");
  USR_PASSWORD.classList.remove("error");
  ERROR_EMAIL.classList.remove("visible_error");
  ERROR_PASSWORD.classList.remove("visible_error");
  ERROR_CHECK.classList.remove("visible_error");
  TERMS_CHECK.classList.remove("visibility_hidden");
  
  if (USR_EMAIL.value.trim() !== EMAIL_VALIDATE) {
    USR_EMAIL.classList.add("error");
    ERROR_EMAIL.classList.add("visible_error");
    validated = false;
  }
  
  if (USR_PASSWORD.value.trim() !== PASSOWRD_VALIDATE) {
    USR_PASSWORD.classList.add("error");
    ERROR_PASSWORD.classList.add("visible_error");
    validated = false;
  }
  
  if (!CHECK_BOX.checked) {
    TERMS_CHECK.classList.add("visibility_hidden");
    ERROR_CHECK.classList.add("visible_error");
    validated = false;
  }
  
  if (validated) {
    BTN_FORM.classList.add("btn-loading-form");
    BTN_FORM.classList.add("btn-loading");
    setTimeout(() => {
    FORM_CARD.classList.add("open");
    CARD_MAIN.classList.add("login-sucess");
    main.setAttribute("class", "success");
    }, 2000);
  };
});