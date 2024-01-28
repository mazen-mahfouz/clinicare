-<template>
  <div class="w-full">
    <section class="bg-gray-50 py-[170px] mt-[50px]">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
              <div class="space-y-4 md:space-y-6 py-[40px] pt-[0]">
                  <ValidationObserver v-slot="{ handleSubmit }">
                    <form  @submit.prevent="handleSubmit(login_user)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px]" action="#">
                      <p class="text-[14px] font-bold leading-tight tracking-tight text-center text-gray-400 mb-[30px]">تاكد من بريدك الالكتروني بعد الضغط علي ارسال</p>
                      <h1 ref="error_login" class="hidden text-[14px] font-bold leading-tight tracking-tight text-center text-[red] mb-[30px]">اكتب البيانات بشكل صحيح !!</h1>
                        <ValidationProvider name="Name" rules="required|email" :custom-messages="{required: 'اكتب البريد الالكتروني !', email: 'اكتب البريد الالكتروني !'}" v-slot="{ errors }">
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">بريدك الالكتروني</label>
                          <input type="email" v-model="email_clint" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="" required="">
                          <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                        </ValidationProvider>
                        <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ارسال</button>
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
      email_clint: '',
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
      }       
      axios.post(`${process.env.VUE_APP_URL}/api/auth/login/user`, addData)
      .then((response)=>{
        if(response){
          this.$router.push('/');
        }
        }).catch(err => {
            console.log(err)
            this.$refs.error_login.classList.remove('hidden')
            this.$refs.error_login.classList.add('block')
            // localStorage.setItem("activeUser", false);
        })
    },
  }
}
</script>

<style  lang="scss">

</style>
