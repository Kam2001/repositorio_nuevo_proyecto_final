const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
   
    body.classList.toggle("dark");

   if (body.classList.contains("dark")){
    modeText.innerText = "Light mode"
   } else {
    modeText.innerText = "Dark mode"
   }
})

function volver(){
    window.location.href = "index.html";
}

if (window.innerWidth < 760){
    sidebar.classList.add("close");
    sidebar.classList.add("menu__side_move");
}
