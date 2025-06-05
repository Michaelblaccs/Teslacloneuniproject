var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  // Reset slideIndex if it exceeds the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Display the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 2 seconds (2000 milliseconds)
  setTimeout(showSlides, 2000);
}
function changeImage(imageSource) {
    var imageElement = document.getElementById("myImage");
    imageElement.src = imageSource;
}

