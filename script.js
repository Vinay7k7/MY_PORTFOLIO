const textElement = document.getElementById("color-changing-text");
let isGreen = true;

function changeColor() {
    textElement.style.color = isGreen ? 'white' : '#0ede54';
    isGreen = !isGreen;
}

// Change color every 2 seconds (2000 milliseconds)
setInterval(changeColor, 2000);












const shapeElement = document.querySelector('.shape');
const animationDuration = 10000; // 10 seconds

function restartAnimation() {
    shapeElement.style.animation = 'none';
  void shapeElement.offsetWidth; // Trigger reflow
    shapeElement.style.animation = `rotateShape ${animationDuration}ms linear infinite`;
}

// Start the animation loop
restartAnimation();



















const floatingObject = document.querySelector('.floating-object');
let isScrolling = false;
let lastScrollTop = 0;

function handleScroll(event) {
  if (!isScrolling) {
    isScrolling = true;
    
    const scrollSpeed = event.deltaY;
    const randomDirectionX = Math.random() * 200 - 100; /* Increase the range */
    const randomDirectionY = Math.random() * 200 - 100; /* Increase the range */
    
    floatingObject.style.transition = 'transform 0.5s ease-in-out';
    floatingObject.style.transform = `translate3d(${randomDirectionX}px, ${randomDirectionY}px, 0)`;
    
    setTimeout(() => {
      floatingObject.style.transition = 'none';
      isScrolling = false;
    }, 500);
  }
}

window.addEventListener('wheel', handleScroll);

function resetPosition() {
  floatingObject.style.transition = 'transform 1s ease-in-out';
  floatingObject.style.transform = 'translate3d(0, 0, 0)';
  setTimeout(() => {
    floatingObject.style.transition = 'none';
  }, 1000);
}

window.addEventListener('wheel', (event) => {
  const currentScrollTop = window.scrollY;
  
  if (currentScrollTop > lastScrollTop) {
    resetPosition();
  }
  
  lastScrollTop = currentScrollTop;
});


























function triggerFallAnimation(image) {
  image.classList.add('fall-animation');

  setTimeout(() => {
    image.classList.remove('fall-animation');
  }, 2000); // Adjust the duration as needed
}




























