function navbar() {
  let navbar = `<nav class="bg-[#211102] py-1.5">
  <div class="container md:px-20 flex flex-wrap items-center justify-between mx-auto py-2">
  
    <a href="index.html#home" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src="img/82da65df-5eb0-48d4-8f0a-87aa63e6ea54.png"
        class="md:w-[75px] w-[70px]"
        alt="Mezaj"
      />
    </a>

    <div class="flex items-center lg:order-2 space-x-1 rtl:space-x-reverse">
      <a href="https://wa.me/1234567890" target="_blank">
        <button
          class="text-white md:text-[15px] text-[14px] me-2 lg:me-0 bg-[#c68e17] transition-all duration-300 hover:bg-[#9b731c] font-semibold border rounded-md border-[#c68e17] md:px-7 px-5 py-2.5"
        >
          اطلب أونلاين
        </button>
      </a>
      <button
        data-collapse-toggle="navbar-language"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-language"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>

    <div
      class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      id="navbar-language"
    >
      <ul
        class="flex flex-col font-medium p-4 mt-4 lg:flex-row lg:space-x-3 rtl:space-x-reverse lg:mt-0 lg:border-0"
      >
        <li>
          <a
            href="./index.html#main-section"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            aria-current="page"
            >الرئيسية</a
          >
        </li>
        <li>
          <a
            href="./index.html#about"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            >من نحن</a
          >
        </li>
        <li>
          <a
            href="./menu.html"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            >القائمة</a
          >
        </li>
        <li>
          <a
            href="./index.html#offers"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            >عروضنا الخاصة</a
          >
        </li>
        <li>
          <a
            href="./index.html#testmonial"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            >آراء عملائنا</a
          >
        </li>
        <li>
          <a
            href="./bookYourTable.html"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            >احجز طاولتك</a
          >
        </li>
        <li>
          <a
            href="./index.html#contactUs"
            class="block py-2 px-3 hover:text-[#c68e17] duration-300 transition-all text-white"
            >تواصل معنا</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
`
;

  document.getElementById("nav").innerHTML = navbar;
}
navbar();

function footer() {
  let footer = `  <div class="container mx-auto md:px-20 ">
  <div class="flex flex-wrap mb-10 justify-between">
   <div class="lg:w-1/4  w-full mb-7 lg:mb-0"> 
      <div class="text-logo  text-white">
       <img src="../img/82da65df-5eb0-48d4-8f0a-87aa63e6ea54.png" class="w-[70px] inline-block mb-2" alt="Mezaj" />
        <p class="text-sm ">منذ سنوات نقدم لكم القهوة الأصيلة والحلويات الشرقية اللذيذة في جو ملئ بالدفء والراحة.</p>
      <ul class="flex text-xl mt-4 gap-x-3">
        <li><i class="fa-brands fa-facebook cursor-pointer hover:text-[#c68e17] duration-300 transition-all"></i></li>
        <li><i class="fa-brands fa-instagram cursor-pointer hover:text-[#c68e17] duration-300 transition-all"></i></li>
        <li><i class="fa-brands fa-tiktok cursor-pointer hover:text-[#c68e17] duration-300 transition-all"></i></li>
        <li><i class="fa-brands fa-whatsapp cursor-pointer hover:text-[#c68e17] duration-300 transition-all"></i></li>
       </ul>

        </div>
    </div>

   <div class="lg:w-[22%]  w-[47%]"> 
      <div class="text-logo text-white">
        <h2 class="text-xl mb-5 text-[#c68e17]">
       روابط سريعة
        </h2>
    
<p class="text-sm my-4 hover:text-[#c68e17] duration-300 transition-all cursor-pointer"> سياسة الخصوصية</p>
<p class="text-sm my-4 hover:text-[#c68e17] duration-300 transition-all cursor-pointer"> الشروط والأحكام </p>
<p class="text-sm my-4 hover:text-[#c68e17] duration-300 transition-all cursor-pointer"> موقعنا</p>
      </div>
    </div>

    
   <div class="lg:w-[22%]  w-[47%]"> 
      <div class="text-logo text-white">
        <h2 class="text-xl mb-5  text-[#c68e17]">
       ساعات العمل</h2>
    
<p class="text-sm my-4">من 8 صباحا حتي 11 مساء</p>
<p class="text-sm my-4"> تفصل بزياراتنا واستمتع بتجربة لا تنسي</p>

      </div>
    </div>

    <div class="lg:w-[22%] w-full mt-7 lg:mt-0"> 
      <div class="text-logo text-white">
        <h2 class="text-xl mb-5 text-[#c68e17]">
    وسائل الدفع</h2>
    
     <p class="text-sm my-4">ندعم كافة وسائل الدفع: مدى، فيزا، ماستر كارد، — عشان راحتكم أولويتنا </p>
      <img src="../img/footer-payment.webp" alt="">
      </div>
    </div>

  </div>
  <div class="copy">
    <p class="text-white text-sm text-center border-t border-gray-800 pt-7">© حقوق النشر 2025. جميع الحقوق محفوظة.

</p>
  </div>
  </div>`;

  document.getElementById("footer").innerHTML = footer;
}

footer();
