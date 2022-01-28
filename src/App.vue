<template>
  <div class="interface" :class="mode">
    <Header @toggle="toggle"/>
    <div id="content">
      <router-view/>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import './assets/css/global.css';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      mode: 'light'
    }
  },
  methods: {
    toggle () {
      if (this.mode === "dark"){
        this.mode = "light"
        document.body.style.background = "var(--background)";
      }else{
      this.mode = "dark"
      document.body.style.background = "var(--dark_darkblue)";
      }
    }
  },
  mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://kit.fontawesome.com/58007293f8.js')
      recaptchaScript.setAttribute('crossorigin', 'anonymous')
      document.head.appendChild(recaptchaScript)
    },
}

</script>



