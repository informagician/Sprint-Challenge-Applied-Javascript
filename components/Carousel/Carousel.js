/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carouselMaker() {
  const carousel = document.createElement('div'),
        leftbtn = document.createElement('div'),
        img1 = document.createElement('img'),
        img2 = document.createElement('img'),
        img3 = document.createElement('img'),
        img4 = document.createElement('img'),
        rightbtn = document.createElement('div');
  
  carousel.classList.add('carousel');
  leftbtn.classList.add('left-button');
  rightbtn.classList.add('right-button');

  img1.setAttribute('src', './assets/carousel/mountains.jpeg');
  img1.setAttribute('class', 'slide');
  img2.setAttribute('src', './assets/carousel/computer.jpeg');
  img2.setAttribute('class', 'slide');
  img3.setAttribute('src', './assets/carousel/trees.jpeg');
  img3.setAttribute('class', 'slide');
  img4.setAttribute('src', './assets/carousel/turntable.jpeg');
  img4.setAttribute('class', 'slide');

  carousel.appendChild(leftbtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightbtn);

  return carousel;
}

const newCarousel = carouselMaker()
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(newCarousel);



var slideIndex = 1;
showSlides(slideIndex);

function next(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('slide');
  if(n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);

  const left = document.querySelector('.left-button');
  left.addEventListener('click', event => {
    next(-1);
  });
  const right = document.querySelector('.right-button');
  right.addEventListener('click', event => {
    next(1);
  });
}