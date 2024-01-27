<template>
  <div class="DoctorsdetailsPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[130px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/doctors-header.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[10vw] md:text-[50px] font-[700] mb-[20px]">معلوماتي الشخصية</h1>
      </div>
    </header>
    <div class="DoctorsdetailsPage text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[40px] py-[60px] bg-[#f1f4f7]">
      <h1 class="text-[40px] font-[700] text-[#5599f9] mb-[20px]">الملف الشخصي </h1>
      <div class="DoctorsdetailsPage w-full ">
      <div class="w-full flex flex-wrap justify-center items-center py-[30px] gap-[10px] mb-[30px]">
        <div class="p-[35px] m-[10px] w-full sm:w-[600px] flex pl-[30px] rounded-[15px] bg-white">
          <div class="flex justify-start items-start flex-col gap-[40px]">
            <div class="flex justify-start items-start gap-[40px]">
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
              <i class="fa-solid fa-envelope  text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">{{ details_doctor.email }}</p>
            </div>
            <div class="flex justify-start items-center gap-[10px]">
              <i class="fa-solid fa-phone  text-[#5599f9] text-[25px]"></i>
              <p class="text-[13px] text-[#212529]">{{ details_doctor.phone }}</p>
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
              <button @click="open_edit()" class="bg-[linear-gradient(180deg,_#4F94FC_0%,_#035FE9_100%)] m-auto hover:bg-[linear-gradient(180deg,#2C68C1_0%,#04347B_100%)] transition-all duration-[.5s] text-[17px] w-[80%] text-[white] py-[10px] px-[16px] rounded-md cursor-pointer">تعديل الملف الشصي</button>
            </div>
          </div>
          <div class="z-[999999] absolute top-0 left-0 overflow-auto w-full h-full bg-[rgba(0,_0,_0,_0.67)]  flex justify-center items-center" :class="{'hidden': form_services == false, 'block': form_services == true}" @click.self="form_services = false">
            <div class="bg-white rounded-xl p-[20px] w-[90%]">
              <ValidationObserver v-slot="{ handleSubmit }">
                  <form  @submit.prevent="handleSubmit(register_doctor)" class="space-y-4 text-start md:space-y-6 px-[10px] md:px-[30px] pt-[40px]" action="#">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-[30px]">تعديل حساب <span class="text-[#5599f9]">كدكتور</span></h1>
                        <div class="w-full grid sm:grid-cols-2 gap-[20px]">
                          <ValidationProvider name="first_name" rules="required" :custom-messages="{required: 'اكتب اسمك الاول !'}" v-slot="{ errors }">
                            <div>
                              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">الاسم الاول</label>
                              <input type="text" v-model="frist_name_doctor" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="محمد" required="">
                              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider name="last_name" rules="required" :custom-messages="{required: 'اكتب الاسم التاني !'}" v-slot="{ errors }">
                            <div>
                              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">الاسم التاني</label>
                              <input type="text" v-model="last_name_doctor" name="last_name" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="احمد" required="">
                              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </div>
                        <ValidationProvider name="Name" rules="required|email" :custom-messages="{required: 'اكتب البريد الالكتروني !', email: 'اكتب البريد الالكتروني !'}" v-slot="{ errors }">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">بريدك الالكتروني</label>
                          <input type="email" v-model="email_doctor" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider name="bio" rules="required" :custom-messages="{required: 'اكتب وصفك !'}" v-slot="{ errors }">
                          <label for="bio" class="block mb-2 text-sm font-medium text-gray-900 ">وصف عنك</label>
                          <input type="text" v-model="bio_doctor" name="bio" id="bio" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="اخصائي روماتيزم و مفاصل و الطب الطبيعي و التاهيل رئيس الجمعية المصرية للروماتيزم والتاهيل..." required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider name="number" rules="required|numeric|min:7" :custom-messages="{required: 'اكتب رقمك !'}" v-slot="{ errors }">
                          <label for="number" class="block mb-2 text-sm font-medium text-gray-900 ">رقمك</label>
                          <input type="number" v-model="number_doctor" name="number" id="number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="0109645563" required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <div class="w-full grid sm:grid-cols-2 gap-[20px]">
                          <ValidationProvider name="degree" rules="required" :custom-messages="{required: 'اكتب الشهادة الجامعيه  !'}" v-slot="{ errors }">
                            <div>
                              <label for="degree" class="block mb-2 text-sm font-medium text-gray-900 ">الشهادة</label>
                              <input type="text" v-model="degree_doctor" name="degree" id="degree" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="من كليه طب عين شمس" required="">
                              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider name="placeWork" rules="required" :custom-messages="{required: 'اكتب مكان العمل !'}" v-slot="{ errors }">
                            <div>
                              <label for="placeWork" class="block mb-2 text-sm font-medium text-gray-900 ">مكان العمل</label>
                              <input type="text" v-model="placeWork_doctor" name="placeWork" id="placeWork" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="السعودية مركز الرياض التخصصي" required="">
                              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </div>
                        <div class="w-full grid sm:grid-cols-2 gap-[20px]">
                          <div class=" relative w-full">
                            <div class="relative w-full">
                              <div ref="mytoogle_gender_doctor" class="cursor-pointer flex items-center justify-between border p-4 py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500  w-full" @click="toogle_gender_doctor == false? toogle_gender_doctor = true : toogle_gender_doctor = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_gender_doctor}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_gender_doctor}"></div>
                                <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_gender_doctor, hidden: !toogle_gender_doctor}">
                                  <li v-for="(gender_doctor, index) in gender_doctor" :key="gender_doctor" @click="selectOF_gender_doctor(gender_doctor, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{gender_doctor}} <span class="press">اختر</span></li>
                                </ul>
                              </div>
                            </div>
                            <div class=" relative w-full">
                              <div class="relative w-full">
                                <div ref="mytoogle_specialties" class="cursor-pointer flex items-center justify-between border p-4 py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 w-full" @click="toogle_specialties == false? toogle_specialties = true : toogle_specialties = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_specialties}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_specialties}"></div>
                                <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_specialties, hidden: !toogle_specialties}">
                                  <li v-for="(specialties, index) in specialtiess" :key="specialties" @click="selectOF_specialties(specialties, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{specialties}} <span class="press">اختر</span></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">تعديل</button>
                    </form>
              </ValidationObserver>
            </div>
          </div>
        </div>    
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import axios from 'axios';

export default {
  name: 'DoctorsdetailsPage',
  data() {
    return {
      details_doctor: [],
      form_services: false,

      frist_name_doctor: '',
      last_name_doctor: '',
      email_doctor: '',
      pass_doctor: '',
      bio_doctor: '',
      degree_doctor: '',
      placeWork_doctor: '',
      number_doctor: '',

      gender_doctor: ['ذكر', 'انثي'],
      select_gender_doctor: 'ذكر',
      toogle_gender_doctor : false,

      specialtiess: [],
      select_specialties: '',
      toogle_specialties : false,
    };
  },
  components:{
    ValidationProvider,
    ValidationObserver
  },
  created(){
      const headers = { 
        Authorization: `Bearer ${this.$localStorage.token}`
      };

      axios.get(`${process.env.VUE_APP_URL}/api/report/create`)
      .then((response) => { 
          response.data.professions.forEach((value) => {
              this.specialtiess.push(value.name);
          });
          this.select_specialties = response.data.professions[0].name
      }).catch(function (error) {
          console.log(error.message)
      });

      axios.get(`${process.env.VUE_APP_URL}/api/doctor/doctor/profile`, {headers})
      .then((response) => { 
          console.log(response.data)
          this.details_doctor = response.data.doctor 
        }).catch(function (error) {
          console.log(error.message)
      });
  },
  methods: {
    open_edit(){
      this.form_services = true
      const headers = { 
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.$localStorage.token}`
       };
      axios.get(`${process.env.VUE_APP_URL}/api/doctor/edit`, {headers})
      .then((response) => { 
        console.log(response)
        this.frist_name_doctor = response.data.doctor.first_name,
        this.last_name_doctor = response.data.doctor.last_name,
        this.email_doctor = response.data.doctor.email,
        this.bio_doctor = response.data.doctor.bio,
        this.degree_doctor = response.data.doctor.degree,
        this.placeWork_doctor = response.data.doctor.work_at,
        this.number_doctor = response.data.doctor.phone
        this.select_gender_doctor = response.data.doctor.gender,
        this.select_specialties = response.data.doctor.profession
          
      }).catch(function (error) {
          console.log(error.message)
      });
    },
    register_doctor () {    
      const addData = { 
          first_name:  this.frist_name_doctor,
          last_name:  this.last_name_doctor,
          email: this.email_doctor,
          gender: this.select_gender_doctor,
          degree: this.degree_doctor,
          bio: this.bio_doctor,
          phone: Number(this.number_doctor),
          profession: this.select_specialties,
          work_at: this.placeWork_doctor,
       };
        const headers = {
          Authorization: `Bearer ${this.$localStorage.token}`,
        };
        axios.post(`${process.env.VUE_APP_URL}/api/doctor/update/${Object.values(JSON.parse( this.$localStorage.person_details_user))[0]}`, addData,{ headers } ).then((response) => { 
          console.log(response)
          console.log('gamed')

        }).catch((err) => {
            console.log(err);
        });
    },
     selectOF_gender_doctor(x){
      this.select_gender_doctor = x;
     },
     selectOF_specialties(x){
      this.select_specialties = x;
     },
  },
  mounted() {
    let self = this;
    document.addEventListener('click', (e)=> {
        if (self.$refs.mytoogle_gender_doctor !==undefined && self.$refs.mytoogle_gender_doctor.contains(e.target)===false) {
          self.toogle_gender_doctor = false;
        }
        if (self.$refs.mytoogle_specialties !==undefined && self.$refs.mytoogle_specialties.contains(e.target)===false) {
          self.toogle_specialties = false;
        }
    })
  },
}
</script>

<style scoped lang="scss">
</style> 