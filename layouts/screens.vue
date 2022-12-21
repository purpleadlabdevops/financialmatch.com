<template>
  <div>
    <Transition>
      <ScreenPreload v-if="!loaded" />
    </Transition>
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'screens',
  data(){
    return{
      loaded: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loaded = true
    }, 500);
  }
}
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.screen-wrap{
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
  button, a{cursor: pointer}
  .link{
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #41A280;
    background: none;
    border: none;
    text-align: center;
    display: block;
    svg{
      margin-right: 4px;
    }
    &-white{
      color: #FAFAFA;
      svg{
        path{
          fill: #FAFAFA;
        }
      }
    }
  }
  .btn{
    display: block;
    font-weight: 600;
    font-size: 16px;
    color: #FAFAFA;
    width: 100%;
    height: 51px;
    background: #41A280;
    border-radius: 8px;
    transition: background .5s ease, border .5s ease;
    border: 2px solid #41A280;
    padding: 16px 0px 13px;
    text-decoration: none;
    text-align: center;
    text-transform: capitalize;
    @media(min-width:768px){
      width: 186px;
    }
    &:hover{
      background: #30785D;
      border-color: #30785D;
    }
    &:active{
      background: #41A280;
      border-color: #0E0E11;
    }
    &:disabled{
      background: #41A280;
      border-color: #41A280;
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
    }
    &-white{
      color: #41A280;
      border-color: #41A280;
      background: #fff;
      &:hover{
        background: #fff;
        border-color: #30785D;
        color: #30785D;
      }
      &:active{
        background: #fff;
        border: 4px solid #30785D;
      }
      &:disabled{
        background: #fff;
        border-color: #41A280;
      }
    }
  }
  .field{
    input{
      outline: none !important;
      background: none;
      border: none;
      border-bottom: 1px solid #797B87;
      display: block;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #0E0E11;
      padding: 4px 0;
      &[type="submit"]{
        padding: 16px 32px 13px;
        height: 51px;
        background: #41A280;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #FAFAFA;
      }
    }
    &:not(:first-child){
      margin-top: 40px;
    }
  }
}
</style>
