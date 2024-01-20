<template>
    <div class="ReviewsformPage bg-[white] text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[60px] py-[60px]">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-[28px] mb-[20px]"> اعطنا رائيك في الخدمات </h1>
    
      <ValidationObserver v-slot="{ handleSubmit }">
        <form  @submit.prevent="handleSubmit(onSubmit)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px] text-start" action="#">
              <ValidationProvider name="review" rules="required" :custom-messages="{required: 'اكتب تقييمك !'}" v-slot="{ errors }">
                <div>
                  <label for="review" class="block mb-2 text-sm font-medium text-gray-900 "> اكتب تقييمك</label>
                  <input type="text" v-model="review_value" name="first_name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="التقييم" required="">
                  <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                </div>
              </ValidationProvider>
            <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ارسل</button>
        </form>
    </ValidationObserver>
    </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import axios from 'axios';

export default {
  name: 'ReviewsformPage',
  data() {
    return {
      review_value: '',
      form_services: true,
    };
  },
  components:{
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    onSubmit(){
      const addData = {
        review:  this.review_value,
        stars: 4.5
      }     
      const headers = { 
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.$localStorage.token}`
       };
  
      axios.post(`${process.env.VUE_APP_URL}/api/reviews`, addData, { headers })
      .then(()=>{
        this.$router.push('/')
      });
    },
  }
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

#conn-input-file {
  width: 100%;
  background: linear-gradient(90deg, rgb(2, 0, 36) 0%, #a5003dbf 100%, rgba(9, 9, 121, 0.2973564426) 100%);
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 4px;
  transition: .5s;

  &:hover{
    background: linear-gradient(90deg, rgb(2, 0, 36) 0%, #410018bf 100%, rgba(9, 9, 121, 0.2973564426) 100%);
  }

  input {
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 999999;
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
  }
}

</style> 