<template>
  <div id="meeting" class="h-[100vh] min-h-screen"></div>
</template>

<script>
import { VideoSDKMeeting } from "@videosdk.live/rtc-js-prebuilt";
export default {
  props: ['title'],
  data() {
    return {
      name: "Flavio",
    };
  },
  created(){
    setTimeout(() => {
      if(this.$store.state.meeting_details[0]){
        if(window.location.pathname == '/meeting'){
        document.getElementById('nav').style.display = 'none'
        document.getElementById('FooterPage').style.display = 'none'
        setTimeout(() => {
          console.log(document.getElementById('meeting').appendChild(document.querySelectorAll('#videosdk-frame')[0]))
          document.querySelector('body > div:last-of-type').remove();
        }, 1000);
        }
      }else{
        this.$router.push('/My-all-servicesPage')
      }
      }, 800);
  },  
  mounted: async function() {
    const apiKey = '4e0d49c9-78df-4d59-80cb-65769822e385';
    const meetingId = this.$store.state.meeting_details[0].meeting_id;
    const name = this.$store.state.meeting_details[0].name;

    const config = {
      name: name,
      meetingId: meetingId,
      apiKey: apiKey,

      containerId: null,
      redirectOnLeave: "http://localhost:8080/",

      micEnabled: true,
      webcamEnabled: true,
      participantCanToggleSelfWebcam: true,
      participantCanToggleSelfMic: true,

      chatEnabled: true,
      screenShareEnabled: true,
      pollEnabled: true,
      whiteboardEnabled: true,
      raiseHandEnabled: true,

      recordingEnabled: true,
      recordingEnabledByDefault: false,
      recordingWebhookUrl: "https://www.videosdk.live/callback",
      recordingAWSDirPath: `/meeting-recordings/${meetingId}/`, // automatically save recording in this s3 path

      brandingEnabled: true,
      brandLogoURL: "https://picsum.photos/200",
      brandName: "Awesome startup",

      participantCanLeave: true, // if false, leave button won't be visible

      // Live stream meeting to youtube
      livestream: {
        autoStart: true,
        outputs: [
          // {
          //   url: "rtmp://x.rtmp.youtube.com/live2",
          //   streamKey: "<STREAM KEY FROM YOUTUBE>",
          // },
        ],
      },

      permissions: {
        askToJoin: false, // Ask joined participants for entry in meeting
        toggleParticipantMic: true, // Can toggle other participant's mic
        toggleParticipantWebcam: true, // Can toggle other participant's webcam
        removeParticipant: true, // Remove other participant from meeting
        endMeeting: true, // End meeting for all participant
        drawOnWhiteboard: true, // Can Draw on whiteboard
        toggleWhiteboard: true, // Can toggle whiteboard
        toggleRecording: true, // Can toggle recording
      },

      joinScreen: {
        visible: true, // Show the join screen ?
        title: "Daily scrum", // Meeting title
        meetingUrl: window.location.href, // Meeting joining url
      },

      pin: {
        allowed: true, // participant can pin any participant in meeting
        layout: "SPOTLIGHT", // meeting layout - GRID | SPOTLIGHT | SIDEBAR
      },

      leftScreen: {
        // visible when redirect on leave not provieded
        actionButton: {
          // optional action button
          label: "Video SDK Live", // action button label
          href: "http://localhost:8080/", // action button href
        },
      },
    };
    const meeting = new VideoSDKMeeting();

    meeting.init(config);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
