let api = [
  {
    "id": "coffee",
    "title": "أنواع القهوة",
    "items": [
      {
        "name": "إسبريسو",
        "desc": "قهوة مركزة وغنية تقدم في كوب صغير.",
        "price": 15 
      },
      {
        "name": "كابتشينو",
        "desc": "قهوة بالحليب مع رغوة غنية.",
        "price": 18
      },
      {
        "name": "لاتيه",
        "desc": "قهوة خفيفة بالحليب، ناعمة وسلسة.",
        "price": 20
      },
      {
        "name": "موكا",
        "desc": "قهوة ممزوجة بالشوكولاتة والحليب.",
        "price": 22
      },
      {
        "name": "أمريكانو",
        "desc": "قهوة سوداء خفيفة مناسبة لكل وقت.",
        "price": 14
      }
    ]
  },
  {
    "id": "cakes",
    "title": "الحلويات",
    "items": [
      {
        "name": "تشيز كيك",
        "desc": "تشيز كيك كريمي بنكهة الفراولة.",
        "price": 25
      },
      {
        "name": "براوني ",
        "desc": "براوني غني ومليء بالشوكولاتة الداكنة.",
        "price": 19
      },
      {
        "name": "كريب نوتيلا",
        "desc": "كريب رقيق محشو بنوتيلا ومزين بالفواكه.",
        "price": 24
      },
      {
        "name": "تيراميسو",
        "desc": "حلوى إيطالية بطبقات قهوة وكريمة.",
        "price": 28
      },
      {
        "name": "كوكيز ",
        "desc": "كوكيز مقرمشة مع رقائق شوكولاتة.",
        "price": 10
      }
    ]
  },
  {
    "id": "bakery",
    "title": "المعجنات",
    "items": [
      {
        "name": "كرواسون زبدة",
        "desc": "كرواسون فرنسي هش وطازج.",
        "price": 12
      },
      {
        "name": "كرواسون ",
        "desc": "محشو بشوكولاتة ناعمة.",
        "price": 14
      },

      {
        "name": "ميني بيتزا",
        "desc": "عجينة ناعمة مع صلصة وجبن.",
        "price": 20
      },
      {
        "name": "لفائف جبنة",
        "desc": "عجينة لينة محشوة بأنواع مختلفة من الجبن.",
        "price": 18
      }
    ]
  },
  {
    "id": "soft",
    "title": "المشروبات الباردة",
    "items": [
      {
        "name": "آيس لاتيه",
        "desc": "قهوة باردة بالحليب والثلج.",
        "price": 21
      },
      {
        "name": "فرابتشينو ",
        "desc": "مشروب مثلج بنكهة الكراميل.",
        "price": 26
      },
      {
        "name": "موكا مثلجة",
        "desc": "قهوة باردة بالشوكولاتة والحليب.",
        "price": 24
      },
      {
        "name": "عصير مانجو",
        "desc": "عصير مانجو طازج ومنعش.",
        "price": 18
      },
      {
        "name": "ليمون",
        "desc": "عصير بارد ومنعش.",
        "price": 16
      }
    ]
  }
]



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

 function getProducts(index, divId) {
  let product = "";
  let firstSection = api[index].items;

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

  let product = "";
  let firstSection = api[indexSec].items;
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


