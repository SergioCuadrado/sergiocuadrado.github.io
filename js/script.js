window.onscroll = function(){

  // Funcion nav-bar hacerla mas pequeña o grande
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav-main").style.height = "50px";
    document.getElementById("nav-main").style.fontSize = "14px";
  } else {
    document.getElementById("nav-main").style.height = "75px";
    document.getElementById("nav-main").style.fontSize = "16px";
  }

  if (!window.matchMedia("(min-width: 600px)").matches){
    document.getElementById("nav-main").style.height = "75px";
    document.getElementById("nav-main").style.fontSize = "16px";
  }


  /*
  var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight);*/
}




// Responsive top bar
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});




