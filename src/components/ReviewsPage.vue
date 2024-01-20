<template>
  <div class="ReviewsPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/doctors-header.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">اراء العملاء</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">اراء عملاء كلينيكير للرأي الطبي الثاني </p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#5599f9] ">تواصل معنا</button>
      </div>
    </header>
    <div class="ReviewsPage text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[40px] py-[60px] bg-[#f1f4f7]">
      <div class="reviews w-full ">
        <div class="w-full flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px]">
          <div v-for="(review,index) in reviews" :key="index"  class="p-[30px_25px] pb-[55px] group cursor-pointer swiper-slide sm:w-[360px] flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative">
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
          <div :class="{'hidden': form_services == false, 'block': form_services == true}" @click.self="form_services = false" class="ReviewsformPage z-[999999] fixed top-0 left-0 overflow-auto w-full h-full bg-[rgba(0,_0,_0,_0.67)]  flex justify-center items-center">
            <ReviewsformPage v-if="form_services"/>
          </div>
          <button @click="$localStorage.token ? form_services = true : $router.push('/login')"  class="w-full mt-[50px] text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">اضف تعليقا</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ReviewsformPage from './ReviewsformPage.vue';
export default {
  name: 'ReviewsPage',
  data(){
    return{
      reviews: '',
      form_services: false,
    }
  },
  components: {
    ReviewsformPage,
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
  },
}
</script>

<style scoped lang="scss">
</style> 