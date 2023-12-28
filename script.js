const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const body = document.querySelector("body");

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Super ! Alors on se voit ce dimanche 31 !";
  body.innerHTML = "rempli ce formulaire : <a href=>formulaire</a>";
  gif.src =
    "https://media.giphy.com/media/l0Iy7zmLUiALbkna8/giphy.gif";
});