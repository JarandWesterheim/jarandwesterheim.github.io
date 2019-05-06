

function showDropdown(){
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("header--dropdown-active")
  var menuicon = document.getElementById("header--menu-icon");
  menuicon.classList.toggle("fa-times");
  var usericon = document.getElementById("header--user-icon");
  usericon.classList.toggle("header--user-icon-active");
}
function toggleFinalmouse(){
  console.log("finalmouse toggled");
  var csfinalmouse = document.getElementById("finalmouse");
  var cscorsair = document.getElementById("corsair");
  var cszowie = document.getElementById("zowie");
  var btnfm = document.getElementById("cs--finalmousetoggle");
  var btnc = document.getElementById("cs--corsairtoggle");
  var btnz = document.getElementById("cs--zowietoggle");
  btnfm.classList.add('fm-clr');
  btnc.classList.remove('c-clr');
  btnz.classList.remove('z-clr');
  csfinalmouse.classList.remove('untoggeled');
  cscorsair.classList.add('untoggeled');
  cszowie.classList.add('untoggeled')
}

function toggleCorsair(){
  console.log("corsair toggled");
  var csfinalmouse = document.getElementById("finalmouse");
  var cscorsair = document.getElementById("corsair");
  var cszowie = document.getElementById("zowie");
  var btnfm = document.getElementById("cs--finalmousetoggle");
  var btnc = document.getElementById("cs--corsairtoggle");
  var btnz = document.getElementById("cs--zowietoggle");
  btnfm.classList.remove('fm-clr');
  btnc.classList.add('c-clr');
  btnz.classList.remove('z-clr');
  csfinalmouse.classList.add("untoggeled");
  cscorsair.classList.remove("untoggeled");
  cszowie.classList.add("untoggeled");
}

function toggleZowie(){
  console.log("zowie toggled");
  var csfinalmouse = document.getElementById("finalmouse");
  var cscorsair = document.getElementById("corsair");
  var cszowie = document.getElementById("zowie");
  var btnfm = document.getElementById("cs--finalmousetoggle");
  var btnc = document.getElementById("cs--corsairtoggle");
  var btnz = document.getElementById("cs--zowietoggle");
  btnfm.classList.remove('fm-clr');
  btnc.classList.remove('c-clr');
  btnz.classList.add('z-clr');
  csfinalmouse.classList.add("untoggeled");
  cscorsair.classList.add("untoggeled");
  cszowie.classList.remove("untoggeled");
}


function showDropdownshop(){
  var dropdownshop1 = document.getElementById("header__subtopic1");
  var dropdownshop2 = document.getElementById("header__subtopic2");
  var dropdownshop3 = document.getElementById("header__subtopic3");
  var dropdownshop4 = document.getElementById("header__subtopic4");
  var dropdownarrow = document.getElementById("dropdown--shop-arrow")
  dropdownarrow.classList.toggle("rotate-180deg");
  dropdownshop1.classList.toggle("subtopic--hidden");
  dropdownshop2.classList.toggle("subtopic--hidden");
  dropdownshop3.classList.toggle("subtopic--hidden");
  dropdownshop4.classList.toggle("subtopic--hidden");
}

function miceSort() {
  var dropdown = document.getElementById("mice-sorting");
  var down = document.getElementById("micesortdown");
  down.classList.toggle("rotate-180deg");
  dropdown.classList.toggle("hidden");
}
function keyboardSort() {
  var dropdown = document.getElementById("keyboard-sorting");
  var down = document.getElementById("keyboardsortdown");
  down.classList.toggle("rotate-180deg");
  dropdown.classList.toggle("hidden");
}
function accessorySort() {
  var dropdown = document.getElementById("accessory-sorting");
  var down = document.getElementById("accessorysortdown");
  down.classList.toggle("rotate-180deg");
  dropdown.classList.toggle("hidden");
}
function addCart() {
  let cart = document.getElementById("cart");
  cart.classList.toggle("addCart");
  setTimeout(function(){
    cart.classList.toggle("addCart")
  }, 400);
  
}


function showCart() {
  let overlay = document.querySelector("#cart--container");
  let body = document.querySelector("body");
  body.classList.toggle("noScroll");
  overlay.classList.toggle("hidden");
}
/*Gamepage Article Generation*/
