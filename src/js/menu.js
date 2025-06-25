let navHome = document.getElementById("home")

navHome.addEventListener("click", ()=>{
  window.location.href="./home.html"
})

window.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

async function getProducts(index, divId) {
  let response = await fetch("./data/product.json");
  let produtDetails = await response.json();
  let product = "";
  let firstSection = produtDetails[index].items;

  for (let i = 0; i < firstSection.length; i++) {
    product += `
   <div class="flex flex-wrap justify-between items-center">
          <div class="product my-6 md:mx-4 lg:w-[44%] w-full ">
           <div class="flex justify-between">
              <h2 class="text-xl font-semibold"><span><img src="../img/tick-inside-circle (1).png" class="w-4 inline me-3" alt=""></span>${firstSection[i].name} </h2>
     <span class="hidden md:inline-block text-xl">-------------------------------</span>
              <p class="font-semibold text-lg">${firstSection[i].price} ر.س </p>
            </div>   
            <p class="text-gray-0 ms-7 mt-2">${firstSection[i].desc}</p>
            </div>
           
          <div class="product my-6 mx-4 md:w-[44%] w-full lg:block hidden ">
           <div class="flex justify-between">
              <h2 class="text-xl font-semibold"><span><img src="../img/tick-inside-circle (1).png" class="w-4 inline me-3" alt=""></span>${firstSection[i].name} </h2>
                      
              
              <span class="hidden md:inline-block text-xl">-------------------------------</span>
              <p class="font-semibold text-lg">${firstSection[i].price} ر.س </p>
            </div>   
            <p class="text-gray-900 ms-7 mt-2">${firstSection[i].desc}</p>
            </div>
           

          </div>
          
       `;
  }
  document.getElementById(divId).innerHTML = product;
}
getProducts(0, "productDetails");
getProducts(3, "productDetailsSec");


async function getProductsSec(indexSec, divIdSec) {
  let response = await fetch("./data/product.json");
  let produtDetails = await response.json();
  let product = "";
  let firstSection = produtDetails[indexSec].items;
  console.log(firstSection);
  for (let i = 0; i < firstSection.length; i++) {
    product += `
   <div class="flex flex-wrap justify-between items-center">
          <div class="product my-6 md:mx-4 md:w-[44%] w-full ">
           <div class="flex justify-between">
              <h2 class="text-xl font-semibold"><span><img src="../img/tick-inside-circle (1).png" class="w-4 inline me-3" alt=""></span>${firstSection[i].name} </h2>
     <span class="hidden md:inline-block text-xl">-------------------------------</span>
              <p class="font-semibold text-lg">${firstSection[i].price} ر.س </p>
            </div>   
            <p class="text-gray-0 ms-7 mt-2">${firstSection[i].desc}</p>
            </div>
           
          <div class="product my-6 mx-4 md:w-[44%] w-full lg:block hidden ">
           <div class="flex justify-between">
              <h2 class="text-xl font-semibold"><span><img src="../img/tick-inside-circle (1).png" class="w-4 inline me-3" alt=""></span>${firstSection[i].name} </h2>
                      
              
              <span class="hidden md:inline-block text-xl">-------------------------------</span>
              <p class="font-semibold text-lg">${firstSection[i].price} ر.س </p>
            </div>   
            <p class="text-gray-900 ms-7 mt-2">${firstSection[i].desc}</p>
            </div>
           

          </div>
          
       `;
  }
  document.getElementById(divIdSec).innerHTML = product;
}
getProducts(1, "productDetailsthird");
getProducts(2, "productDetailsfourth");


