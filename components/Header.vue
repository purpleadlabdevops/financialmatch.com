<template>
  <header class="branding-header">
    <div class="container">
      <img src="@/assets/img/logo-white.png" alt="logo" />
      <a href="tel:18558559365">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6 22.0992C15.6873 22.8017 16.9829 23.1079 18.269 22.9662C19.5552 22.8245 20.7534 22.2436 21.6622 21.3212L22.4567 20.5431C22.805 20.1863 23 19.7071 23 19.2081C23 18.7091 22.805 18.2299 22.4567 17.8731L19.0845 14.5311C18.7312 14.1833 18.2557 13.9885 17.7603 13.9885C17.265 13.9885 16.7895 14.1833 16.4362 14.5311C16.0799 14.8799 15.6014 15.0752 15.1032 15.0752C14.6049 15.0752 14.1265 14.8799 13.7702 14.5311L8.47358 9.22631C8.29689 9.05191 8.15658 8.84408 8.06081 8.61489C7.96504 8.3857 7.91572 8.13973 7.91572 7.89127C7.91572 7.64282 7.96504 7.39685 8.06081 7.16766C8.15658 6.93847 8.29689 6.73063 8.47358 6.55624C8.82078 6.20241 9.01534 5.72615 9.01534 5.23005C9.01534 4.73395 8.82078 4.25769 8.47358 3.90386L5.11906 0.544175C4.76278 0.195325 4.28432 0 3.78607 0C3.28782 0 2.80936 0.195325 2.45309 0.544175L1.67625 1.33989C0.755252 2.25008 0.175252 3.45013 0.0337772 4.73824C-0.107698 6.02635 0.197981 7.32397 0.899415 8.41291C4.55416 13.8074 9.20441 18.4528 14.6 22.0992Z" fill="#326A6F"/></svg>
        (855) 855-9365
      </a>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.branding-header{
  padding-top: 20px;
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  @media(min-width:768px){
    padding-top: 43px;
  }
  .container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  img{
    display: block;
    width: 150px;
    height: auto;
    @media(min-width:768px){
      width: 286px;
    }
  }
  a{
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    color: #326A6F;
    text-decoration: none;
    @media(min-width:768px){
      font-size: 24px;
    }
    svg{
      display: inline-block;
      margin-right: 5px;
      vertical-align: middle;
      @media(min-width:768px){
        margin-right: 19px;
      }
    }
  }
}
</style>
