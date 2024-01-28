<template>
  <div class="AboutPage">
    <header class="w-full px-[30px] md:px-[80px] pt-[130px] pb-[80px] text-white relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.73)] ">
      <img :src="require('@/image/booking-doctor-background.jpeg')" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
      <div class="z-[2] relative text-center">
        <h1 class="text-[10vw] md:text-[40px] font-[700] mb-[20px]">عن المنصة</h1>
      </div>
    </header>
    <div class="about w-full m-auto px-[30px] md:px-[60px] py-[60px] flex flex-col lg:flex-row justify-between items-center gap-[10px] lg:gap-[5%]">
      <div>
        <h1 class="text-[35px] mb-[20px] relative after:absolute after:bottom-[-7px] after:right-0 after:w-[70px] after:h-[3px] after:bg-[#5599f9]"> <span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</h1>
        <p class="text-[17px] text-[rgba(0,_0,_0,_0.80)] text-right 2xl:max-w-[80%] mb-[20px]">
          أول منصة عربية منذ عام 2020 مختصة بتقديم الاستشارات والأراء الطبية الأخرى التي تعمل على مساعدة المرضى على اتخاذ القرارات الصحيحة من خلال مراجعة أوضاعهم الصحية الحالية وقراءة التقارير الطبية المتاحة ثم تقييم الحالة وتقديم رأي طبي آخر لتحسين الظروف الصحية وتقديم الرعاية الصحية المناسبة.
          <br>
          منصة كلينيكير تدرك أن رحلة المريض تتغير بمرور الوقت وتنتقل من الأعراض إلى التشخيص إلى الفحوصات السريرية إلى اقتراح خيارات العلاج مروراً بمرحلة العناية مابعد الجراحة، وتحديد المواعيد واختيار المستشفى للعمليات الجراحية، وكل مرحلة من هذه المراحل تتطلب قرارات حاسمة من المريض.
          <br>
          ولهذا منصة كلينيكير تؤمن أن كل قرار خاطئ يتعلق بالصحة له تأثير كبير ويترتب عليه عواقب كبيرة، ولهذا توفر المنصة حلولاً عملية للمرضى الذي يتعين عليه اتخاذ قرارات صعبة ومهمة بمعلومات محدودة مع حالة من القلق الشديد.
          <br>
          الرأي الطبي الثاني والتحدث مع استشاريين مؤهلين وأصحاب خبرة يشكل أهمية بالغة في مجال الطب والرعاية الصحية ويلعب دوراً مؤثراً من خلال اقتراح خيارات أخرى أفضل تساهم في تحسين ظروف الحالة الصحية للمريض، انطلاقاً من شعار المنصة: (دعونا نساعدكم في اتخاذ القرار)
        </p>
      </div>
      <div class="video-about mb-[40px] relative flex justify-center items-center w-full h-[350px]">
        <iframe src="https://www.youtube.com/embed/uw6KU7qyze4?si=zHEZEphjTJRaiFgw" class="w-full h-full" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
    <div class="Why choose?  p-[60px_20px] md:p-[60px_60px] mb-[40px] flex justify-center items-center bg-[#325285]">
      <div class="flex flex-col gap-[20px] justify-center items-center">
        <h1 class="text-[20px] mb-[-10px] text-white">لماذا تختار منصة</h1>
        <p class="text-[30px] text-[#ffffff] mb-[60px] font-bold text-center  "> <span class="text-[#5599f9]">كلينيكير</span> للرأي الطبي الثاني</p>
        <div class="flex justify-center items-center flex-wrap gap-[20px] bg-white rounded-[20px] p-[10px] md:p-[30px]">
          <div class="sm:w-[360px] p-[30px] w-full flex rounded-[15px] bg-white">
            <div class="flex justify-start items-start flex-col gap-[20px]">
              <div class="flex justify-start items-start gap-[-5px]">
                <img :src="require('@/image/why-1.webp')" class=" w-[70px] h-[70px]" alt="">
                <div class="flex justify-center items-center w-[35px] h-[35px] -rotate-[5deg] rounded-full bg-[#5599f9]">
                  <h2 class="text-[16px] text-[#ffffff]">1</h2>
                </div>
              </div>
              <div>
                <h1 class="text-[22px] text-[#5599f9] text-start mb-[20px]">تضم أفضل الأطباء والاستشاريين والخبراء في مجال الرعاية الصحية</h1>
              </div>
            </div>
          </div>
          <div class="sm:w-[360px] p-[20px_10px] md:p-[30px] w-full flex xl:border-l xl:border-r border-t border-b sm:border-b-[0] sm:border-t-[0] border-[#00000045] bg-white">
            <div class="flex justify-start items-start flex-col gap-[20px]">
              <div class="flex justify-start items-start gap-[-5px]">
                <img :src="require('@/image/why-2.webp')" class=" w-[70px] h-[70px]" alt="">
                <div class="flex justify-center items-center w-[35px] h-[35px] -rotate-[5deg] rounded-full bg-[#5599f9]">
                  <h2 class="text-[16px] text-[#ffffff]">2</h2>
                </div>
              </div>
              <div>
                <h1 class="text-[22px] text-[#5599f9] text-start mb-[20px]">الحصول على الرأي الطبي الثاني من أفضل المراكز الطبية</h1>
              </div>
            </div>
          </div>
          <div class="sm:w-[360px] p-[10px] md:p-[30px] w-full flex rounded-[15px] bg-white">
            <div class="flex justify-start items-start flex-col gap-[20px]">
              <div class="flex justify-start items-start gap-[-5px]">
                <img :src="require('@/image/why-3.webp')" class=" w-[70px] h-[70px]" alt="">
                <div class="flex justify-center items-center w-[35px] h-[35px] -rotate-[5deg] rounded-full bg-[#5599f9]">
                  <h2 class="text-[16px] text-[#ffffff]">3</h2>
                </div>
              </div>
              <div>
                <h1 class="text-[22px] text-[#5599f9] text-start mb-[20px]">التزام الخصوصية والسرية والمسئولية للملفات الطبية للمرضى</h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  data() {
    return {
      video_var: false,
    };
  },
  watch: {
    video_var: function () {
      if(this.video_var == true){
        this.$refs.video.play()
      }else{
        this.$refs.video.pause()
      }
    },
  }
}
</script>

<style scoped lang="scss">

</style> 