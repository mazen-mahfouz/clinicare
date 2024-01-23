.<template>
  <div class="My_all_servicesPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[190px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/same-opinion-background.jpg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[14vw] md:text-[80px] font-[700] mb-[20px]">الاستشارات</h1>
        <p class="text-[18px] md:text-[14px] md:w-[70%] m-auto font-[400] mb-[30px]">الاستشارات التي اختارني الموقع للرد عليها</p>
        <button @click="$router.push('/contact-us')" class="flex justify-center items-center text-[16px] p-[15px_40px]  md:p-[17px_40px] border border-[#5599f9] rounded-[10px] m-auto cursor-pointer transition ease-in hover:bg-[#5599f9] ">تواصل معنا</button>
      </div>
    </header>
    <div class="My_all_servicesPage text-center w-full max-w-[1400px] m-auto px-[30px] md:px-[40px] py-[60px]">
      <h1 class="text-[40px] font-[700] text-[#5599f9] mb-[50px]">جميع الخدمات الخاصة بي </h1>
      <h1 class="text-[20px] font-[700] text-[#555555] mb-[30px] ">جميع الاستشارات :  </h1>
      <div class="flex justify-center items-center flex-wrap gap-[20px] mb-[30px]">
        <h1 v-if="my_reports.length == 0" class="text-[28px] font-[700] mb-[20px] text-[#c7c7c7]">لايوجد</h1>
        <div v-for="(my_report,index) in my_reports" :key="index" class="w-full text-start p-[50px_30px] sm:w-[400px] lg:w-[460px] shadow-[0px_0px_80px_0px_#0000002e] rounded-xl">
          <h1 class="text-[28px] font-[700] mb-[20px] text-[#272727]">{{ my_report.title }}</h1>
          <p class="text-[14px] font-[400] mb-[30px] text-[#272727]">{{ my_report.desc }}</p>
          <button @click="$router.push(`/report?q=${my_report.id}`)" type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">عرض الاستشارة</button>
        </div>
      </div>
      <h1 class="text-[20px] font-[700] text-[#555555] mt-[120px] mb-[30px]">جميع التقارير والاشعات الدي فعلتها :  </h1>
      <div class="flex justify-center items-center flex-wrap gap-[20px] mb-[30px]">
        <h1 v-if="my_reservations.length == 0" class="text-[28px] font-[700] mb-[20px] text-[#c7c7c7]">لايوجد</h1>
        <div v-for="(my_reservation,index) in my_reservations" :key="index" class="w-full text-start p-[50px_30px] sm:w-[400px] lg:w-[460px] shadow-[0px_0px_80px_0px_#0000002e] rounded-xl">
          <h1 class="text-[28px] font-[700] mb-[20px] text-[#272727]"> انا اريد عمل {{ my_reservation.test.type }}  <span class='text-[#5599f9]'>{{ my_reservation.test.name }}</span> </h1>
          <h1 class="text-[14px] my-[20px] text-[#37475e]">
            - في {{ my_reservation.hospital.type }}  :
            <b>ابو النمرس</b>
          </h1>
          <h1 class="text-[14px] my-[20px] text-[#37475e]">
            - عنوانها  :
            <b>{{ my_reservation.hospital.address }}</b>
          </h1>
          <h1 class="text-[14px] my-[20px] text-[#37475e]">
            - في مدينة  :
            <b>{{ my_reservation.hospital.city }}</b>
          </h1>
          <h1 class="text-[14px] mb-[20px] text-[#37475e]">
           {{ my_reservation.hospital.bio }}
          </h1>
          <h1 class="text-[14px] my-[20px] text-[#37475e]" v-if="my_reservation.status == 'تم الحجز'">
            - في توقيت  :
            <b>{{ my_reservation.date == null ? 'لم يتم تحديدة' : my_reservation.date }}</b>
          </h1>
          <h1 class="font-bold text-[32px] mt-[35px]" :class="{'!text-[red]': my_reservation.status == 'مرفوض', '!text-[#dbdbdb]': my_reservation.status == 'انتظار', '!text-[green]': my_reservation.status == 'تم الحجز'}">{{ my_reservation.status }}</h1>
        </div>
      </div>
      <h1 class="text-[20px] font-[700] text-[#555555] mt-[120px] mb-[30px]">جميع حجوزات مواعيد مع الاستشارين :  </h1>
      <div class="flex justify-center items-center flex-wrap gap-[20px] mb-[30px]">
        <h1 v-if="my_meetings.length == 0" class="text-[28px] font-[700] mb-[20px] text-[#c7c7c7]">لايوجد</h1>
        <div v-for="(my_meeting,index) in my_meetings" :key="index" class="w-full text-start p-[50px_30px] sm:w-[400px] lg:w-[460px] shadow-[0px_0px_80px_0px_#0000002e] rounded-xl">
          <h1 class="text-[28px] font-[700] mb-[20px] text-[#272727]"> طلب عمل مقابلة في التخصص  <span class='text-[#5599f9]'>{{ my_meeting.profession }}</span> </h1>
          <div v-if="$localStorage.activeUser == 'دكتور'">
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  المريض  :
              <b>{{ my_meeting.user.first_name }} {{ my_meeting.user.last_name }}</b>
            </h1>
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  جنس المريض  :
              <b>{{ my_meeting.user.gender }}</b>
            </h1>
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  تفاصيل المشكلة :
              <b>{{ my_meeting.notes }}</b>
            </h1>
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  موعد المقابلة :
              <b>{{ my_meeting.start_at }}</b>
            </h1>
            <button :disabled="my_meeting.status == 'pending'" @click="go_meeting(my_meeting.doctor.first_name, my_meeting.doctor.last_name, my_meeting.meeting_id)" type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">دخول الميتينج </button>
            <h1 class="font-bold text-[32px] mt-[35px]" :class="{'!text-[#dbdbdb]': my_meeting.status == 'pending', '!text-[green]': my_meeting.status == 'approved'}">{{ my_meeting.status }}</h1>
          </div>
          <div v-if="$localStorage.activeUser == 'مريض'">
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  الدكتور  :
              <b>{{ my_meeting.doctor ? my_meeting.doctor.first_name + ' ' +  my_meeting.doctor.last_name :  'لم يتم تحديدة بعد'}}</b>
            </h1>
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  جنس الدكتور  :
              <b>{{ my_meeting.doctor ? my_meeting.doctor.gender : 'لم يتم تحديدة بعد' }}</b>
            </h1>
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  شهادات الدكتور :
              <b>{{ my_meeting.doctor ? my_meeting.doctor.degree : 'لم يتم تحديدة بعد' }}</b>
            </h1>
            <h1 class="text-[14px] my-[20px] text-[#37475e]">
              -  موعد المقابلة :
              <b>{{  my_meeting.doctor ? my_meeting.start_at : 'لم يتم تحديدة بعد'}}</b>
            </h1>
            <h1 class="font-bold text-[32px] mt-[35px] mb-[20px]" :class="{'!text-[#dbdbdb]': my_meeting.status == 'pending', '!text-[green]': my_meeting.status == 'approved'}">{{ my_meeting.status }}</h1>
            <button :disabled="my_meeting.status == 'pending'" @click="go_meeting(my_meeting.user.first_name, my_meeting.user.last_name, my_meeting.meeting_id)" type="submit" class="w-full text-white bg-[#5599f9] hover:bg-[#4b89e1] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">دخول الميتينج </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'My_all_servicesPage',
  data() {
    return {
      my_reports: [],
      my_reservations: [],
      my_meetings: [],
    };
  },
  created(){
    if(!this.$localStorage.token){
      this.$router.push('/login')
    }
    const headers = { 
        Authorization: `Bearer ${this.$localStorage.token}`
    };
    axios.get(`${process.env.VUE_APP_URL}/api/report/my_reports` , {headers})
    .then((response) => { 
        this.my_reports = response.data.reports 
    }).catch(function (error) {
        console.log(error.message)
    });

    axios.get(`${process.env.VUE_APP_URL}/api/reservation/my_reservations` , {headers})
    .then((response) => { 
        this.my_reservations = response.data.reservation 
    }).catch(function (error) {
        console.log(error.message)
    });

    axios.get(`${process.env.VUE_APP_URL}/api/get_meetings` , {headers})
    .then((response) => { 
        this.my_meetings = response.data.meetings 
        console.log(response)
    }).catch(function (error) {
        console.log(error.message)
    });
  },
  methods:{
    go_meeting(first, last, id){
      this.$store.state.meeting_details = [{
        name: first + ' ' + last,
        meeting_id: id
      }]
      this.$router.push('/meeting')
    },
  }
}
</script>

<style scoped lang="scss">

</style> 
