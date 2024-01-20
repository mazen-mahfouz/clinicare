<template>
  <div class="BookanappointmentPage ">
    <div class="BookanappointmentPage  text-center w-full max-w-[1400px] m-auto px-[10px] md:px-[60px] py-[60px]">
      <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-[28px] mb-[20px]">نموذج طلب إجراء الفحوصات والأشعة</h1>
      <p class="text-[14px] text-gray-700 mb-[30px]">أحياناً يتطلب الحصول على رأي طبي ثاني إجراء المزيد من الفحوصات والأشعة والتحاليل المختبرية التي تساعد الاستشاري على إعطاء تقرير مفصل عن الحالة الصحية للمريض وتقديم خطط العلاج المقترحة التي تعمل على تحسين الظروف الصحية للمريض.</p>
    
      <ValidationObserver v-slot="{ handleSubmit }"  v-show="details_form == false">
        <form  @submit.prevent="handleSubmit(details_form1)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px] text-start" action="#">
            <div class=" relative w-full">
                <div class="relative w-full">
                  <div ref="mytoogle_specialties" class="cursor-pointer flex items-center justify-between border p-4 py-[10px] text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 w-full" @click="toogle_specialties == false? toogle_specialties = true : toogle_specialties = false"><p class="pr-[35px] md:pr-[20px] capitalize">{{select_specialties}}</p> <img :src="require('@/image/angle-down.png')" class="w-[21px]" :class="{'-rotate-90': toogle_specialties}"></div>
                  <ul class="absolute top-[103%] left-0 z-50 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" :class="{'block': toogle_specialties, hidden: !toogle_specialties}">
                    <li v-for="(specialties, index) in specialtiess" :key="specialties" @click="selectOF_specialties(specialties, index)" class="item_select capitalize cursor-pointer py-[12px] px-[18px] text-[14px] flex items-center hover:bg-[#eeeeee] hover:text-black">{{specialties}} <span class="press">اختر</span></li>
                  </ul>
                </div>
            </div>
            <ValidationProvider name="details_problem" rules="required" :custom-messages="{required: 'اكتب تفاصيل المشكة  !'}" v-slot="{ errors }">
              <div class="my-[20px]">
                <label for="details_problem" class="block mb-2 text-sm font-medium text-gray-900 ">اكتب تفاصيل المشكة </label>
                <input type="text" v-model="details_problem_clint" name="details_problem" id="details_problem" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="بطني وجعاني احس بالدوران" required="">
                <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required|image" ref="provider" name="upload_file" :custom-messages="{required: ' ارفع الملفات !'}" v-slot="{ errors }">
              <div class="w-full md:w-[100%] relative mt-[30px]">
                  <div id="conn-input-file" class="w-full">
                    <div class="flex flex-col gap-[10px] justify-center items-start">
                      <span v-for="(upload_file, index) in upload_file_clint" :key="index"> {{ index + ' - '+ upload_file.name}}</span>
                      <span v-if="upload_file_clint.length == 0">ارفق الملفات</span>
                    </div>
                    <input type="file" ref="input_file" @change="handleFileChange" name="upload_file" id="add-music-file" multiple accept="jpg/*">
                    <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
            <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ارسل</button>
        </form>
    </ValidationObserver>
    <ValidationObserver v-slot="{ handleSubmit }" v-if="details_form == true">
        <div class="w-full text-start p-[30px_30px]">
          <h1 class="text-[18px] font-[700] mb-[20px] text-[#272727]">عن طريق البنك : <b>0022222200222</b></h1>
          <h1 class="text-[18px] font-[700] mb-[20px] text-[#272727]">عن طريق فوري : <b>0102222223444</b></h1>
          <h1 class="text-[18px] font-[700] mb-[20px] text-[#272727]">عن طريق ابل باي : <b>024444444444</b></h1>
        </div>
        <form  @submit.prevent="handleSubmit(onSubmit)" class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[20px] text-start" action="#">
            <ValidationProvider rules="required|image" ref="provider2" name="upload_file" :custom-messages="{required: ' ارفع التحويل !'}" v-slot="{ errors }">
              <div class="w-full md:w-[100%] relative mt-[10px]">
                  <div id="conn-input-file" class="w-full ">
                    <span> {{ upload_file_clint_transfers == false? 'ارفق التحولات' : upload_file_clint_transfers.name}}</span>
                    <input type="file" ref="input_file2" @change="handleFileChange2" name="upload_file" id="add-music-file" accept="jpg/*">
                    <span class="text-[red] font-bold text-[12px] m-[5px] my-[20px] block">{{ errors[0] }}</span>
                  </div>
              </div>
            </ValidationProvider>
            <button type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ارسل</button>
        </form>
    </ValidationObserver>
    </div>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import axios from 'axios';

export default {
  name: 'BookanappointmentPage',
  data() {
    return {
      upload_file_clint_transfers: false,
      details_problem_clint: '',
      details_form: false,

      files: [],
      upload_file_clint: [],

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
  let self = this;
  document.addEventListener('click', (e)=> {
      if (self.$refs.mytoogle_specialties !==undefined && self.$refs.mytoogle_specialties.contains(e.target)===false) {
        self.toogle_specialties = false;
      }
  })
  },
  methods: {
    details_form1 () {
      this.details_form = true;
    },
    onSubmit(){
        const addData = {
            notes: this.details_problem_clint,
            profession: this.select_specialties,
            transaction: this.upload_file_clint_transfers,
            price : 300,
            file: this.upload_file_clint
        }     
        const headers = { 
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.$localStorage.token}`
        };
    
        axios.post(`${process.env.VUE_APP_URL}/api/create_meeting`, addData, { headers })
        .then(()=>{
              this.$router.push('/My-all-servicesPage');
       
        });
    },
    selectOF_specialties(x){
      this.select_specialties = x;
     },
     async handleFileChange(e) {
      const { valid } = await this.$refs.provider.validate(e);
      if (valid) {
        
        const files = this.$refs.input_file.files;
        this.upload_file_clint = files
        // for (var i = 0; i < files.length; i++) {
        //   this.upload_file_clint.push(files[i])
        // }
      }else{
        this.upload_file_clint = []
      }
    },
    async handleFileChange2(e) {
      const { valid } = await this.$refs.provider2.validate(e);
      if (valid) {
        this.upload_file_clint_transfers = this.$refs.input_file2.files[0]
      }else{
        this.upload_file_clint_transfers = false
      }
    }
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