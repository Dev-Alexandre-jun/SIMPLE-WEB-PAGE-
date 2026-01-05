/* Script page home */

const bd = document.body;
const ALTERNATE_IMG = document.querySelector("#ALT_IMG");
const CARD_HOME = document.querySelector(".card-head");
const CARD_LEFT_HOME = document.querySelector(".card-span-left");
const SUB_TITLE_HOME = document.querySelector(".sub-title");
const IMG_0_HOME = document.querySelector(".card-img-home");
const IMG_1_HOME = document.querySelector(".card-flex-box-home");
const IMG_2_HOME = document.querySelector(".card-grid-home");
const FOOT_HOME = document.querySelector("footer");
const linksImage = [
    "../Media/setting-css-properties-83a3592180319.png",
    "../Media/flex.png",
    "../Media/grid-flexbox.jpeg",
    "../Media/grid_20251226_223853.jpg",
    "../Media/flexbox_20251226_230048.jpg",
    "../Media/grid5_20251226_225939.jpg"
];
  let alt_img = true;
  ALTERNATE_IMG.addEventListener('click', () => {
     ALTERNATE_IMG.classList.add("visibility_hidden");
     ALTERNATE_IMG.classList.add("alt");
    if(alt_img){
      setTimeout(() => {
     ALTERNATE_IMG.classList.remove("visibility_hidden");
     ALTERNATE_IMG.classList.remove("alt");
    }, 2000);
     IMG_0_HOME.src = linksImage[0];
     IMG_1_HOME.src = linksImage[1];
     IMG_2_HOME.src = linksImage[2];
    } else {
      setTimeout(() => {
     ALTERNATE_IMG.classList.remove("visibility_hidden");
     ALTERNATE_IMG.classList.remove("alt");
    }, 2000);
     IMG_0_HOME.src = linksImage[3];
     IMG_1_HOME.src = linksImage[4];
     IMG_2_HOME.src = linksImage[5];
    }
     alt_img = !alt_img;
  });
  let firefox = navigator.userAgent.toLowerCase().includes("firefox");
  if(firefox){
    ALTERNATE_IMG.style.transform = "translate(63px, 0)";
    CARD_HOME.style.width = "111%";
    SUB_TITLE_HOME.style.fontSize = "25px";
CARD_LEFT_HOME.style.position = "fixed";
    CARD_LEFT_HOME.style.top = "50%";
    CARD_LEFT_HOME.style.right = "-8%";

FOOT_HOME.style.marginTop = "78px";
  };