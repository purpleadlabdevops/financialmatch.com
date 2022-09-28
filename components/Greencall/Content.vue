<template>
  <section class="main">
    <div class="container">
      <div class="stepone">
        <div class="stepone-content">
          <h1>Congratulations! The ERC Program is Still Open and You Qualified For It. Call the Number Below to Get Approved.</h1>
          <img src="@/assets/img/frame-11.jpeg" />
          <p class="title">Claim Your Tax Credit Check by Tapping To Call Below:</p>
          <a @click="setCall" href="tel:18555851843">Click to Call Now and Claim</a>
          <p class="subtitle">First Come First Serve! Your spot will be held for</p>
          <p class="text-timer"><b>00</b> Minutes <b>{{ countDown }}</b> Seconds</p>
          <p class="sm">
            Disclaimer and important information: <br><br>
            https://financialmatch.com is a third-party independent marketplace run by Financial Match and not a federal or state website. <br><br>
            https://financialmatch.com is not affiliated with the IRS or any government organization.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      money: '500,000$',
      countDown: 90
    }
  },
  methods: {
    setCall() {
      EF.conversion({
        offer_id: 1
      })
        .then(res => {
          console.dir(res)
        })
    },
    countDownTimer() {
      setTimeout(() => {
        this.countDown -= 1;
        this.countDownTimer();
      }, 1000);
      if (this.countDown === 0) {
        location.reload();
      }
    }
  },
  mounted(){
    this.countDownTimer();
  }
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding-bottom: 96px;
  }
}
.stepone {
  padding-top: 20px;
  @media(min-width:768px){
    padding-top: 120px;
  }
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h1 {
      font-weight: 700;
      font-size: 22px;
      line-height: 1.2;
      color: #000;
      text-align: center;
      max-width: 680px;
      width: 100%;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        margin-bottom: 50px;
        font-size: 40px;
      }
      b{
        filter: blur(8px);
      }
    }
    span{
      color: #cf2c31;
    }
    img{
      max-width: 100%;
      width: 768px;
      height: auto;
      margin-bottom: 20px;
    }
    .title{
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 700;
      max-width: 430px;
      width: 100%;
      @media(min-width:768px){
        font-size: 30px;
        margin-bottom: 60px;  
      }
    }
    .subtitle{
      margin-bottom: 20px;
    }
    p{
      color: #000;
      font-size: 18px;
      line-height: 1.4;
      text-align: center;
      @media(min-width:768px){
        font-size: 24px;
      }
      &.sm{
        font-size: 8px;
        line-height: 1.3;
        margin-top: 60px;
      }
    }
    b{
      font-weight: 700;
    }
    a {
      background: rgb(6, 185, 6);
      padding: 20px;
      color: #fff;
      border: none;
      text-align: center;
      font-weight: 700;
      font-size: 26px;
      max-width: 700px;
      display: block;
      width: 100%;
      transition: 1s;
      margin-bottom: 5px;
      text-decoration: none;
      box-shadow: 1px;
      cursor: pointer;
      -webkit-box-shadow: 0px 7px 4px 0px rgba(0,0,0,0.28); 
      box-shadow: 0px 7px 4px 0px rgba(0,0,0,0.28);
      @media(min-width:576px){
        font-size: 34px;
      }
      &:hover {
        transform: scale(0.9);
        transition: 1s;
      }
    }
  }
}
</style>
