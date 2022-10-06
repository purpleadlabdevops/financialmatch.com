<template>
  <footer class="bfooter">
    <div class="container">
      <div class="bfooter-inner">
        <img src="@/assets/img/branding/footer-logo.png">
        Employee Retention Tax Credit
      </div>
      <nuxt-link to="/">Privacy Policy</nuxt-link>
      <span>All rights reserved</span>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bfooter{
  background: #193739;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 70px 0;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-inner{
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    color: #FFFFFF;
    @media(max-width:767px){
      text-align: center;
    }
    @media(min-width:768px){
      font-size: 19px;
    }
    img{
      display: block;
      margin-bottom: 20px;
      width: 286px;
      height: auto;
      @media(max-width:768px){
        margin: 0 auto 15px;
        width: 150px;
      }
    }
  }
  a{
    font-weight: 500;
    font-size: 15px;
    line-height: 1.2;
    color: #FFFFFF;
    text-decoration: none;
    display: block;
    text-align: center;
    margin: 10px 0;
    @media(min-width:768px){
      font-size: 18px;
      margin: 0;
    }
  }
  span{
    margin: 10px 0;
    text-align: center;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.2;
    color: #FFFFFF;
    display: block;
    @media(min-width:768px){
      font-size: 18px;
      margin: 0;
    }
  }
}
</style>
