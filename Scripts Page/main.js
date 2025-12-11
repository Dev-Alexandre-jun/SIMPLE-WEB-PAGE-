const AWESOME_ICONS = document.createElement("link");
      AWESOME_ICONS.rel = "stylesheet";
      AWESOME_ICONS.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(AWESOME_ICONS);
const INTRO_VIDEO = document.querySelector(".video-intro");
const VIDEO = document.querySelector("video");
const FOOT_PAGE = document.querySelectorAll("footer #foot");
const MENU_USER = document.querySelector(".usr-nav");
const SUB_TITLE = document.querySelector(".sub-title-page");
const ALT_ICON_MENU = document.querySelector(".fa-bars");
const ALT_ICON_THEME = document.querySelector(".fa-sun");
const ICON_SCL = document.querySelectorAll(".icon-social-foot");
document.addEventListener("DOMContentLoaded", () => {
setTimeout(() => {
  INTRO_VIDEO.classList.add("play");
},1000);
VIDEO.addEventListener("ended", () => {
  INTRO_VIDEO.style.display = "none";
});
});
function THEME_PAGE() {
  const THEME_BODY = main.getAttribute("data-theme");
  const THEME_ALT_BODY = THEME_BODY === "light" ? "dark" : "light";
  main.setAttribute("data-theme", THEME_ALT_BODY);
  ALT_ICON_THEME.classList.toggle("fa-moon");
}
function NAVEGATION_MENU(){
   MENU_USER.classList.toggle("left-menu-act");
   SUB_TITLE.classList.toggle("visibility-o");
   ALT_ICON_MENU.classList.toggle("fa-times");
}
const links = {
  url: [
    "https://github.com/Dev-Alexandre-jun",
    "https://www.instagram.com/spancer_7of?igsh=cHUyeW96bTBrdzF3",
    "https://open.spotify.com/user/31cincg4uulmkw5zchqothoamopq?si=TOBHTxocSXiYNz4RMJSkVg"
  ]
};
ICON_SCL.forEach(function(icon, pst) {
  icon.addEventListener("click", () => {
    window.location.href = links.url[pst];
  });
});