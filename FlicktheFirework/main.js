const header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0 ); 
})

let menu = doucment.querySelector('#menu-icon'); 
let navmenu = doucment.querySelector('.navmenu'); 

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}
