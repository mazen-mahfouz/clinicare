<template>
  <div id="FooterPage">
    <div class="bg-[#46439b] p-[50px_40px] md:p-[50px_80px] text-white">
      <div class="flex gap-[60px] sm:gap-0 justify-around items-center flex-wrap">
        <div class="w-full sm:w-[33.333%] grid items-center justify-center justify-items-center sm:justify-items-center text-center sm:text-right gap-[5px]">
          <img src="../image/logo.png" alt="" class="w-[300px]">
          <h1 class="text-[14px]"> دعونا نساعدكم في اتخاذ  <span class="text-[#5599f9]">القرار</span>.</h1>
        </div>
        <div class="sm:w-[33.333%] sm:mt-[50px] flex justify-center items-center flex-col gap-[10px] mb-[30px]">
          <h1 class="text-[20px]">قنوات التواصل</h1>
          <ul class="flex justify-center items-center gap-[15px]">
            <li class="group w-[60px] h-[60px]  rounded-full cursor-pointer transition ease-in hover:bg-[#ffffff9f]">
              <a href="https://twitter.com/@clinicareapp" target="_blank" class="w-full h-full flex justify-center items-center transition ease-in">
                <i class="fa-brands fa-x-twitter text-[30px] group-hover:text-[black] transition ease-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full sm:mt-[50px] flex justify-center items-center flex-col gap-[15px]">
        <ul class="flex justify-center items-center flex-wrap gap-y-[20px]">
          <li class="text-[14px] hover:text-sky-200 cursor-pointer transition ease-in px-[30px] border-l border-white">عن كلينيكير </li>
          <li class="text-[14px] hover:text-sky-200 cursor-pointer transition ease-in px-[30px] border-l border-white">سياسة الخصوصية </li>
          <li class="text-[14px] hover:text-sky-200 cursor-pointer transition ease-in px-[30px] border-l border-white">الشروط والاحكام</li>
          <li class="text-[14px] hover:text-sky-200 cursor-pointer transition ease-in px-[30px]">الاتصال بنا</li>
        </ul>
      </div>
    </div>
    <div class="bg-[#111111] w-full p-[20px] flex justify-center items-center text-[12px] text-white text-center">
        <p class="leading-5">© 2024 Clinicare, All rights reserved. | Powered by <span class="text-[#5599f9]">{</span> <a href="https://api.whatsapp.com/send/?phone=201099634244&text&type=phone_number&app_absent=0">Ahmed Mahfouz</a>  ,  <a href="https://api.whatsapp.com/send/?phone=201097266969&text&type=phone_number&app_absent=0">Mazen Mahfouz</a> <span class="text-[#5599f9]">}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
}
</script>

<style scoped lang="scss">

</style>
