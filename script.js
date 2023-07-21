let menu=document.querySelector("#menu");
let header=document.querySelector("header");

menu.onclick = () =>{
  menu.classList.toggle('fa-xmark');
  header.classList.toggle('open')
}