/* Script page home */

const ALTERNATE_IMG = document.querySelector("#ALT_IMG");
const IMG_0_HOME = document.querySelector(".card-img-home");
const IMG_1_HOME = document.querySelector(".card-flex-box-home");
const IMG_2_HOME = document.querySelector(".card-grid-home");

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
  
  if (alt_img) {
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
