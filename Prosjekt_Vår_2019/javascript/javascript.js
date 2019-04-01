

function showDropdown(){
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("header--dropdown-active")
  var menuicon = document.getElementById("header--menu-icon");
  menuicon.classList.toggle("fa-times");
  var usericon = document.getElementById("header--user-icon");
  usericon.classList.toggle("header--user-icon-active");
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
function showAbout(){
  var about = document.getElementById("main--about");
  var dropdownprompt = document.getElementById("main--about-dropdown-prompt")
  about.classList.toggle("main--about-expanded");
  dropdownprompt.classList.toggle("main--dropdown-prompt-expanded");
}
function expandArcade() {
  var expand =document.getElementById("shop--arcade-contracted");
  expand.classList.toggle("shop-expanded");
}
function expandDigital() {
  var expand =document.getElementById("shop--digital-contracted");
  expand.classList.toggle("shop-expanded");
}
function expandBoard() {
  var expand =document.getElementById("shop--board-contracted");
  expand.classList.toggle("shop-expanded");
}
/*Gamepage Article Generation*/
