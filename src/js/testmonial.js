let test = [
  {
    name: "سارة القحطاني",
    review:
      "الصراحة المكان رايق، والقهوة عندهم من الآخر! أحس فعلاً نكهة أصيلة، والديكور يفتح النفس 👌🏼",
    date: "15 مايو 2025",
  },
  {
    name: "ناصر العتيبي ",
    review:
      "طلبت كابتشينو وكرواسون، الطعم رهيب والخدمة سريعة. أكيد مو آخر زيارة 🌟",
    date: "9 مايو 2025",
  },
  {
    name: "ريم الحربي",
    review:
      "الحلا عندهم يجنن! خصوصاً التيراميسو، بس أتمنى يكون فيه جلسات أكثر للعوايل.",
    date: "3 مايو 2025",
  },
  {
    name: "عبدالله السبيعي",
    review:
      "أول مرة أزورهم، والمكان فوق التوقعات. تعامل الموظفين محترم، يعطيكم العافية ❤️",
    date: "25 أبريل 2025",
  },
  {
    name: "فهد الزهراني",
    review:
      "الكوفي عندهم صار مفضلي! حتى أجواء المكان ترد الروح، أنصح فيه وبقوة.",
    date: "9 أبريل 2025",
  },
];

function testmonial() {
  let review = "";
  for (let i = 0; i < test.length; i++) {
    review += `
            <div class="swiper-slide bg-white rounded-lg shadow-md p-8">
        <div class="flex justify-between text-sm">
         <span class="  text-yellow-500"><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star "></i><i class="fa-regular fa-star-half-stroke"></i></span>
         <span class="font-medium ">${test[i].date}</span>
        </div>
        <p class=" text-gray-800 text-[15px] my-5">${test[i].review}</p>


       
        <img src="../img/user (1) (1).png">
           <h2 class=" font-medium text-black mt-3">${test[i].name}</h2>
            </div>`;
  }
  document.getElementById("swiper").innerHTML = review;
}
testmonial();
