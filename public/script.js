// --------------------------------------Navbar-----------------------------------------
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
}
let swh = document.getElementById('switch')
swh.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
})



let menu = document.getElementById('bars')
let navbar = document.getElementById("nav")
let ul = document.getElementById('ul')
let left = document.getElementsByClassName('left')
let content = document.getElementsByClassName('content')

menu.addEventListener('click',() => {

    menu.classList.toggle('fa-xmark')
        if(menu.classList.contains('fa-xmark')){
            navbar.style.height = '35vh'
            ul.style.display = 'flex'
            // content.style.display = 'block'
        }
        else{
            ul.style.display = 'none'
            navbar.style.height = '12vh'
            // navbar.style.opacity = '2'
        }
    })