// creating closing top navbar

var topsale = document.getElementById("topsale")
var closingX = document.getElementById("offer-close")


closingX.addEventListener("click", function () {
    topsale.style.display = "none"
})

//side nav bar 
var hamburgermenu = document.getElementById("ham-menu")
var sidenavbar = document.getElementById("sid-nav")
var closenav = document.getElementById("side-navbar__close")

hamburgermenu.addEventListener ("click", function ()
{
    sidenavbar.style.left = 0

})


closenav.addEventListener ("click", function()
{
    sidenavbar.style.left = "-60%"
})



//Slider Image Section 

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-image-container")
var slidermargin=0

sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)

