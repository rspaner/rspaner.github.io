function copyEmail() {
  let text = "rachelp521@gmail.com";
  navigator.clipboard.writeText(text);
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
    //  "4": "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //  "5": "http://www.smallarmssurvey.org/uploads/tx_rgslideshow/sas-homepage-armed-violence.jpg"
  };
  var heart = document.getElementById("empty-heart");
  var arr = document.getElementsByClassName('fill');
  // console.log(arr)
  for (var i = 0; i < arr.length; i++) {
    arr[i].onmouseover = function (e) {
      var a = e.target;
      var imgId = a.getAttribute('data-image-id');
      var imgSrc = images[imgId];
      // var style = ['background-image: url(', imgSrc, ');'].join('');
      // background.setAttribute('style', style);
      heart.src = imgSrc;
      heart.setAttribute("style", "width: 350PX; height: 350px;");

    } 
    arr[i].onmouseout = function (){
    heart.src = "../images/heart.png";
    }
   
  }

})
();
