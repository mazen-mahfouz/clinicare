<template>
  <div class="DoctorsPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[120px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/doctors-header.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">كل الاطباء</h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">جميع الاطباء وتخصصاتهم</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#5599f9] ">تواصل معنا</button>
      </div>
    </header>
    <div class="DoctorsPage text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[40px] py-[60px] bg-[#f1f4f7]">
      <div class="search and fillter md:px-[60px] w-full flex flex-col sm:flex-row gap-[10px] justify-center items-center sm:justify-between">
        <div class="relative  w-full sm:w-[250px]">
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <input type="text" @keyup="searsh()" v-model="searsh_value" id="simple-search" class="block w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ابحث عن الدكتور" required="">
            </div>
            <div class=" relative w-full sm:w-[250px]">
            <div class="relative w-full">
              <div ref="mytoogle_specialties" class="cursor-pointer flex items-center justify-between border p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full" @click="toogle_specialties == false? toogle_specialties = true : toogle_specialties = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_specialties == null ? 'كل التخصصات' : select_specialties}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_specialties}"></div>
              <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_specialties, hidden: !toogle_specialties}">
                <li v-for="(specialties, index) in specialtiess" :key="specialties" @click="selectOF_specialties(specialties, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{specialties}} <span class="press">اختر</span></li>
              </ul>
            </div>
           </div>
        </div>
      <div class="doctors w-full ">
      <div class="w-full flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px]">
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
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DoctorsPage',
  data(){
    return{
        specialtiess: ['كل التخصصات'],
        select_specialties: 'كل التخصصات',
        toogle_specialties : false,

        doctors: [],
        searsh_value: null,
    }
  },
  created(){

    axios.get(`${process.env.VUE_APP_URL}/api/report/create`)
    .then((response) => { 
        response.data.professions.forEach((value) => {
            this.specialtiess.push(value.name);
        });
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
  },
  methods: {
     selectOF_specialties(x){
      this.select_specialties = x;

      if(this.searsh_value == ''){
        this.searsh_value = null
      }
      if(this.select_specialties == 'كل التخصصات'){
        this.select_specialties = null
      }

      let timeout_searsh = null;
      clearTimeout(timeout_searsh);

      timeout_searsh = setTimeout(() => {
        axios.get(`${process.env.VUE_APP_URL}/api/doctor/search/${this.searsh_value}&${this.select_specialties}`)
        .then((response) => { 
            this.doctors = []
            this.doctors = response.data.doctors
            console.log(response.data.doctors)
        }).catch(function (error) {
            console.log(error.message)
        });
      }, 500);
     },
     searsh(){
      if(this.searsh_value == ''){
        this.searsh_value = null
      }
      if(this.select_specialties == 'كل التخصصات'){
        this.select_specialties = null
      }

      let timeout_searsh = null;
      clearTimeout(timeout_searsh);

      timeout_searsh = setTimeout(() => {
        axios.get(`${process.env.VUE_APP_URL}/api/doctor/search/${this.searsh_value}&${this.select_specialties}`)
        .then((response) => { 
            this.doctors = []
            this.doctors = response.data.doctors
            console.log(response.data.doctors)
        }).catch(function (error) {
            console.log(error.message)
        });
      }, 500);

     }
  },
  mounted() {
      let self = this;
    document.addEventListener('click', (e)=> {
        if (self.$refs.mytoogle_specialties !==undefined && self.$refs.mytoogle_specialties.contains(e.target)===false) {
          self.toogle_specialties = false;
        }
    })
  }, 
}
</script>

<style scoped lang="scss">
 .item_select{
  position: relative;

  .press{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
    font-size: 12px;
    color: rgb(168, 168, 168);
    display: none;
  }
  &:hover{
    .press{
      display: block !important;
    }
  }
  
}
</style> 