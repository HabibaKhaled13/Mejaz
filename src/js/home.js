let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let infoInput = document.getElementById("info-input");
let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minEl = document.getElementById("minu");
let secEl = document.getElementById("sec");
let form = document.getElementById("form")
let valid = document.getElementById("text-valid")
let validd = document.getElementById("text-validd")
let validdd = document.getElementById("text-validdd")


let nameVaild = /^[\u0600-\u06FFa-zA-Z ]{3,40}$/;
let emailValid = /^[a-zA-Z0-9_.-]{3,40}@(yahoo|outlook|gmail)\.com$/;
let textValid = /^[\u0600-\u06FFa-zA-Z ]{3,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  let userData = {
    name: nameInput.value,
    email: emailInput.value,
    info: infoInput.value,
  };

  if (
    checkInputs(nameVaild, nameInput) &
    checkInputs(emailValid, emailInput) &
    checkInputs(textValid, infoInput) 
  ) {
    localStorage.setItem("dataForUsers", JSON.stringify(userData));
    users.push(userData);
    console.log(users);
    valid.classList.add("hidden")
       validd.classList.add("hidden")
           validdd.classList.add("hidden")

   
  } else {
     valid.classList.remove("hidden")
    validd.classList.remove("hidden")
       validdd.classList.remove("hidden")
  }

});

function checkInputs(regex, input) {
  return regex.test(input.value);
}




window.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

let counterDown = new Date("aug 20, 2025 23:59:59").getTime();

let count = setInterval(() => {
  let date = new Date().getTime();
  let countData = counterDown - date;
  const days = Math.floor(countData / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countData % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const min = Math.floor((countData % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((countData % (1000 * 60)) / 1000);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minEl.innerHTML = min;
  secEl.innerHTML = sec;
}, 1000);

let imgs = [
  {
    img: `../img/instagram4.jpg`,
  },
  {
    img: `../img/instagram5.jpg`,
  },
  {
    img: `../img/instagram6.jpg`,
  },
  {
    img: `../img/instagram7.jpg`,
  },
  {
    img: `../img/instagram8.jpg`,
  },
  {
    img: `../img/instagram2.jpg`,
  },
];

function getPortfolio() {
  let imgsPortfolio = "";
  imgs.map((items) => {
    imgsPortfolio += `   <div class="lg:w-[15.5%] md:w-[30%] w-full my-3">
  <div class="relative group overflow-hidden rounded-md">
    <img src="${items.img}" class="w-full rounded-md" alt="" loading="lazy">
    
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex justify-center items-center">
      <i class="fa-brands fa-instagram text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
    </div>
  </div>
</div>`;
  });
  document.getElementById("portfolio").innerHTML = imgsPortfolio;
}
getPortfolio();
