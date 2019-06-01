function toggleMenu(){
  var dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("header--dropdown-active");
  var menutoggle = document.getElementById("menu-toggle");
  menutoggle.classList.toggle("active");
  menutoggle.classList.toggle("fa-folder-open")
}
function showDropdownHomework(){
  var dropdownshop1 = document.getElementById("header__subtopic1");
  var dropdownshop2 = document.getElementById("header__subtopic2");
  var dropdownshop3 = document.getElementById("header__subtopic3");
  var dropdownshop4 = document.getElementById("header__subtopic4");
  var dropdownshop5 = document.getElementById("header__subtopic5");
  var dropdownshop6 = document.getElementById("header__subtopic6");
  var dropdownarrow = document.getElementById("dropdown--shop-arrow")
  dropdownarrow.classList.toggle("rotate-90deg");
  dropdownshop1.classList.toggle("subtopic--hidden");
  dropdownshop2.classList.toggle("subtopic--hidden");
  dropdownshop3.classList.toggle("subtopic--hidden");
  dropdownshop4.classList.toggle("subtopic--hidden");
  dropdownshop5.classList.toggle("subtopic--hidden");
  dropdownshop6.classList.toggle("subtopic--hidden");
}
