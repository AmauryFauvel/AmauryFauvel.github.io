var gifs = document.getElementsByClassName("gif-hover");
function enterGif(n) {
  let i = n*2;
  gifs[i].classList.add("d-none");
  gifs[i+1].classList.remove("d-none");
}
function exitGif(n) {
  let i = n*2;
  gifs[i+1].classList.add("d-none");
  gifs[i].classList.remove("d-none");
}