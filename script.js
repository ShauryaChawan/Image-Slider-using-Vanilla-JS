const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;
const length = images.length;

// creating buttons equal to the number of slides
for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

// getting all buttons
const buttons = document.querySelectorAll(".button");
// adding color to the first button
buttons[0].style.backgroundColor = "white";

// reseting the color of the button from white to to transperent
const resetBg = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

// adding event listeners to the buttons
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    button.style.backgroundColor = "white";
  });
});

// next button function
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`;
    slideNumber++;
};

// previous button function
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
};

// getting the first slide
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

// getting the last slide
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
  slideNumber = length;
};

// change color of buttons
const changeColor = ()=>{
  resetBg()
  buttons[slideNumber-1].style.backgroundColor = "white";
}

// event listener for right button
right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor()
});

// event listener for left button
left.addEventListener("click", () => {
  slideNumber > 1 ? prevSlide() : getLastSlide();
  changeColor()
});

