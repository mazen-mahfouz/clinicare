<template>
  <div class="ContacusPage">
    <header
      class="w-full px-[30px] md:px-[80px] pt-[170px] pb-[100px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.79)]"
    >
      <img
        :src="require('@/image/contactus-header.png')"
        class="absolute top-0 left-0 w-full h-full object-cover"
        alt=""
      />
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">
          سؤال وجواب
        </h1>
        <p class="text-[20px] md:text-[22px] font-[400] mb-[30px]">
          بامكانك التواصل مع الدكتور ليعطيك ال تقرير المناسب
        </p>
      </div>
    </header>
    <div
      class="w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[20px] mt-[60px] flex flex-col justify-center items-center gap-[10px]"
    >
      <div
        class="w-full text-start p-[50px_30px] md:p-[50px_100px] shadow-[0px_0px_80px_0px_#0000002e] rounded-xl"
      >
        <h1 class="text-[32px] font-[700] mb-[20px] text-[#272727]">
          {{ my_report.title }}
        </h1>
        <p class="text-[16px] font-[400] mb-[30px] text-[#272727]">
          {{ my_report.desc }}
        </p>
        <div class="w-full text-start p-[px_30px] mb-[20px]">
          <i class="text-[16px] font-[700] mb-[20px] text-[#37475e]"
            >"" {{ my_report.notes }} ""</i
          >
          <h1 class="text-[14px] my-[20px] text-[#37475e]">
            - هل لدي المريض مرض عائليي خطير :
            <b>{{ my_report.family_related }}</b>
          </h1>
          <h1 class="text-[14px] mb-[20px] text-[#37475e]">
           - هل سبق وتم وتنويم المريض من قبل في المستشفى :
            <b>{{ my_report.sleep_on_hospital }}</b>
          </h1>
          <h1 class="text-[14px] mb-[20px] text-[#37475e]">
           - هل أجريت عمليات جراحية من قبل؟ : <b>{{ my_report.surgery }}</b>
          </h1>
        </div>
        <div class="preview-img-list">
          <img
            class="preview-img-item"
            v-for="(item, index) in items"
            :key="index"
            :src="item.src"
            @click="$photoswipe.open(index, items)"
          />
        </div>
        <div v-if="massage !== null" class="line w-full h-[0.3px] bg-[rgba(203,203,203,0.53)]"></div>
        <div v-if="massage !== null"
          class="p-[30px_25px] pb-[55px] mt-[20px] group cursor-pointer flex pl-[30px] rounded-[15px] bg-[#ffffffbf] hover:bg-white transition ease-in relative"
        >
          <div class="flex justify-start items-start flex-col gap-[20px]">
            <div class="flex justify-start items-center gap-[20px]">
              <img
                :src="
                  doctor_detiles.image == null ? require('@/image/person.png'): doctor_detiles.image"
                class="rounded-full w-[60px] h-[60px]"
                alt=""
              />
              <div class="flex flex-col gap-[8px] mt-[5px] text-start">
                <h1 class="text-[16px] text-[#5599f9]">
                  {{ doctor_detiles.first_name }} {{ doctor_detiles.last_name }}
                </h1>
              </div>
            </div>
            <div>
              <div
                v-html="massage"
                id="answer_massage"
                class="text-[#212529] text-start"
              ></div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="23"
            viewBox="0 0 38 23"
            fill="none"
            class="absolute top-[20px] left-[20px]"
          >
            <path
              d="M30.4713 -6.58184e-07C29.26 -7.64075e-07 28.1438 0.666999 27.6213 1.702L24.2488 8.234C23.9163 8.878 23.75 9.568 23.75 10.281L23.75 20.7C23.75 21.965 24.8187 23 26.125 23L35.625 23C36.9312 23 38 21.965 38 20.7L38 11.5C38 10.235 36.9313 9.2 35.625 9.2L30.875 9.2L33.3213 4.462C34.39 2.415 32.8463 -4.50555e-07 30.4713 -6.58184e-07ZM6.72125 -2.73448e-06C5.51 -2.84037e-06 4.39375 0.666997 3.87125 1.702L0.498746 8.234C0.16625 8.878 1.17426e-06 9.568 1.11193e-06 10.281L2.01072e-07 20.7C9.04826e-08 21.965 1.06875 23 2.375 23L11.875 23C13.1812 23 14.25 21.965 14.25 20.7L14.25 11.5C14.25 10.235 13.1813 9.2 11.875 9.2L7.125 9.2L9.57125 4.462C10.64 2.415 9.09625 -2.52685e-06 6.72125 -2.73448e-06Z"
              fill="#5599f9"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="this.$localStorage.activeUser == 'دكتور' && massage == null " class="w-full max-w-[1400px] m-auto px-[30px] md:px-[100px] py-[20px] flex flex-col justify-center items-center gap-[10px]">
      <div class="w-full text-start p-[50px_30px] md:p-[50px_100px] shadow-[0px_0px_80px_0px_#0000002e] rounded-xl">
        <form
          @submit.prevent="answerform()"
          class="space-y-4 md:space-y-6 px-[10px] md:px-[30px] pt-[40px]"
          action="#"
        >
          <div>
            <wysiwyg v-model="myHTML" />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            رد الدكتور
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import axios from "axios";
export default {
  name: "ReportPage",
  data() {
    return {
      massage: null,
      myHTML: "",
      my_report: [],
      doctor_detiles: [],
      items: [],
    };
  },
  components: {
    // ValidationProvider, // ValidationObserver,
  },
  created() {
    if(!this.$localStorage.token){
      this.$router.push('/login')
    }
    console.log()
    const headers = { Authorization: `Bearer ${this.$localStorage.token}` };
    axios
      .get(
        `${process.env.VUE_APP_URL}/api/report/my_reports/${this.$route.query.q}`,
        { headers }
      )
      .then((response) => {
        this.my_report = response.data.report;
        this.doctor_detiles = response.data.report.doctor;
        this.massage = this.my_report.doctor_comment,
        console.log(this.massage)
        this.items = this.my_report.files;
        this.items.forEach((value) => {
          Object.assign(value, 
          {w: 1024},
          { h:  768,},
          {src: `${process.env.VUE_APP_URL}/files/${value.path}`}
          );
            console.log(this.items)
        });
        console.log(this.my_report);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  },
  methods: {
    answerform() {
      if (this.myHTML !== "") {
        console.log(this.myHTML);
        const addData = { answer: this.myHTML };
        const headers = {
          Authorization: `Bearer ${this.$localStorage.token}`,
        };
        axios.post(`${process.env.VUE_APP_URL}/api/report/${this.$route.query.q}/answer`, addData,{ headers } ).then((response) => { 
          console.log(response)
          const headers = { Authorization: `Bearer ${this.$localStorage.token}` };
          axios
      .get(
        `${process.env.VUE_APP_URL}/api/report/my_reports/${this.$route.query.q}`,
        { headers }
      )
      .then((response) => {
        this.my_report = response.data.report;
        this.doctor_detiles = response.data.report.doctor;
        this.massage = this.my_report.doctor_comment,
        console.log(this.massage)
        this.items = this.my_report.files;
        this.items.forEach((value) => {
          Object.assign(value, 
          {w: 1024},
          { h:  768,},
          {src: `${process.env.VUE_APP_URL}/files/${value.path}`}
          );
            console.log(value)
        });
        console.log(this.my_report);
      })
      .catch(function (error) {
        console.log(error.message);
      });

        }).catch((err) => {
            console.log(err);
        });
      }
    },
  },
};
</script>
<style lang="scss">
#answer_massage {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: revert;
    font-size: revert;
  }
}
.preview-img-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.preview-img-item {
  margin: 5px;
  width: 120px;
  height: 110px;
}
.editr--content[contenteditable=true]:empty:before{
  content: attr('sdsd') !important
}
</style>
