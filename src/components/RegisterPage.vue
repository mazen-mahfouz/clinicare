-<template>
  <div class="w-full">
    <section class="bg-gray-50 py-[120px] mt-[50px]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0">
              <div class="space-y-4 md:space-y-6 py-[40px] pt-[0]">
                  <!-- <img class="w-[200px] m-auto mb-[40px]" src="../image/logo-aboutpage.png" alt="logo"> -->
                  <div class="w-full flex justify-center items-center">
                    <button @click="change_person = 'client'" class=" w-full h-full justify-center items-center text-[16px] hover:bg-[#5599f9] text-[white] py-[20px] border cursor-pointer transition ease-in " :class="{'bg-[#5599f9]': change_person == 'client', 'bg-[#5599f982]': change_person == 'doctor'}">مريض</button>
                    <button @click="change_person = 'doctor'" class="w-full h-full justify-center items-center text-[16px] hover:bg-[#5599f9] text-[white] py-[20px] border m-auto md:m-0 cursor-pointer transition ease-in " :class="{'bg-[#5599f9]': change_person == 'doctor', 'bg-[#5599f982]': change_person == 'client'}">دكتور</button>
                  </div>
                  <ValidationObserver v-slot="{ handleSubmit }" v-if="change_person == 'client'">
                    <form  @submit.prevent="handleSubmit(register_user)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px]" action="#">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-[30px]">انشاء حساب <span class="text-[#5599f9]">كمريض</span></h1>
                        <div class="w-full grid sm:grid-cols-2 gap-[20px]">
                          <ValidationProvider name="first_name" rules="required" :custom-messages="{required: 'اكتب اسمك الاول !'}" v-slot="{ errors }">
                            <div>
                              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">الاسم الاول</label>
                              <input type="text" v-model="frist_name_clint" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="محمد" required="">
                              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                          <ValidationProvider name="last_name" rules="required" :custom-messages="{required: 'اكتب الاسم التاني !'}" v-slot="{ errors }">
                            <div>
                              <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 ">الاسم التاني</label>
                              <input type="text" v-model="last_name_clint" name="last_name" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="احمد" required="">
                              <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                            </div>
                          </ValidationProvider>
                        </div>
                        <ValidationProvider name="Name" rules="required|email" :custom-messages="{required: 'اكتب البريد الالكتروني !', email: 'اكتب البريد الالكتروني !'}" v-slot="{ errors }">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">بريدك الالكتروني</label>
                          <input type="email" v-model="email_clint" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider name="Name" rules="required|min:8" :custom-messages="{required: 'اكتب كلمة السر !', min: 'لا تقل عن 8 احروف '}" v-slot="{ errors }">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">كلمة المرور</label>
                            <input type="password" v-model="pass_clint" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="">
                            <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                          <div class=" relative w-full sm:w-[200px]">
                            <div class="relative w-full">
                              <div ref="mytoogle_gender_clint" class="cursor-pointer flex items-center justify-between border p-4 py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500  w-full" @click="toogle_gender_clint == false? toogle_gender_clint = true : toogle_gender_clint = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_gender_clint}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_gender_clint}"></div>
                                <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_gender_clint, hidden: !toogle_gender_clint}">
                                  <li v-for="(gender_clint, index) in gender_clint" :key="gender_clint" @click="selectOF_gender_clint(gender_clint, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{gender_clint}} <span class="press">اختر</span></li>
                                </ul>
                              </div>
                            </div>
                        <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">تسجيل الدخول</button>
                        <p class="text-sm font-light text-gray-500 ">
                          تمتلك حساب بالفعل قم <router-link to="/login" class="font-medium text-primary-600 hover:underline">بتسجيل الدخول</router-link>
                        </p>
                    </form>
                </ValidationObserver>
                <ValidationObserver v-slot="{ handleSubmit }" v-if="change_person == 'doctor'">
                  <form  @submit.prevent="handleSubmit(register_doctor)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px]" action="#">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-[30px]">انشاء حساب <span class="text-[#5599f9]">كدكتور</span></h1>
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
                        <ValidationProvider name="Name" rules="required|min:8" :custom-messages="{required: 'اكتب كلمة السر !', min: 'لا تقل عن 8 احروف '}" v-slot="{ errors }">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">كلمة المرور</label>
                            <input type="password" v-model="pass_doctor" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="">
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
                        <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">تسجيل الدخول</button>
                        <p class="text-sm font-light text-gray-500 ">
                          تمتلك حساب بالفعل قم <router-link to="/login" class="font-medium text-primary-600 hover:underline">بتسجيل الدخول</router-link>
                        </p>
                    </form>
                </ValidationObserver>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<script>

// import { extend } from 'vee-validate';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import axios from 'axios';

export default {
  name: 'RegisterPage',
  data() {
    return {
      change_person: 'client',
      frist_name_clint: '',
      last_name_clint: '',
      email_clint: '',
      pass_clint: '',

      frist_name_doctor: '',
      last_name_doctor: '',
      email_doctor: '',
      pass_doctor: '',
      bio_doctor: '',
      degree_doctor: '',
      placeWork_doctor: '',
      number_doctor: '',

      gender_clint: ['ذكر', 'انثي'],
      select_gender_clint: 'ذكر',
      toogle_gender_clint : false,

      gender_doctor: ['ذكر', 'انثي'],
      select_gender_doctor: 'ذكر',
      toogle_gender_doctor : false,
      
      specialtiess: [],
        select_specialties: '',
        toogle_specialties : false,
    };
  },
  created(){
    axios.get(`${process.env.VUE_APP_URL}/api/report/create`)
    .then((response) => { 
        response.data.professions.forEach((value) => {
            this.specialtiess.push(value.name);
        });
        this.select_specialties = response.data.professions[0].name
    }).catch(function (error) {
        console.log(error.message)
    });
  },
  components:{
    ValidationProvider,
    ValidationObserver
  },
  mounted() {

    if(this.$localStorage.token){
      this.$router.push('/')
    }

    let self = this;
    document.addEventListener('click', (e)=> {
        if (self.$refs.mytoogle_gender_clint !==undefined && self.$refs.mytoogle_gender_clint.contains(e.target)===false) {
          self.toogle_gender_clint = false;
        }
        if (self.$refs.mytoogle_gender_doctor !==undefined && self.$refs.mytoogle_gender_doctor.contains(e.target)===false) {
          self.toogle_gender_doctor = false;
        }
        if (self.$refs.mytoogle_specialties !==undefined && self.$refs.mytoogle_specialties.contains(e.target)===false) {
          self.toogle_specialties = false;
        }
    })
  },
  methods: {
    register_user () {
      const addData = {
          first_name:  this.frist_name_clint,
          last_name:  this.last_name_clint,
          email: this.email_clint,
          password: this.pass_clint,
          gender: this.select_gender_clint,
      }       
      axios.post(`${process.env.VUE_APP_URL}/api/auth/register/user`, addData)
      .then(()=>{
            this.$router.push('/login');
      });
    },
    register_doctor () {
      const addData = {
          first_name:  this.frist_name_doctor,
          last_name:  this.last_name_doctor,
          email: this.email_doctor,
          password: this.pass_doctor,
          gender: this.select_gender_doctor,
          degree: this.degree_doctor,
          bio: this.bio_doctor,
          phone: Number(this.number_doctor),
          profession: this.select_specialties,
          work_at: this.placeWork_doctor,
      }       
      axios.post(`${process.env.VUE_APP_URL}/api/auth/register/doctor`, addData)
      .then(()=>{
            this.$router.push('/login');
      });
    },
    selectOF_gender_clint(x){
      this.select_gender_clint = x;
     },
     selectOF_gender_doctor(x){
      this.select_gender_doctor = x;
     },
     selectOF_specialties(x){
      this.select_specialties = x;
     },
  }
}
</script>

<style  lang="scss">
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
