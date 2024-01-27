<template>
  <div class="ContacusPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[130px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)]">
      <img :src="require('@/image/contactus-header.png')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[10vw] md:text-[50px] font-[700] mb-[20px]">تواصل معنا</h1>
      </div>
    </header>
    <div class="contact-us w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[60px] flex flex-col justify-center items-center gap-[10px] ">
        <div class="flex flex-col justify-center items-center gap-[10px]">
          <img :src="require('@/image/logo-aboutpage.png')" class="w-[200px] lg:w-[250px] m-auto" alt="">
        </div>
        <ValidationObserver v-slot="{ handleSubmit }" class="w-full md:w-[70%] xl:w-[40%] m-auto mt-[30px] flex flex-col gap-[20px]">
          <form  @submit.prevent="handleSubmit(onSubmit)" action="" class="w-full flex flex-col gap-[20px]">
            <ValidationProvider name="Name" rules="required" :custom-messages="{required: 'اكتب اسمك !'}" v-slot="{ errors }">
              <span class="text-[red] font-bold text-[12px] m-[10px] block">{{ errors[0] }}</span>
              <input type="text" v-model="Name" name="name" id="name" class="w-full p-[5px_15px] h-[50px] transition-all duration-[.6s] border border-[#2b17ac95]  hover:border-[#2C17AC] rounded-[12px] placeholder:text-[#8D8D8D] text-[rgba(0,_0,_0,_0.80)] hover:bg-gradient-to-r from-[#fff9e4ac] to-white text-[15px] font-bold outline-none"  placeholder="الاسم الأول والثاني" >
            </ValidationProvider>
            <ValidationProvider name="number" rules="required|numeric" :custom-messages="{required: 'اكتب  رقم التليفون !', numeric: 'اكتب ارقام فقط!'}" v-slot="{ errors }">
              <span class="text-[red] font-bold text-[12px] m-[10px] block">{{ errors[0] }}</span>
              <input type="phone" name="number" v-model="number" id="number" class="w-full p-[5px_15px] h-[50px] transition-all duration-[.6s] border border-[#2b17ac95] hover:border-[#2C17AC] rounded-[12px] placeholder:text-[#8D8D8D] text-[rgba(0,_0,_0,_0.80)] text-[15px] hover:bg-gradient-to-r from-[#fff9e4ac] to-white font-bold outline-none"  placeholder="رقم الجوال" >
            </ValidationProvider>
            <ValidationProvider name="massage" rules="required" :custom-messages="{required: 'اكتب رسالة !'}" v-slot="{ errors }">
              <span class="text-[red] font-bold text-[12px] m-[10px] block">{{ errors[0] }}</span>
              <textarea name="massage" v-model="massage" id="massage" class="w-full p-[15px_15px] transition-all duration-[.6s] border border-[#2b17ac95] hover:border-[#2C17AC] rounded-[12px] placeholder:text-[#8D8D8D] text-[rgba(0,_0,_0,_0.80)] text-[15px] hover:bg-gradient-to-r from-[#fff9e4ac] to-white font-bold outline-none" placeholder="نص الرسالة" cols="30" rows="10"></textarea>
            </ValidationProvider>
            <button type="submit" class="w-[70%]   p-[5px_20px] m-auto mt-[30px] h-[60px] transition-all duration-[.6s] border border-[#2b17aca7] hover:border-[#2C17AC] rounded-[12px] text-[#2C17AC] hover:text-[white] hover:bg-[#2C17AC]  text-[18px] font-bold outline-none">إرسال</button>
          </form>
        </ValidationObserver>
    </div>
  </div>
</template>

<script>

import { extend } from 'vee-validate';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import axios from 'axios';

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max']
});

export default {
  name: 'ContacusPage',
  data() {
    return {
      Name: '',
      number: '',
      massage: ''
    };
  },
  components:{
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    onSubmit () {

      const addData = {
        name:  this.Name,
        phone:  this.number,
        message: this.massage,
      }

      axios.post(`${process.env.VUE_APP_URL}/api/contact/send_message`, addData)
      .then(()=>{
            alert('sad')
      });
    }
  }
}
</script>

<style scoped lang="scss">

</style> 