-<template>
  <div id='nav' ref="navbar" class="z-[5] w-full fixed top-0 left-0 transition-all duration-[.6s] ">
    <div class="w-full flex justify-between items-center gap-[30px] md:gap-[3%] xl:gap-[12%] py-[10px] px-[20px] lg:px-[50px] xl:px-[80px]">
      <div id="logo">
        <router-link to="/" class="flex justify-center md:flex-col lg:flex-row items-center gap-[5px]">
          <img :src="require('@/image/logo.png')" class="w-[130px] md:w-[160px]" alt="">
        </router-link>
      </div>
      <div id="side-menu" class="z-[4] w-full h-screen flex flex-col-reverse md:flex-row md:justify-between items-center gap-[40px] md:gap-[20px] lg:gap-[60px] pt-[60px] pb-[30px] md:py-0 md:h-auto bg-[#171717] fixed left-0 md:static text-center transition-all duration-500 overflow-y-auto md:overflow-visible md:bg-transparent" :class="{'top-0': menu == true, '-top-[150%]': menu == false}">
          <div id="links-pages">
            <ul class="text-[20px] md:text-[14px] 2xl:text-[17px] flex flex-col md:flex-row gap-[20px] lg:gap-[40px] font-[600]">
              <li @click="menu = false, show == false ? show = true : show = false , notificationHandler()" class="md:hidden text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]">
                <button  class="text-[18px] outline-none rounded relative"  >
                  <i class="fa-solid fa-bell"></i>
                  <span class="text-[#5496f3] absolute top-[-5px] right-[-10px] text-[15px]">{{count_notification}}</span>
                </button>
              </li>
              <li @click="menu = false" class="text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/" class="opacity-[.6] hover:opacity-[1]">الرئيسة</router-link></li>
              <li @click="menu = false" class="text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/about" class="opacity-[.6] hover:opacity-[1]">من نحن</router-link></li>
              <li @click="menu = false" class="text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/services" class="opacity-[.6] hover:opacity-[1]">الخدمات</router-link></li>
              <li @click="menu = false" class="text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/specialties" class="opacity-[.6] hover:opacity-[1]">التخصصات</router-link></li>
              <li @click="menu = false" class="text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/doctors" class="opacity-[.6] hover:opacity-[1]">الأطباء</router-link></li>
              <li @click="menu = false" class="text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/contact-us" class="opacity-[.6] hover:opacity-[1]">تواصل معنا</router-link></li>
              <li @click="menu = false" class="md:hidden text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link :to="this.$localStorage.activeUser == 'دكتور'? 'my-profile-doctor' : 'my-profile-user'" class="opacity-[.6] hover:opacity-[1]">ملف شخصي</router-link></li>
              <li @click="menu = false" class="md:hidden text-white relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#755eff] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/My-all-servicesPage" class="opacity-[.6] hover:opacity-[1]">الاستشارات</router-link></li>
              <li @click="menu = false, logout()" v-if="$localStorage.token" class="md:hidden hover:text-red-900 text-red-700 relative after:absolute after:bottom-[-10px] after:w-[0%] after:h-[1px] after:left-[50%] after:translate-x-[-50%] after:bg-[#810d09] hover:after:w-full after:transition-all duration-[.6s]"><router-link to="/not-found" class="opacity-[.6] hover:opacity-[1]">تسجيل خروج</router-link></li>
            </ul>
          </div>
          <div class="group flex justify-center items-center gap-[8px] relative" v-if="token">
            <div class="flex flex-col justify-center text-white ">
              <h1 class="font-[700] text-center text-[20px] md:text-[14px] 2xl:text-[18px] ">{{  Object.values(JSON.parse( this.$localStorage.person_details_user))[1]}} {{ Object.values(JSON.parse( this.$localStorage.person_details_user))[2] }}</h1>
              <h2 class="font-[400] text-right text-[18px] md:text-[12px] lg:text-[15px] text-[#5599f9]">{{ this.$localStorage.activeUser }}</h2>
            </div>
              <img :src="Object.values(JSON.parse( this.$localStorage.person_details_user))[5] == null ? require('@/image/person.png') : Object.values(JSON.parse( this.$localStorage.person_details_user))[5]"  class="rounded-full w-[60px] h-[60px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px]" alt="">
              <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block" width="18" height="16" viewBox="0 0 23 16" fill="none">
                <path d="M20.5515 0.372836L1.81175 0.372836C0.382751 0.372836 -0.485498 1.68604 0.292309 2.69735L9.66218 14.9841C9.82532 15.1992 10.051 15.3764 10.3182 15.4992C10.5855 15.6219 10.8856 15.6863 11.1907 15.6863C11.4957 15.6863 11.7958 15.6219 12.0631 15.4992C12.3303 15.3764 12.556 15.1992 12.7191 14.9841L22.0709 2.69735C22.2474 2.46968 22.3469 2.20649 22.3591 1.93554C22.3712 1.66459 22.2955 1.39593 22.1399 1.15789C21.9843 0.919862 21.7546 0.721285 21.4751 0.583111C21.1955 0.444938 20.8764 0.372292 20.5515 0.372836Z" fill="#5599f9"/>
              </svg>
              <div class=" hidden group-hover:block group-hover:animate-[side_1s_ease-in-out] absolute left-[-8px] top-[80%] text-center afrer:w-0 after:h-0 after:absolute after:top-[14px] after:border-l-[6px] after:border-l-transparent after:border-b-[7px] after:border-b-[#FF9001] after:border-r-[6px] after:border-r-transparent after:left-[10px]">
                <ul class="flex flex-col justify-center items-center text-[14px] font-bold text-[#000000] bg-[#ffffff] mt-[20px] border border-[#2C17AC]">
                  <li @click="show == false ? show = true : show = false , notificationHandler()" class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white">
                  <button  class="text-[18px] outline-none rounded relative"  >
                  <i class="fa-solid fa-bell"></i>
                  <span class="text-[#5496f3] absolute top-[-5px] right-[-10px] text-[15px]">{{count_notification}}</span>
                  </button>
                  </li>
                  <li class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white"><router-link :to="this.$localStorage.activeUser == 'دكتور'? 'my-profile-doctor' : 'my-profile-user'">ملف شخصي</router-link></li>
                  <li class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white"><router-link to="/My-all-servicesPage">الاستشارات</router-link></li>
                  <li @click="menu = false, logout()" v-if="$localStorage.token" class="border border-[#2C17AC] w-full h-full p-[16px_14px] cursor-pointer transition-all duration-[.6s] hover:bg-[#2C17AC] hover:text-white">تسجيل خروج</li>
                </ul>
              </div>
          </div>
          <div class="group flex justify-center items-center gap-[8px] relative" v-if="!token">
            <div id="boxs" class="flex justify-center items-center gap-[10px]">
              <div @click="menu = false" class="px-[18px] pt-[9px] cursor-pointer pb-[11px] text-[16px] md:text-[10px] lg:text-[14px] hover:bg-transparent  border border-[#5599f9] transition-all duration-[.6s]  rounded-[8px] bg-[#5599f9] shadow-[0px_5px_12px_0px_#5599f9]  flex justify-center items-center text-center"> <router-link to="/login" class="opacity-[1] !text-[#fff]">تسجيل الدخول </router-link></div>
              <div @click="menu = false" class="px-[18px] pt-[9px] cursor-pointer pb-[11px] text-[16px] md:text-[10px] lg:text-[14px] hover:bg-[#5599f9]   rounded-[8px] border border-[#5599f9] transition-all duration-[.6s]  flex justify-center items-center text-center hover:shadow-[0px_5px_12px_0px_#5599f9]">  <router-link to="/register" class=" opacity-[1] !text-[#fff]">حساب جديد</router-link></div>
            </div>
          </div>
      </div>
      <div id="menu-button" class="md:hidden" @click="menu == true ? menu = false : menu = true">
          <div>
            <button class="relative group z-[9]">
              <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 ring-opacity-30 duration-200">
                <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div class="bg-white md:bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left" :class="{'translate-x-10': menu}"></div>
                  <div class="bg-white md:bg-gray-800 h-[2px] w-7 rounded transform transition-all duration-300 delay-75" :class="{'translate-x-10': menu}"></div>
                  <div class="bg-white md:bg-gray-800 h-[2px] w-7 transform transition-all duration-300 origin-left delay-150" :class="{'translate-x-10': menu}"></div>

                  <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0" :class="{'translate-x-0': menu, 'w-12': menu}">
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300" :class="{'rotate-45': menu}"></div>
                    <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300" :class="{'-rotate-45': menu}"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
    </div>
    <div
      class="
        w-full
        h-full
        bg-gray-800 bg-opacity-90
        top-0
        overflow-y-auto overflow-x-hidden
        fixed
        sticky-0
        z-[99999]
        hidden
      "
      id="chec-div"
      ref="chec"
    >
      <div
        class="
          w-full
          absolute
          z-10
          right-0
          h-full
          overflow-x-hidden
          transform
          translate-x-full
          transition
          ease-in-out
          duration-700
        "
        id="notification"
        ref="notification"
      >
        <div
          class="
            w-full
            sm:w-[70%]
            md:w-[50%] 
            2xl:w-4/12
            bg-gray-50
            h-screen
            overflow-y-auto
            p-8
            absolute
            right-0
          "
          ref="notification_side"
        >
          <div class="flex items-center justify-between">
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-2xl
                font-semibold
                leading-6
                text-gray-800
                mb-[20px]
              "
            >
              الاشعارات
            </p>
            <button
              role="button"
              aria-label="close modal"
              class="
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                rounded-md
                cursor-pointer
              "
              @click="show == false ? show = true : show = false , notificationHandler()"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#4B5563"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#4B5563"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="w-full p-3 mt-4 gap-[20px] bg-white rounded flex" v-for="(notification,index) in notifications" :key="index">
            <div
              tabindex="0"
              aria-label="post icon"
              role="img"
              class="focus:outline-none w-8 h-8  border rounded-full border-gray-200 flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z"
                  fill="#4338CA"
                />
              </svg>
            </div>
            <div class="pl-3">
              <p tabindex="0" class="focus:outline-none text-sm leading-none mb-[5px]">
                {{notification.body}} <b  @click="show == false ? show = true : show = false , notificationHandler()"><router-link class="font-bold text-[#5599f9]" to="/My-all-servicesPage">الاستشارات</router-link></b>
              </p>
              <p
                tabindex="0"
                class="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
              >
                {{moment(notification.created_at).format("MMMM Do YYYY, h:mm:ss a")}}
              </p>
            </div>
          </div>
          <h2
            tabindex="0"
            class="
              focus:outline-none
              text-sm
              leading-normal
              pt-8
              border-b
              pb-2
              border-gray-300
              text-gray-600
            "
          >
            All Time  
          </h2>
          <div class="flex items-center justiyf-between">
            <hr class="w-full" />
            <p
              tabindex="0"
              class="
                focus:outline-none
                text-sm
                flex flex-shrink-0
                leading-normal
                px-3
                py-16
                text-gray-500
              "
            >
              Thats it for now :)
            </p>
            <hr class="w-full" />
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";
export default {
  name: 'NavPage',
  data(){
    return{
      menu: false,
      show: false,
      count_notification: '',
      notifications: [],
      moment: moment
    }
  },
  created(){
    console.log(process.env.VUE_APP_URL)
    if(this.$localStorage.token){
      const headers = { 
      Authorization: `Bearer ${this.$localStorage.token}`
      };
      axios.get(`${process.env.VUE_APP_URL}/api/notifications`, {headers})
      .then((response) => { 
        this.count_notification = response.data.notifications.length;
        this.notifications = response.data.notifications
        }).catch(function (error) {
          console.log(error.message)
      });
    }
      setInterval(() => {
        if(this.$localStorage.token){
          const headers = { 
          Authorization: `Bearer ${this.$localStorage.token}`
          };
          axios.get(`${process.env.VUE_APP_URL}/api/notifications`, {headers})
          .then((response) => { 
            this.count_notification = response.data.notifications.length;
            this.notifications = response.data.notifications
            }).catch(function (error) {
              console.log(error.message)
          });
        }
    }, 10000);
  },
  methods: {
    notificationHandler() {
      console.log(this.show)
      let notification = this.$refs.notification;
      let checdiv = this.$refs.chec;

      if (this.show == false) {
        notification.classList.add("translate-x-full");
        notification.classList.remove("translate-x-0");
        setTimeout(function () {
          checdiv.classList.add("hidden");
        }, 50);
      } else {
        setTimeout(function () {
          notification.classList.remove("translate-x-full");
          notification.classList.add("translate-x-0");
        }, 50);
        checdiv.classList.remove("hidden");
      }
    },
    logout(){
      this.$localStorage.token = '';
      this.$router.push('/login');
    }
  },
  computed: {
  token() {
    return this.$localStorage.token ;
    }
  },
  watch:{
    $route: function(){
        let self = this;
        console.log(this.$router.history.current.path)
        if(this.$router.history.current.path == '/login' || this.$router.history.current.path == '/register'){
          self.$refs.navbar.classList.add('!bg-[#000000d1]')
        }else{
          self.$refs.navbar.classList.remove('bg-[#000000d1]')
          self.$refs.navbar.classList.remove('!bg-[#000000d1]')
        }
        
        if(this.$router.history.current.path == '/meeting'){
          self.$refs.navbar.classList.add('hidden')
        }
      }
  },
  mounted(){

    let self = this;
    document.addEventListener('click', (e)=> {
      if (self.$refs.notification !==undefined && self.$refs.notification == e.target && this.show == true) {
        self.$refs.notification.classList.add("translate-x-full");
        self.$refs.notification.classList.remove("translate-x-0");
        self.$refs.chec.classList.add("hidden");
        this.show = false
      }
    })

    window.addEventListener("scroll", () =>{
      if(this.$router.history.current.path == '/login' || this.$router.history.current.path == '/register'){
        self.$refs.navbar.classList.add('!bg-[#000000d1]')
      }else{
        self.$refs.navbar.classList.remove('!bg-[#000000d1]')
        if(window.scrollY > 80){
          self.$refs.navbar.classList.add('!bg-[#000000d1]')
        }else{
          self.$refs.navbar.classList.remove('!bg-[#000000d1]')
        }
      }
          
      });

      if(this.$router.history.current.path == '/login' || this.$router.history.current.path == '/register'){
          this.$refs.navbar.classList.add('bg-[#000000d1]')
        }else{
          if(window.scrollY > 80){
            // console.log('window.scrollY > 80')
            self.$refs.navbar.classList.add('!bg-[#000000d1]')
          }else{
            console.log('window.scrollY > 80  else elses')
            self.$refs.navbar.classList.remove('!bg-[#000000d1]')
          }
        }
  },
}
</script>

<style scoped lang="scss">
.router-link-exact-active{
  color: #5599f9;
  opacity: 1;
}
</style>
