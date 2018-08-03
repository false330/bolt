function hamburgerFunc() {
  var hbMenu = document.getElementById("bolt__hamburger-menu");
  var hbMenuClass = hbMenu.className;
  if(hbMenuClass == 'bolt__hamburger-nav hbClose') {
    hbMenu.classList.add("hbOpen");
    hbMenu.classList.remove("hbClose");
  }
  else{
    hbMenu.classList.add("hbClose");
    hbMenu.classList.remove("hbOpen");
  }
  console.log(hbMenuClass);
}