const img = document.querySelector(".picture");
const change = ["C.jpg","c1.jpg","cat1.jpg","cat2.jpg","cat3.jpg","cat5.jpg","cat4.jpg"];

var i = 0;

function pre() {
  if (i > 0) {
    i--;

    setImage(i);
  }
}
function next() {
  if (i < change.length - 1) {
    i++;
    setImage(i);
  }
}

function setImage() {
  return img.setAttribute("src", change[i]);
}
// console.log(next)

// function previous(){
// if(i=>0, i=>img.length, i++){
//     return change.setAttribute('src','change','image[i]')
// }

// else{
//     i++;

// }

// }

// function changeImage(){
//     var img = document.querySelector('.picture');
//     img.src = 'catcat.jpg'

// }
// function change(){
//     var img = document.querySelector('.picture');
//     img.src = 'cat.jpg'
// }
