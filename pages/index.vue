<template>
  <main class="screen-wrap" :style="`height: ${wrapHeight}px`" @mousewheel="handleScroll" @wheel="handleScroll" @scroll="handleScroll">

    <section class="screen screen-1 screen-active" id="screen_1">
      <ScreenHeader />
      <ScreenBanner />
    </section>

    <section class="screen screen-2" id="screen_2">
      <ScreenAboutus />
    </section>

    <section class="screen screen-3" id="screen_3">
      <ScreenPhilosophy />
    </section>

    <section class="screen screen-4" id="screen_4">
      <ScreenService />
    </section>

    <section class="screen screen-5" id="screen_5">
      <ScreenWhyus />
    </section>

    <section class="screen screen-6" id="screen_6">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum atque nesciunt, facere aliquam, perferendis est omnis, pariatur labore ea earum, voluptatem perspiciatis repudiandae culpa vel eligendi in! Laudantium nihil tempora voluptas eaque! Cumque, laborum minus id doloribus illum delectus neque, provident ipsa illo quia laboriosam nulla necessitatibus asperiores nihil dignissimos eius, pariatur cupiditate rem debitis quod perferendis officiis quidem obcaecati. Quisquam omnis numquam maiores quos atque sunt maxime facere dolores facilis, assumenda voluptatibus repellendus ad sit quis ipsam harum totam accusantium, repellat voluptates suscipit. Blanditiis, veniam nulla cumque ducimus ea deleniti excepturi, natus tempore corporis sapiente suscipit ullam officia voluptatibus!  </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum atque nesciunt, facere aliquam, perferendis est omnis, pariatur labore ea earum, voluptatem perspiciatis repudiandae culpa vel eligendi in! Laudantium nihil tempora voluptas eaque! Cumque, laborum minus id doloribus illum delectus neque, provident ipsa illo quia laboriosam nulla necessitatibus asperiores nihil dignissimos eius, pariatur cupiditate rem debitis quod perferendis officiis quidem obcaecati. Quisquam omnis numquam maiores quos atque sunt maxime facere dolores facilis, assumenda voluptatibus repellendus ad sit quis ipsam harum totam accusantium, repellat voluptates suscipit. Blanditiis, veniam nulla cumque ducimus ea deleniti excepturi, natus tempore corporis sapiente suscipit ullam officia voluptatibus!  </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum atque nesciunt, facere aliquam, perferendis est omnis, pariatur labore ea earum, voluptatem perspiciatis repudiandae culpa vel eligendi in! Laudantium nihil tempora voluptas eaque! Cumque, laborum minus id doloribus illum delectus neque, provident ipsa illo quia laboriosam nulla necessitatibus asperiores nihil dignissimos eius, pariatur cupiditate rem debitis quod perferendis officiis quidem obcaecati. Quisquam omnis numquam maiores quos atque sunt maxime facere dolores facilis, assumenda voluptatibus repellendus ad sit quis ipsam harum totam accusantium, repellat voluptates suscipit. Blanditiis, veniam nulla cumque ducimus ea deleniti excepturi, natus tempore corporis sapiente suscipit ullam officia voluptatibus!  </p>
    </section>

  </main>
</template>

<script>
export default {
  layout: 'screens',
  data(){
    return {
      wrapHeight: 0,
      scrollY: 0,
      current: 0,
      screens: []
    }
  },
  methods: {
    handleScroll(e){
      this.scrollY = window.scrollY
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
    },
    setScreens(){
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
    }
  },
  mounted(){
    // window.addEventListener('resize', this.handleScroll)
    window.addEventListener('resize', this.setScreens)
    this.setScreens()
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'PP Mori';
  src: url('/fonts/PPMori/PPMori-Extralight.eot');
  src: local('PP Mori'),
       url('/fonts/PPMori/PPMori-Extralight.woff') format('woff'),
       url('/fonts/PPMori/PPMori-Extralight.ttf') format('truetype'),
       url('/fonts/PPMori/PPMori-Extralight.svg') format('svg');
  font-weight: 300;
}
@font-face {
  font-family: 'PP Mori';
  src: url('/fonts/PPMori/PPMori-Regular.eot');
  src: local('PP Mori'),
       url('/fonts/PPMori/PPMori-Regular.woff') format('woff'),
       url('/fonts/PPMori/PPMori-Regular.ttf') format('truetype'),
       url('/fonts/PPMori/PPMori-Regular.svg') format('svg');
  font-weight: 400;
}
@font-face {
  font-family: 'PP Mori';
  src: url('/fonts/PPMori/PPMori-SemiBold.eot');
  src: local('PP Mori'),
       url('/fonts/PPMori/PPMori-SemiBold.woff') format('woff'),
       url('/fonts/PPMori/PPMori-SemiBold.ttf') format('truetype'),
       url('/fonts/PPMori/PPMori-SemiBold.svg') format('svg');
  font-weight: 600;
}
.screen{
  *{
    font-family: 'PP Mori';
  }
  .container{
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    @media(min-width:768px){
      width: 760px;
    }
    @media(min-width:992px){
      width: 990px;
    }
    @media(min-width:1200px){
      width: 1100px;
    }
    @media(min-width:1400px){
      width: 1400px;
      padding-left: 32px;
      padding-right: 32px;
    }
  }
  ul, h1, h2, h3, h4, h5, h6, p{
    padding: 0;
    margin: 0;
  }
}
</style>

<style lang="scss" scoped>
.screen{
  position: fixed;
  min-height: 100vh;
  width: 100%;
  background: #F4EFE5;
  z-index: 1;
  transition: transform .3s ease-out;
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      z-index: 100 - $i;
    }
  }
  &-wrap{
    position: relative;
    min-height: 100vh;
  }
  &-active{
    box-shadow: 0 0 200px rgba(0,0,0, .6);
  }
}
</style>
