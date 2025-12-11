const main = document.body;
function BROWSER(doc, styles) {
  Object.entries(styles).forEach(([prop, value]) => {
    doc.style[prop] = value;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const fireFox = navigator.userAgent.toLowerCase().includes("firefox");
  if (fireFox) {
  const BTN_USR_FIRE = document.querySelector("#menu-user");
  const DATA_THEME_FIRE = document.querySelector("#theme-page");
  const P_CARD_FIRE_0 = document.querySelector(".card-about");
  const P_CARD_FIRE_1 = document.querySelector(".about-card");
  const IMG_0_FIRE = document.querySelector(".card-figure-a");
  const GIF_FIRE = document.querySelector(".card-gif");
  const IMG_1_FIRE = document.querySelector(".card-figure-b");
  const SN_FIRE = document.querySelectorAll(".sn");
    BROWSER(BTN_USR_FIRE, {
      fontSize: "18px"
    });
    BROWSER(DATA_THEME_FIRE, {
      fontSize: "17px",
      position: "relative",
      right: "97px",
      bottom: "1px"
    });
    BROWSER(P_CARD_FIRE_0, {
      fontSize: "11px"
    });
    BROWSER(P_CARD_FIRE_1, {
      fontSize: "11px"
    });
    BROWSER(IMG_0_FIRE, {
      height: "168px",
      width: "140px"
    });
    BROWSER(GIF_FIRE, {
      height: "197px",
      width: "97px"
    });
    BROWSER(IMG_1_FIRE, {
      height: "200px",
      width: "220px"
    });
    SN_FIRE.forEach(span => {
    BROWSER(span, {
      fontSize: "10px"
     });
    });
   };
 });