<template>
  <div class="DoctorsdetailsPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[130px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/doctors-header.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[10vw] md:text-[50px] font-[700] mb-[20px]">معلومات الأطبيب</h1>
      </div>
    </header>
    <div class="DoctorsdetailsPage text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[40px] py-[60px] bg-[#f1f4f7]">
      <h1 class="text-[40px] font-[700] text-[#5599f9] mb-[20px]">الملف الشخصي للمعالج</h1>
      <div class="DoctorsdetailsPage w-full ">
      <div class="w-full flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px]">
        <div class="p-[35px] m-[10px] w-full sm:w-[600px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-start gap-[20px]">
              <img :src="details_doctor.image == null ? require('@/image/person.png') : details_doctor.image" class="rounded-full w-[90px] h-[90px]" alt="">
              <div class="flex flex-col gap-[15px] mt-[5px] text-start">
                <h2 class="text-[17px] text-[#4d4d4f]">{{details_doctor.first_name}} {{details_doctor.last_name}}</h2>
                <h1 class="text-[17px] text-[#5599f9]">{{details_doctor.profession}}</h1>
              </div>
            </div>
            <div>
              <p class="text-[16px] text-[#212529] text-start">{{ details_doctor.bio }}</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-building text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">{{ details_doctor.work_at }}</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-certificate text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">{{ details_doctor.degree }}</p>
            </div>
            <div  class="w-full flex justify-between items-center mb-[10px]">
            </div>
          </div>
        </div>    
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'DoctorsdetailsPage',
  data() {
    return {
      details_doctor: [],
    };
  },
  created(){
      console.log(this.$route.query.q)
      axios.get(`${process.env.VUE_APP_URL}/api/doctor/${this.$route.query.q}`)
      .then((response) => { 
          this.details_doctor = response.data.doctor 
          console.log(response.data.doctor)
      }).catch(function (error) {
          console.log(error.message)
    });
  },
}
</script>

<style scoped lang="scss">
</style> 