<template>
  <div class="HomePage">
    <header class="w-full px-[30px] md:px-[80px] pt-[130px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/4.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[10vw] md:text-[50px] font-[700] mb-[20px]">خدمات منصة كلينيكير</h1>
      </div>
    </header>
    
    <div class="ServicesPage text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[60px] py-[60px]">
      <div class="w-full grid  md:grid-cols-2 gap-[40px] justify-start">
        <div class="flex justify-start items-center gap-[40px] rounded-[10px] overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.55)] p-[60px_20px]">
          <img :src="require('@/image/contactus-header.png')" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" alt="">
          <div class="relative z-[3] text-center sm:px-[30px]">
            <h1 class="text-[38px] text-[#ffffff]  mb-[20px]">تقديم الرأي الطبي الثاني</h1>
            <p class="text-[17px] text-[#ffffff] mb-[30px]"> مجموعة من الاستشاريين والخبراء الصحيين لمراجعة التقارير والفحوصات الطبية وتقديم الرأي الطبي المناسب</p>
            <button @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Second medical opinion'" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[16px] text-[white] py-[15px] px-[20px] rounded-md cursor-pointer">اطلب الرأي الطبي</button>
          </div>
        </div>
        <div class="flex justify-start items-center gap-[40px] rounded-[10px] overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.55)] p-[60px_20px]">
          <img :src="require('@/image/booking-doctor-background.jpeg')" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" alt="">
          <div class="relative z-[3] text-center sm:px-[30px]">
            <h1 class="text-[38px] text-[#ffffff]  mb-[20px]">حجز موعد مع الاستشاري</h1>
            <p class="text-[17px] text-[#ffffff] mb-[30px]">حجز المواعيد مع نخبة من الاستشاريين والخبراء الصحيين لمناقشة الأراء الطبية واقتراح خطط العلاج البديلة</p>
            <button @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Bookanappointment'" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[16px] text-[white] py-[15px] px-[20px] rounded-md cursor-pointer">طلب حجز موعد</button>
          </div>
        </div>
        <div class="flex justify-start items-center gap-[40px] rounded-[10px] overflow-hidden relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.55)] p-[60px_20px]">
          <img :src="require('@/image/xray-background.jpg')" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" alt="">
          <div class="relative z-[3] text-center sm:px-[30px]">
            <h1 class="text-[38px] text-[#ffffff]  mb-[20px]">إجراء الفحوصات والأشعة</h1>
            <p class="text-[17px] text-[#ffffff] mb-[30px]">منصة كلينيكير توفر خدمة إجراء المزيد من الفحوصات والأشعة التي تساعد على التشخيص الدقيق وبناء رأي طبي آخر</p>
            <button @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Conductingexaminations'" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[16px] text-[white] py-[15px] px-[20px] rounded-md cursor-pointer">طلب إجراء الفحوصات والأشعة </button>
          </div>
        </div>
      </div>
    </div>
    <div class="price bg-[#f4f4f4] text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[60px] py-[60px]">
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <!-- Pricing Card -->
                <div class="flex flex-col p-6 pt-[60px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                    <h3 class="mb-[30px] text-[30px] font-semibold">الباقة الأولى</h3>
                    <p class="font-light text-gray-600 sm:text-lg ">مراجعة التقارير الطبية والفحوصات والأشعة وتقديم تقرير طبي حول الحالة الصحية</p>
                    <div class="flex justify-center items-baseline my-4">
                    </div>
                    <button @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Second medical opinion'" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[16px] text-[white] py-[15px] px-[20px] rounded-md cursor-pointer">اختيار هذه الباقة </button>
                </div>
                <!-- Pricing Card -->
                <div class="flex flex-col p-6 pt-[60px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                    <h3 class="mb-[30px] text-[30px] font-semibold">الباقة الثانية</h3>
                    <p class="font-light text-gray-600 sm:text-lg ">مراجعة التقارير الطبية وإجراء فحوصات جديدة لتقديم تقرير طبي آخر عن الحالة الصحية</p>
                    <div class="flex justify-center items-baseline my-4">
                    </div>
                    <button @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Bookanappointment'" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[16px] text-[white] py-[15px] px-[20px] rounded-md cursor-pointer">اختيار هذه الباقة </button>
                </div>
                <!-- Pricing Card -->
                <div class="flex flex-col p-6 pt-[60px] mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                    <h3 class="mb-[30px] text-[30px] font-semibold">الباقةالثالثة</h3>
                    <p class="font-light text-gray-600 sm:text-lg ">حجز موعد مع الاستشاري لمناقشة الحالة الصحية والخطط الطبية البديلة</p>
                    <div class="flex justify-center items-baseline my-4">
                    </div>
                    <button  @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Conductingexaminations'" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[16px] text-[white] py-[15px] px-[20px] rounded-md cursor-pointer">اختيار هذه الباقة </button>
                </div>
            </div>
        </div>
      </section>
    </div>
    <div class="z-[999999] fixed top-[0px] mb-[20px] left-0 w-full h-screen bg-[rgba(0,_0,_0,_0.67)]  flex justify-center items-center" :class="{'hidden': form_services == false, 'block': form_services == true}" @click.self="form_services = false">
          <div class="bg-white rounded-xl p-[20px] max-h-[95%] overflow-y-auto w-[95%] md:w-[70%] lg:w-[50%] ">
            <SecondopinionPage  v-if="services_name == 'Second medical opinion'" />
            <BookanappointmentPage  v-if="services_name == 'Bookanappointment'" />
            <ConductingexaminationsPage  v-if="services_name == 'Conductingexaminations'" />
          </div>
    </div>
  </div>
</template>

<script>

import SecondopinionPage from '@/components/form_services/SecondopinionPage.vue'
import BookanappointmentPage  from '@/components/form_services/BookanappointmentPage.vue'
import ConductingexaminationsPage from '@/components/form_services/ConductingexaminationsPage.vue'

export default {
  name: 'ServicesPage',
  data() {
    return {
      form_services: false,
      services_name: '',
    };
  },
  components:{
    SecondopinionPage,
    BookanappointmentPage,
    ConductingexaminationsPage
  }
}
</script>

<style scoped lang="scss">


</style> 