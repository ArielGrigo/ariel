var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"]; // Remplacez les noms des images par les vôtres
var currentIndex = 0;

function changeBackground() {
  document.getElementById("background-slider").style.backgroundImage = "url('" + images[currentIndex] + "')";
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change d'image toutes les 5 secondes (5000 millisecondes)
