$(function(){
//*AOS init

    AOS.init();

//*VANOBOX

new VenoBox();
selector: ".myImage"


//*MIXITUP

var mixer = mixitup('.myContainer');

})
//*js

function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);


