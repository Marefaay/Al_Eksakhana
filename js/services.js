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
// Show More INformaion Start
let learnMore = document.querySelector("#learn-more");
let h4 = Array.from(document.getElementsByTagName("h4"));
learnMore.addEventListener("click", (el) => {
  let infoDiv = document.createElement("div");
  let h1 = document.createElement("h1");
  console.log(el);
});
h4.forEach((h) => {
  console.log(h.innerHTML);
});
// Show More INformaion End
// Other Links Start
let other = document.querySelector(".other-links");
let otherlink = document.querySelector("#other");
otherlink.addEventListener("click", () => {
  other.classList.toggle("show-others");
});
// Other Links End
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
let cart = document.querySelectorAll("#cart");
let shopping2 = document.querySelector("#cart2");
let shopping = document.querySelector("#shopping");
let numbrItm = document.querySelector(".crt-pop-up h4 span");
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
// Our Services Start
let servicescard = document.querySelectorAll(".services-card");
console.log(servicescard);
let learnMre = document.querySelectorAll("#learn-more");
console.log(learnMre);
learnMre.forEach((learn) => {
  learn.addEventListener("click", () => {
    let title = learn.previousElementSibling.previousElementSibling.innerHTML;
    console.log(title);
    let cardTxt = learn.previousElementSibling.textContent;
    console.log(cardTxt);
    //Create pop up Div Start
    let bgDiv = document.createElement("div");
    bgDiv.className = "bg";
    let conentDiv = document.createElement("div");
    conentDiv.className = "con";
    let h2 = document.createElement("h2");
    let h2Txt = document.createTextNode(title);
    let p = document.createElement("p");
    let pTxt = document.createTextNode(cardTxt);
    let spanIcon = document.createElement("span");
    let closeIcon = document.createElement("i");
    closeIcon.className = "fa-solid fa-xmark";
    spanIcon.appendChild(closeIcon);
    p.appendChild(pTxt);
    h2.appendChild(h2Txt);
    conentDiv.appendChild(h2);
    conentDiv.appendChild(p);
    conentDiv.appendChild(spanIcon);
    bgDiv.appendChild(conentDiv);
    document.body.appendChild(bgDiv);
    //Create pop up Div End
    // Add Event On click To Close ICon Start
    spanIcon.addEventListener("click", () => {
      bgDiv.classList.add("bg-hide");
    });
    // Add Event On click To Close ICon End
  });
});
// Our Services End
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

