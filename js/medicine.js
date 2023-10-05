// icons Start
let icons = document.querySelector(".icons");
let spans = document.querySelectorAll(".icons span");
let smallNav = document.querySelector(".small-nav");
console.log(smallNav);
console.log(icons);
console.log(spans);
icons.addEventListener("click", () => {
  spans[0].classList.toggle("rotate1");
  spans[1].classList.toggle("rotate2");
  smallNav.classList.toggle("shw");
});
// icons End
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
// themes Start
//to open Settings start
let setings = document.getElementById("sett");
let themes = document.querySelector(".themes");
setings.addEventListener("click", () => {
  themes.classList.toggle("act");
});
//to open Settings end
let theme1 = document.querySelector("#theme1");
let theme2 = document.querySelector("#theme2");
console.log(theme2);
btnRefresh(); // Call Refresh Btn Func
themeRefreh()
theme1.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
  window.localStorage.setItem("Light-Mode", "LMode");
  window.localStorage.removeItem("Dark-Mode");
  // Theme Btn Active Start
  theme1.classList.add("actve");
  theme2.classList.remove("actve");
  //Save Active Class For light Btn In local Storage
  window.localStorage.setItem("light-actve", "light");
  //Remove Active Class For Dark Btn From local Storage
  window.localStorage.removeItem("dark-actve");
  // Theme Btn Active End
});
theme2.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
  window.localStorage.setItem("Dark-Mode", "DMode");
  window.localStorage.removeItem("Light-Mode");
  // Themem Btn Acive Start
  theme1.classList.remove("actve");
  theme2.classList.add("actve");
  //Save Active Class For Dark btn In loal Storage
  window.localStorage.setItem("dark-actve", "dark");
  //Remove Active Class For Light btn From loal Storage
  window.localStorage.removeItem("light-actve");
  // Themem Btn Acive End
});
// Theme Btn refresh Start
function btnRefresh() {
  if (localStorage.getItem("light-actve") == "light") {
    theme1.classList.add("actve");
    theme2.classList.remove("actve");
  }
  if (localStorage.getItem("dark-actve") == "dark") {
    theme1.classList.remove("actve");
    theme2.classList.add("actve");
  }
}
// Theme Btn refresh End
//Theme Mode refrsh SStart
function themeRefreh() {
  if (localStorage.getItem("Dark-Mode") == "DMode") {
    document.body.classList.add("dark-mode");
  }
  if(localStorage.getItem("Light-Mode")=="LMode"){
    document.body.classList.remove("dark-mode");

  }
}
//Theme Mode refrsh End
// themes End
// Close The login page Start
let mark = document.querySelector("#mark");
let loginSection = document.querySelector(".login");
mark.addEventListener("click", () => {
  loginSection.style.display = "none";
});

// Close The login page End
// Show Login Page Start
let loginBtn = document.querySelector("#login");
let loginBtn2 = document.querySelector("#login2");
loginBtn.addEventListener("click", () => {
  loginSection.style.display = "block";
});
loginBtn2.addEventListener("click", () => {
  loginSection.style.display = "block";
});
// Show Login Page End
// Other Links Start
let other = document.querySelector(".other-links");
let otherlink = document.querySelector("#other");
otherlink.addEventListener("click", () => {
  other.classList.toggle("show-others");
});
// Other Links End
//Filterable Gallery Start
let contorls = document.querySelectorAll(".control-buttons button");
let cards = document.querySelectorAll(".cards .crd");
console.log(contorls, cards);
contorls.forEach((button) => {
  button.addEventListener("click", (evnt) => {
    //Remove Class Active From All buttons And Add it T Curent Element
    contorls.forEach((but) => {
      but.classList.remove("active-btn");
      evnt.currentTarget.classList.add("active-btn");
    });
    //add class hide and remove it
    cards.forEach((card) => {
      // Add class hide to All cards
      card.classList.add("hide");
      if (
        card.dataset.name === evnt.currentTarget.dataset.name ||
        evnt.currentTarget.dataset.name === "all"
      ) {
        //remove class hide from the cards that cutsom attrubit eaul to cstom attrubite of btn
        card.classList.remove("hide");
      }
    });
  });
});
//Filterable Gallery End
// Add to Cart Start
let cart = document.querySelectorAll("#cart");
let shopping2 = document.querySelector("#cart2");
let shopping = document.querySelector("#shopping");
let popUp = document.querySelector(".pop-up");
let xMark = document.querySelector("#x-mark");
let mainCart = document.querySelector(".cart");
let numbrItm = document.querySelector(".crt-pop-up h4 span");
console.log(cart, shopping);
shoppingRefresh();
cart.forEach((crt) => {
  crt.addEventListener("click", () => {
    shopping.innerHTML++;
    shopping2.innerHTML++;
    window.localStorage.setItem("Shopping", shopping.innerHTML);
    window.localStorage.setItem("Shopping2", shopping2.innerHTML);
    popUp.style.left = "0px";
  });
});
shoppingRefresh();
function shoppingRefresh() {
  if (window.localStorage.getItem("Shopping")) {
    shopping.innerHTML = window.localStorage.getItem("Shopping");
    numbrItm.innerHTML = localStorage.getItem("Shopping");
  }
  if (window.localStorage.getItem("Shopping2")) {
    shopping2.innerHTML = window.localStorage.getItem("Shopping2");
  }
}
// Close The PopUp Start
xMark.addEventListener("click", () => {
  popUp.style.left = "-5000px";
});
// Close The PopUp End
// Add to Cart End
// Small Nav Bar Start
let drpDwnlink = document.querySelector(".drp-dwn");
let drpUl = document.querySelector("#drp");
let angle = document.querySelector("#angle");
console.log(drpDwnlink, drpUl);
drpDwnlink.addEventListener("click", () => {
  drpUl.classList.toggle("drp-open");
});
// Small Nav Bar End
// Preloader Start
let lodingPage = document.querySelector(".preloader");
let loadingHeading = document.querySelector(".preloader h3");
let loadingIcon = document.querySelector(".loading-icon");
let load = document.querySelector("#load");
window.addEventListener("load", () => {
  lodingPage.classList.add("loader-hidden");
  let loadtTimes = setInterval(() => {
    load.innerHTML++;
    if (load.innerHTML == 100) {
      clearInterval(loadtTimes);
    }
  }, 50);
});
// Preloade End
//User Name Start
window.onload = () => {
  refresh();
};
let userName = document.querySelector("#name");
let login = document.querySelector("#login");
let login2 = document.querySelector("#login2");
let log = document.querySelector("#log");
let checkBox = document.querySelector("#rememebr");
let userPass = document.querySelector("#pass");
console.log(userName, login, log);
log.addEventListener("click", () => {
  console.log(userName.value);
  login.innerHTML = "hi ," + userName.value;
  login2.innerHTML = "hi ," + userName.value;
  //set User Name to local Storage
  window.localStorage.setItem("UserName", userName.value);
  //set password to local storage
  window.localStorage.setItem("Pass", userPass.value);
  // Set Check box In Local Storage
  window.localStorage.setItem("Check", checkBox.checked);
  userName.value = "";
  loginSection.style.display = "none";
});
function refresh() {
  if (localStorage.getItem("UserName")) {
    login.innerHTML = "hi, " + localStorage.getItem("UserName");
    login2.innerHTML = "hi, " + localStorage.getItem("UserName");
    userName.value = localStorage.getItem("UserName");
  }
  if (localStorage.getItem("Pass")) {
    userPass.value = localStorage.getItem("Pass");
  }

  if (localStorage.getItem("Check")) {
    checkBox.checked = localStorage.getItem("Check");
  }
}
//User Name End
// Cart pop Up Start
let shoopingCart = document.querySelector(".cart");
let shoopingCart2 = document.querySelector("#crt");
let crtPopup = document.querySelector(".crt-pop-up");
shoopingCart.addEventListener("click", () => {
  crtPopup.classList.toggle("crt-show");
});
shoopingCart2.addEventListener("click", () => {
  crtPopup.classList.toggle("crt-show");
});
// Cart pop Up End
