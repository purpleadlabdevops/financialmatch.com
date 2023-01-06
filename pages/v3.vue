<template>
  <main class="screen-wrap screen-elastic" :style="`height: ${wrapHeight}px`" @mousewheel="handleScroll" @wheel="handleScroll" @scroll="handleScroll">

    <section class="screen screen-1 screen-active" id="screen_1">
      <V3Header />
      <V3Banner />
    </section>

    <section class="screen screen-2" id="screen_2">
      <V3Aboutus />
    </section>

    <section class="screen screen-3" id="screen_3">
      <V3Philosophy />
    </section>

    <section class="screen screen-4" id="screen_4">
      <V3Service />
    </section>

    <section class="screen screen-5" id="screen_5">
      <V3Whyus />
    </section>

    <section class="screen screen-6" id="screen_6">
      <V3Estimate />
    </section>

    <section class="screen screen-7" id="screen_7">
      <V3Industries />
    </section>

    <section class="screen screen-8" id="screen_8">
      <V3Works />
    </section>

    <section class="screen screen-9" id="screen_9">
      <V3Owners />
    </section>

    <section class="screen screen-10" id="screen_10">
      <V3Reviews />
    </section>

    <section class="screen screen-11" id="screen_11">
      <V3Faq />
      <V3Footer />
    </section>

    <Transition>
      <V3Quiz v-if="quiz" />
      <V3Thanks v-if="sent" />
    </Transition>

  </main>
</template>

<script>
export default {
  layout: 'screens',
  head: {
    script: [
      {
        src: '/js/leadId.js',
        body: true,
        id: 'LeadiDscript',
      },
    ],
  },
  data(){
    return {
      winWidth: 0,
      wrapHeight: 0,
      scrollY: 0,
      current: 0,
      quiz: false,
      sent: false,
      screens: []
    }
  },
  methods: {
    handleScroll(e){
      setTimeout(()=>{
        this.scrollY = window.scrollY
        if(this.winWidth > 991){
          if(e.deltaY > 0 && this.scrollY > this.screens[this.current].offset){
            this.current = this.current + 1
            document.getElementById(this.screens[this.current - 1].id).classList.remove('screen-active')
            document.getElementById(this.screens[this.current - 1].id).style.transform = `translateY(-${this.screens[this.current - 1].height}px)`
            document.getElementById(this.screens[this.current].id).classList.add('screen-active')
          } else if(e.deltaY < 0 && this.current > 0 && this.scrollY < this.screens[this.current - 1].offset){
            this.current = this.current - 1
            document.getElementById(this.screens[this.current + 1].id).classList.remove('screen-active')
            document.getElementById(this.screens[this.current + 1].id).style.transform = `translateY(0px)`
            document.getElementById(this.screens[this.current].id).classList.add('screen-active')
          } else {
            let translate = this.screens[this.current].offset - this.screens[this.current].height - this.scrollY
            document.querySelector('.screen-active').style.transform = `translateY(${translate}px)`
          }
        }
      }, 250);
    },
    setScreens(){
      setTimeout(()=>{
        this.screens = []
        this.wrapHeight = 0
        const screens = document.querySelectorAll('.screen')
        screens.forEach(screen => {
          this.wrapHeight = this.wrapHeight + screen.clientHeight
          this.screens.push({
            id: screen.id,
            height: screen.clientHeight,
            offset: this.wrapHeight
          })
        })
      }, 250);
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    this.setScreens()
    window.addEventListener('resize', e => {
      this.winWidth = window.innerWidth
      this.setScreens()
    })

    localStorage.lead_source = window.location.origin
    localStorage.optinurl = window.location.href
    if(this.$route.query.utm_source) localStorage.utm_source = this.$route.query.utm_source
    if(this.$route.query.utm_medium) localStorage.utm_medium = this.$route.query.utm_medium
    if(this.$route.query.utm_campaign) localStorage.utm_campaign = this.$route.query.utm_campaign
    if(this.$route.query.c1) localStorage.c1 = this.$route.query.c1
    if(this.$route.query.c2) localStorage.c2 = this.$route.query.c2
    if(this.$route.query.c3) localStorage.c3 = this.$route.query.c3
    if(this.$route.query.c4) localStorage.c4 = this.$route.query.c4
    if(this.$route.query.sub1) localStorage.sub1 = this.$route.query.sub1
    if(this.$route.query.sub2) localStorage.sub2 = this.$route.query.sub2
    if(this.$route.query.sub3) localStorage.sub3 = this.$route.query.sub3
    if(this.$route.query.sub4) localStorage.sub4 = this.$route.query.sub4

  }
}
</script>

<style lang="scss" scoped>
.screen{
  width: 100%;
  background: #F4EFE5;
  z-index: 1;
  @media(min-width:992px){
    position: fixed;
    min-height: 100vh;
    transition: transform .3s ease-out;
  }
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      z-index: 100 - $i;
    }
  }
  &-wrap{
    position: relative;
    @media(min-width:992px){
      min-height: 100vh;
    }
  }
  &-active{
    @media(min-width:992px){
      box-shadow: 0 0 200px rgba(0,0,0, .6);
    }
  }
}
</style>
