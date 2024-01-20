-<template>
  <div class="w-full">
    <section class="bg-gray-50 py-[120px] mt-[50px]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
              <div class="space-y-4 md:space-y-6 py-[40px] pt-[0]">
                  <!-- <img class="w-[200px] m-auto mb-[40px]" src="../image/logo-aboutpage.png" alt="logo"> -->
                  <div class="w-full flex justify-center items-center">
                    <button @click="change_person = 'client'" class=" w-full h-full justify-center items-center text-[16px] hover:bg-[#5599f9] text-[white] py-[20px] border cursor-pointer transition ease-in " :class="{'bg-[#5599f9]': change_person == 'client', 'bg-[#5599f982]': change_person == 'doctor'}">مريض</button>
                    <button @click="change_person = 'doctor'" class="w-full h-full justify-center items-center text-[16px] hover:bg-[#5599f9] text-[white] py-[20px] border m-auto md:m-0 cursor-pointer transition ease-in " :class="{'bg-[#5599f9]': change_person == 'doctor', 'bg-[#5599f982]': change_person == 'client'}">دكتور</button>
                  </div>
                  <ValidationObserver v-slot="{ handleSubmit }" v-if="change_person == 'client'">
                    <form  @submit.prevent="handleSubmit(login_user)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px]" action="#">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-[30px]">تسجيل الدخول إلى حسابك <span class="text-[#5599f9]">كمريض</span></h1>
                      <h1 ref="error_login" class="hidden text-[14px] font-bold leading-tight tracking-tight text-center text-[red] mb-[30px]">اكتب البيانات بشكل صحيح !!</h1>
                        <ValidationProvider name="Name" rules="required|email" :custom-messages="{required: 'اكتب البريد الالكتروني !', email: 'اكتب البريد الالكتروني !'}" v-slot="{ errors }">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">بريدك الالكتروني</label>
                          <input type="email" v-model="email_clint" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider name="Name" rules="required|alpha|min:8" :custom-messages="{required: 'اكتب كلمة السر !', min: 'لا تقل عن 8 احروف '}" v-slot="{ errors }">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">كلمة المرور</label>
                            <input type="password" v-model="pass_clint" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="">
                            <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">تسجيل الدخول</button>
                        <p class="text-sm font-light text-gray-500 ">
                          لا تملك حسابا حتى الآن؟ <router-link to="/register" class="font-medium text-primary-600 hover:underline"> تسجيل حساب</router-link>
                        </p>
                    </form>
                </ValidationObserver>
                <ValidationObserver v-slot="{ handleSubmit }" v-if="change_person == 'doctor'">
                    <form  @submit.prevent="handleSubmit(login_doctor)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px]" action="#">
                      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl mb-[30px]">تسجيل الدخول إلى حسابك <span class="text-[#5599f9]">ك طبيب </span> </h1>
                      <h1 ref="error_login" class="hidden text-[14px] font-bold leading-tight tracking-tight text-center text-[red] mb-[30px]">اكتب البيانات بشكل صحيح !!</h1>
                        <ValidationProvider name="email_doctor" rules="required|email" :custom-messages="{required: 'اكتب البريد الالكتروني !', email: 'اكتب البريد الالكتروني !'}" v-slot="{ errors }">
                          <label for="email_doctor" class="block mb-2 text-sm font-medium text-gray-900 ">بريدك الالكتروني</label>
                          <input type="email" v-model="email_doctor" name="email_doctor" id="email_doctor" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider name="password" rules="required|alpha|min:8" :custom-messages="{required: 'اكتب كلمة السر !', min: 'لا تقل عن 8 احروف '}" v-slot="{ errors }">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">كلمة المرور</label>
                            <input type="password" v-model="pass_doctor" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="">
                            <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">تسجيل الدخول</button>
                        <p class="text-sm font-light text-gray-500 ">
                          لا تملك حسابا حتى الآن؟ <router-link to="/register" class="font-medium text-primary-600 hover:underline"> تسجيل حساب</router-link>
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
  name: 'LoginPage',
  data() {
    return {
      change_person: 'client',
      email_clint: '',
      pass_clint: '',
      email_doctor: '',
      pass_doctor: '',
    };
  },
  components:{
    ValidationProvider,
    ValidationObserver
  },
  mounted(){
    if(this.$localStorage.token){
      this.$router.push('/')
    }
  },  
  methods: {
    login_user () {
      const addData = {
          email: this.email_clint,
          password: this.pass_clint,
      }       
      axios.post(`${process.env.VUE_APP_URL}/api/auth/login/user`, addData)
      .then((response)=>{
          this.$localStorage.token = response.data.authorisation.token;
          this.$localStorage.activeUser = 'مريض';
          this.$localStorage.person_details_user = JSON.stringify(response.data.user)
          this.$router.push('/');
          this.$refs.error_login.classList.remove('block')
          this.$refs.error_login.classList.add('hidden')
        }).catch(err => {
            console.log(err)
            this.$refs.error_login.classList.remove('hidden')
            this.$refs.error_login.classList.add('block')
            // localStorage.setItem("activeUser", false);
        })
    },
    login_doctor () {
      const addData = {
          email: this.email_doctor,
          password: this.pass_doctor,
      }       
      axios.post(`${process.env.VUE_APP_URL}/api/auth/login/doctor`, addData)
      .then((response)=>{
        this.$localStorage.token = response.data.authorisation.token;
        this.$localStorage.activeUser = 'دكتور';
        this.$localStorage.person_details_user = JSON.stringify(response.data.doctor)
        console.log( response.data.doctor)
        this.$router.push('/');
        }).catch(err => {
            console.log(err)
            this.$refs.error_login.classList.remove('hidden')
            this.$refs.error_login.classList.add('block')
            localStorage.setItem("activeUser", false);
      })
    },
  }
}
</script>

<style  lang="scss">

</style>
