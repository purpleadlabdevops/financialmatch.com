<template>
  <section class="banner-service">
    <div class="container">
      <div class="banner-service__titles">
        <h2>The Done-For-You ERC Service.</h2>
        <h4>We Make The Complicated Simple.</h4>
      </div>
      <div class="banner-service__inner">
        <h3>We do this by listening and understanding your businesses, identifying your needs, making a plan and holding your hand as we help you utilize government programs, get funding, and optimize your taxes.</h3>
        <ul>
          <li>Each account is overseen by a licensed CPA </li>
          <li>We make sure all numbers are accurate and fit within ERC regulations so you can “sleep well at night”</li>
          <li>Our ERC experts will take care of the paperwork so you can focus on running your business.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner-service{
  padding: 60px 0 30px;
  @media(min-width:768px){
    padding: 200px 0 100px;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__titles{}
  h2{
    font-weight: 600;
    font-size: 30px;
    line-height: 1.4;
    color: #222222;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 55px;
      margin-bottom: 30px;
    }
  }
  h4{
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: #222222;
    @media(min-width:992px){
      font-size: 35px;
      line-height: 43px;
    }
  }
  &__inner{
    background: linear-gradient(124.04deg, #EBEBEB -1.83%, #FFFFFF 92.98%);
    box-shadow: -10px 27px 41px rgba(0, 0, 0, 0.13);
    border-radius: 31px;
    padding: 15px;
    margin-top: 30px;
    @media(min-width:768px){
      margin-top: 0;
      width: calc(50% - 15px);
      padding: 50px;
    }
    h3{
      font-weight: 600;
      font-size: 16px;
      line-height: 1.2;
      color: #222222;
      margin-bottom: 40px;
      @media(min-width:768px){
        font-size: 20px;
      }
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        background: url('@/assets/img/branding/icon-list.png') no-repeat 0 center;
        min-height: 82px;
        padding-left: 82px;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.2;
        color: #222222;
        display: flex;
        align-items: center;
        @media(min-width:768px){
          font-size: 16px;
        }
        &:not(:first-child){
          margin-top: 10px;
          @media(min-width:768px){
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>
