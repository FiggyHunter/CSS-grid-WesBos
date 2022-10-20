let close_icon = document.getElementsByClassName('close')[0];
let hamburger = document.getElementsByClassName('open')[0];
let menu_button = document.getElementsByClassName('menu__button')[0]; 
let open = false;
let mobile_menu_inside = document.createElement('mobile-menu'); 
let body = document.body;
let navigation = document.getElementsByClassName("menu")[0];
let close_mobile_menu = document.getElementsByClassName("close-menu")[0];

menu_button.addEventListener("click", handleClick);


function handleClick() {
    if(open == true)
     closeMenu();
    else openMenu();
}

function openMenu() {
    mobile_menu_inside.innerHTML = `<div class="mobile-menu">
    <ul id="menu-list" class="mobile-menu-list">
      <li>
        <a href="">Tacos</a>
      </li>
      <li>
        <a href="">Beers</a>
      </li>
      <li>
        <a href="">Wines</a>
      </li>
      <li>
        <a href="">Desserts</a>
      </li>
      <li>
        <a href="">Reservations</a>
      </li>
      <li>
      <a class="close-menu">CLOSE MENU</a>
    </li>
    </ul>
    </div>`;
    document.body.insertAdjacentElement('afterbegin',mobile_menu_inside);
    hamburger.style.display ="none";
    close_icon.style.display = "inline-block";
    open = true;
    setTimeout(() => {
        document.getElementsByClassName("mobile-menu")[0].style.opacity = "100%";    
        close_mobile_menu = document.getElementsByClassName("close-menu")[0];
        close_mobile_menu.addEventListener("click",closeMenu)}, 100);
}

function closeMenu() { 
    document.getElementsByClassName("mobile-menu")[0].style.opacity = 0;
    setTimeout(() => 
    {
        document.getElementsByClassName("mobile-menu")[0].remove();
    },900)
    hamburger.style.display ="inline-block";
    close_icon.style.display = "none";
    open = false;
}
