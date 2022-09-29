function copyEmail() {
  let text = "rachelp521@gmail.com";
  navigator.clipboard.writeText(text);
}

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
} 



// 

// var a = document.getElementById("test2")
// console.log(a);
// var asdf = document.getElementById("test2");
// console.log(asdf);

var original = "../images/heart.png";


(function () {
  var images = {
   
    "1": "../images/sculpting.png",
    "2": "../images/jewelry_making.png",
    "3": "../images/crochet.png"
  };
  var heart = document.getElementById("empty-heart");
  var arr = document.getElementsByClassName('fill');
  // console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    arr[i].onmouseover = function (e) {
      var a = e.target;
      var imgId = a.getAttribute('data-image-id');
      var imgSrc = images[imgId];
      heart.src = imgSrc;
      heart.setAttribute("style", "width: 350PX; height: 350px;");

    } 
    arr[i].onmouseout = function (){
    heart.src = "../images/heart.png";
    }
   
  }

})
();
