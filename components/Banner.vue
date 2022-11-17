<template>
  <section class="branding-banner">

    <div class="container">
      <Rate />
      <div class="branding-banner__inner">
        <h1>Your Trusted Financial Concierge</h1>
        <p>Our professionals do all the hard work so you can sleep at night knowing it was done right.</p>
        <div class="btn-list">
          <nuxt-link to="https://go.financialmatch.com/" class="btn">Check Eligibility</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.branding-banner{
  background: linear-gradient(114.55deg, #EBEBEB -1.9%, #FFFFFF 43.69%);
  padding: 100px 0 46px;
  overflow: hidden;
  @media(min-width:992px){
    display: flex;
    padding: 170px 0 80px;
  }
  &__inner{
    @media(min-width:992px){
      width: 50%;
    }
  }
  &__img{
    display: block;
    margin-bottom: 36px;
    @media(min-width:992px){
      margin-bottom: 0;
      order: 2;
      width: 50%;
      height: auto;
    }
    img{
      width: 100%;
      height: auto;
      @media(min-width:992px){
        width: 120%;
        transform: translateX(100px);
      }
    }
  }
  .container{
    @media(min-width:992px){
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  h1{
    font-weight: 600;
    font-size: 40px;
    line-height: 1.3;
    color: #222222;
    margin-bottom: 30px;
    @media(min-width:768px){
      font-size: 55px;
      margin-bottom: 50px;
    }
  }
  p{
    font-weight: 400;
    font-size: 20px;
    line-height: 1.2;
    color: #222222;
    margin-bottom: 30px;
    @media(min-width:768px){
      font-size: 30px;
      margin-bottom: 60px;
    }
  }
  .btn{
    font-weight: 600;
    font-size: 17px;
    line-height: 60px;
    color: #FFFFFF;
    display: block;
    width: 100%;
    height: 60px;
    background: #326A6F;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
    @media(min-width:768px){
      font-size: 24px;
      line-height: 66px;
      height: 66px;
    }
    &:hover{
      opacity: .7;
    }
    &-list{
      display: flex;
      justify-content: space-between;
      .btn{
        max-width: calc(50% - 15px);
      }
    }
    &-white{
      color: #326A6F;
      border: 1px solid #326A6F;
      border-radius: 10px;
      background: #fff;
    }
  }
}
</style>
