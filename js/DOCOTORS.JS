// Close The login page Start
let mark=document.querySelector("#mark")
let loginSection=document.querySelector(".login")
mark.addEventListener("click",()=>{
  loginSection.style.display="none"
})

// Close The login page End

// Show Login Page Start
let loginBtn=document.querySelector("#login")

loginBtn.addEventListener("click",()=>{
  loginSection.style.display="block"
})
// Show Login Page End
// Start Arrow top
let topArrow = document.querySelector("#top");
window.onscroll = function () {
  if (window.scrollY >= 550) {
    topArrow.classList.add("show-arrow");
  } else {
    topArrow.classList.remove("show-arrow");
  }
};
topArrow.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// End Arrow Top
//User Name Start

window.onload=()=>{
  refresh()
}
let userName=document.querySelector("#name")
let login=document.querySelector("#login")
let log=document.querySelector("#log")
console.log(userName,login,log)
log.addEventListener("click",()=>{
  // console.log(userName.value)

  login.innerHTML="hi ,"+userName.value
  window.localStorage.setItem("UserName",userName.value)
  userName.value=""
  loginSection.style.display="none"
})

function refresh(){
  if(localStorage.getItem("UserName")){
    login.innerHTML="hi, "+localStorage.getItem("UserName")
  }
}
//User Name End
let icons = document.querySelector(".icons");
let spans = document.querySelectorAll(".icons span");
let smallNav = document.querySelector(".small-nav");
console.log(smallNav);
console.log(icons);
console.log(spans);

// icons Start
icons.addEventListener("click", () => {
  // spans[0].style.transform="transform: rotateZ(45deg) translatey(18px) translateX(-8px);"
  // spans[2].style.transform="transform: rotateZ(-45deg) translatey(-20px) translateX(-7px);"
  spans[0].classList.toggle("rotate1");
  // spans[1].classList.toggle("show")
  spans[1].classList.toggle("rotate2");
  smallNav.classList.toggle("shw");
});
// icons End
// Small Nav Bar Start
let drpDwnlink=document.querySelector(".drp-dwn")
let drpUl=document.querySelector("#drp")
let angle=document.querySelector("#angle")
console.log(drpDwnlink,drpUl)
drpDwnlink.addEventListener("click",()=>{
  drpUl.classList.toggle("drp-open")
})
// Small Nav Bar End
// Preloader Start
let lodingPage=document.querySelector(".preloader")
let loadingHeading=document.querySelector(".preloader h3")
let loadingIcon=document.querySelector(".loading-icon")
let load=document.querySelector("#load")
window.addEventListener("load",()=>{
  lodingPage.classList.add("loader-hidden")
  let loadtTimes=setInterval(()=>{
    load.innerHTML++
    if(load.innerHTML==100)
    {
      clearInterval(loadtTimes)
    }
  },50)

})
// Preloade End
