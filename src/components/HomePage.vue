<template>
  <div class="HomePage">
    <header class="w-full px-[30px] md:px-[80px] pt-[150px] pb-[100px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/3.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] w-full max-w-[1400px] m-auto relative text-center md:text-center">
        <h1 class="text-[10vw] md:text-[50px] font-[700] mb-[20px]"><span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</h1>
        <p class="text-[20px] md:text-[18px] font-[400] mb-[50px]">دعونا نساعدكم في اتخاذ <span class="text-[#5599f9]">القرار</span></p>
        <button @click="$router.push('/services')" class=" justify-center items-center text-[12px] p-[12px_2.8rem]  md:p-[12px_28px] border-[2px] border-[#46439b] bg-[#46439b] rounded-[10px] cursor-pointer transition ease-in hover:bg-transparent inline mb-[10px] md:ml-[10px]">احصل على الخدمة</button>
        <button @click="$router.push('/about')" class="justify-center items-center text-[12px] p-[12px_2.8rem]  md:p-[12px_28px] border-[2px] border-[#5599f9] bg-[#5599f9] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:bg-transparent inline">تعرف على الخدمة</button>
      </div>
    </header>
    <div class="about w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col md:flex-row justify-between items-center gap-[10px] lg:gap-[10%]">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#5599f9]">الرأي الطبي الثاني <span class="text-[#5599f9]">Second Opinion</span></h1>
        <p class="text-[18px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%] mb-[20px]">الرأي الطبي الثاني هو خدمة تقدمها منصة كلينيكير تتيح للمرضى الحصول على أراء واستشارات طبية ثانية بشأن مشكلاتهم الصحية للوصول للتشخيصات الدقيقة واقتراح خطط العلاج المناسبة لتحسين مستوى الصحة والنتائج الطبية الإيجابية، وذلك من خلال ربط المرضى بالأطباء والاستشاريين المتميزين من مختلف التخصصات الطبية.</p>
        <button @click="$router.push('/about')" class="justify-center items-center text-[#5599f9] text-[14px] p-[12px_3.1rem]  md:p-[12px_35px] border-[2px] border-[#5599f9] bg-[transparent] hover:bg-[#5599f9] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:text-[#fff] inline">اقرأ المزيد</button>
      </div>
      <img :src="require('@/image/2.jpg')" class="hidden md:block w-[270px] lg:w-[450px]" alt="">
    </div>
    <div class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
    <div class="doctors w-full m-auto text-center px-[30px] md:px-[50px] py-[60px] bg-[#f1f4f7] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)]">
      <img :src="require('@/image/2.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <h1 class="text-[32px] text-white mb-[20px] z-[2] relative after:absolute after:bottom-[-7px] after:right-[50%] after:translate-x-[50%] after:w-[70px] after:h-[3px] after:bg-[#5599f9]">قائمة الأطباء</h1>
      <div class="flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px] z-[2] relative">
        <div v-for="(doctor,index) in doctors" :key="index" class="p-[16px] m-[10px] w-full sm:w-[360px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="w-full flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="doctor.image == null ? require('@/image/person.png') : doctor.image" class="rounded-full w-[60px] h-[60px]" alt="">
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h2 class="text-[14px] text-[#4d4d4f]">{{doctor.first_name}} {{doctor.last_name}}</h2>
                <h1 class="text-[12px] text-[#5599f9]">{{ doctor.profession }}</h1>
              </div>
            </div>
            <div>
              <p class="text-[12px] text-[#212529] text-start">{{ doctor.bio }}</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[20px]"></i>
              <p class="text-[11px] text-[#212529]">{{ doctor.work_at }}</p>
            </div>
            <div  class="w-full flex justify-between item s-center mb-[10px]">
              <h1 @click="$router.push(`/doctor-details?q=${doctor.id}`)" class="text-[#60a899] text-[14px] opacity-[.5] hover:opacity-100 transition-all duration-[.6s] cursor-pointer">عرض الملف الشخصي</h1>
            </div>
          </div>
        </div>
      </div>
      <button @click="$router.push('/doctors')" class="justify-center items-center text-[#5599f9] text-[14px] p-[12px_3.1rem]  md:p-[12px_35px] border-[2px] border-[#5599f9] bg-[transparent] hover:bg-[#5599f9] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:text-[#fff] inline">المزيد من الأطباء</button>
    </div>
    <div class="ourservies text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px]">
      <h1 class="text-[32px] mb-[60px]">خدماتنا</h1>
      <div  class="mb-[60px]">
          <div class="flex flex-wrap justify-center items-center gap-[50px_20px]">
            <div @click="!$localStorage.token ? $router.push('/login') : form_services = true, services_name = 'Second medical opinion'" class="group cursor-pointer h-auto relative hover:bg-[#5599f9] sm:w-[360px] hover:border-[#5599f9]  transition-all duration-300 p-[5px] w-full border-[3px] border-[#5599f9] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center Z-[2]">
              <div class="relative p-[130px_10px]  after:absolute after:top-0 after:left-0  rounded-[20px] overflow-hidden after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] w-full h-full">
                <h1 class="text-[20px] text-[#FFF] group-hover:text-[white] transition-all duration-300 z-[9] relative">قراءة التقارير  الطبية <br> وتقديم الرأي الطبي الثاني.</h1>
                <img :src="require('@/image/same-opinion-background.jpg')" class="absolute top-0 left-0 w-full h-full object-cover Z-[3]" alt="">      
              </div>
            </div>
            <div @click="!$localStorage.token ? $router.push('/login')  : form_services = true, services_name = 'Bookanappointment'" class="group cursor-pointer h-auto relative hover:bg-[#5599f9] sm:w-[360px] hover:border-[#5599f9] transition-all duration-300 p-[5px] w-full border-[3px] border-[#5599f9] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center Z-[2]">
              <div class="relative p-[130px_10px] after:absolute after:top-0 after:left-0 rounded-[20px] overflow-hidden after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] w-full h-full">
                <h1 class="text-[20px] text-[#FFF] group-hover:text-[white] transition-all duration-300 z-[9] relative">حجز موعد مع الاستشاري <br> لمناقشة الرأي الطبي الثاني.</h1>
                <img :src="require('@/image/booking-doctor-background.jpeg')" class="absolute top-0 left-0 w-full h-full object-cover Z-[3]" alt="">      
                </div>
            </div>
            <div @click="!$localStorage.token ? $router.push('/login')  : form_services = true, services_name = 'Conductingexaminations'" class="group cursor-pointer h-auto relative hover:bg-[#5599f9] sm:w-[360px] hover:border-[#5599f9] transition-all duration-300 p-[5px] w-full border-[3px] border-[#5599f9] rounded-[20px] bg-white flex gap-[20px] flex-col justify-center items-center text-center Z-[2]">
              <div class="relative p-[130px_10px] after:absolute after:top-0 after:left-0 rounded-[20px] overflow-hidden after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] w-full h-full">
                <h1 class="text-[20px] text-[#FFF] group-hover:text-[white] transition-all duration-300 z-[9] relative">إجراء المزيد من الفحوصات والأشعة <br> لتأكيد الرأي الطبي الثاني.</h1>
                <img :src="require('@/image/xray-background.jpg')" class="absolute top-0 left-0 w-full h-full object-cover Z-[3]" alt="">      
              </div>
            </div>
          </div>  
        </div>
    </div>
    <div class="comments w-full  m-auto text-center px-[30px] md:px-[100px] py-[60px] bg-[#f1f4f7] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)]">
      <img :src="require('@/image/19.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <h1 class="text-[32px] mb-[60px] relative text-[white] z-[2]">تجارب عملاؤنا معنا</h1>
      <div  ref="swiper1" class="swiper mb-[30px] relative z-[2]">
          <div class="swiper-wrapper flex">
            <div v-for="(review,index) in reviews" :key="index" class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide !justify-start sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
              <div class="flex justify-start items-start flex-col gap-[20px]">
                <div class="flex justify-start items-center gap-[20px]">
                  <img :src="review.image == null ? require('@/image/person.png') : review.image" class="rounded-full w-[60px] h-[60px]" alt="">
                  <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                    <h1 class="text-[16px] text-[#5599f9]">{{ review.user.first_name }} {{ review.user.last_name }}</h1>
                  </div>
                </div>
                <div>
                  <p class="text-[12px] text-[#212529] text-start">{{ review.review }}</p>
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="23" viewBox="0 0 38 23" fill="none" class="absolute top-[20px] left-[20px]">
                <path d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z" fill="#5599f9"/>
              </svg>
            </div>
          </div>
          <div class="swiper-pagination"></div>
            <div class="swiper-button-prev text-[#5599f9] md:left-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
            <div class="swiper-button-next text-[#5599f9] md:right-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
        </div>
      <button @click="$router.push('/review')" class="justify-center items-center text-[#5599f9] text-[14px] p-[12px_3.1rem]  md:p-[12px_35px] border-[2px] border-[#5599f9] bg-[transparent] hover:bg-[#5599f9] rounded-[10px] m-auto md:m-0 cursor-pointer transition ease-in hover:text-[#fff] inline">المزيد من التجارب</button>
    </div>
    <div class="Did you know ?">
      <div class=" w-full grid sm:grid-cols-[50%_50%] justify-center items-start">
        <div class="relative z-[1] w-[100%] grid gap-[20px] text-start p-[40px_60px]">
          <h1 class="leading-[.8] text-[32px] text-[#4d4d4f]">هل تعلم ؟</h1>
          <p class="leading-[1.8] text-[16px] text-[#4d4d4f]">نشرت دراسة تم إجراؤها من قبل باحثون في جامعة جون هوبكنز الأمريكية إلى أن الأخطاء الطبية تأتي في المرتبة الثالثة ضمن الأسباب الرئيسية المسببة للوفاة في الولايات المتحدة، حيث ذكرت الدراسة في تقديراتها إلى أن أكثر من 250 ألف أمريكي يموتون كل عام بسبب الأخطاء الطبية.</p>
          <button @click="$router.push('/about')" class="bg-[#5599f9] p-[12px_40px] rounded-[22px_0] w-[max-content] leading-[1.2] text-[14px] text-[#fff]">اقرأ المزيد</button>
        </div>
        <div class="w-full h-full row-[1] md:row-auto"><img class="w-full h-full object-cover sm:rounded-[0px_0px_100px_0px]" :src="require('@/image/15.jpg')" alt=""></div>
      </div>
    </div>
    <div class="ourcompanys w-full m-auto text-center px-[30px] md:px-[100px] py-[60px] bg-[#f1f4f7]">
      <h1 class="text-[32px] mb-[10px]">شركائنا</h1>
      <div  ref="swiper2" class="swiper mb-[60px]">
          <div class="swiper-wrapper flex">
            <div v-for="(parent,index) in parents" :key="index" class="group cursor-pointer swiper-slide sm:w-[360px] flex] rounded-[15px] transition ease-in relative">
              <div class="flex w-full h-full justify-center items-center gap-[20px]">
                  <img :src="parent" class=" w-[200px] h-[200px]" alt="">
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
            <div class="swiper-button-prev text-[#5599f9] md:left-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
            <div class="swiper-button-next text-[#5599f9] md:right-[50px] top-[50%] opacity-[.6] hover:opacity-[1]"></div>
        </div>
    </div>
    <div class="z-[999999] fixed top-[20px] mb-[20px] left-0 w-full h-screen bg-[rgba(0,_0,_0,_0.67)]  flex justify-center items-center" :class="{'hidden': form_services == false, 'block': form_services == true}" @click.self="form_services = false">
          <div class="bg-white rounded-xl p-[20px] max-h-[90%] overflow-y-auto w-[95%] md:w-[70%] lg:w-[50%] ">
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

import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import axios from 'axios';

export default {
  name: 'HomePage',
  data() {
    return {
      window_width: window.innerWidth,
      doctors: [],
      parents: [],
      reviews: [],
      form_services: false,
      services_name: '',
    }
  },
  components:{
    SecondopinionPage,
    BookanappointmentPage,
    ConductingexaminationsPage
  },
  mounted() {
    for(let i = 1; i < 3; i++){
      new Swiper(eval('this.$refs.swiper'+i), {
        modules: [Navigation, Pagination],
        loop: true,
        breakpoints: {
        1024: {
        slidesPerView: 3,
        spaceBetween: 20
      
        },
        460: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        300: {
        slidesPerView: 1,
        spaceBetween: 10
        }
        },
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
  }
  },
  created(){

    axios.get(`${process.env.VUE_APP_URL}/api/get_reviews`)
      .then((response) => { 
          this.reviews = []
          this.reviews = response.data.reviews 
          console.log(response.data.reviews)
      }).catch(function (error) {
          console.log(error.message)
      });

      axios.get(`${process.env.VUE_APP_URL}/api/doctor/home`)
      .then((response) => { 
          this.doctors = []
          this.doctors = response.data.doctors
          console.log(response.data.doctors)
      }).catch(function (error) {
          console.log(error.message)
      }); 

      axios.get(`${process.env.VUE_APP_URL}/api/get_partners`)
      .then((response) => { 
          this.parents = []
          this.parents = response.data.partners
          console.log(this.parents)
      }).catch(function (error) {
          console.log(error.message)
      });
  },
}
</script>

<style scoped lang="scss">

.swiper {
  width: 100%;
  --swiper-navigation-size: 40px !important; 
  --swiper-navigation-sides-offset: 40px !important;
  --swiper-pagination-color: #5599f9;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}


div{
  .swiper{
    --swiper-theme-color: rgb(1, 98, 93);
    --swiper-navigation-size: 30px;
    --swiper-theme-color: rgb(1, 98, 93);
  }
}
</style> 