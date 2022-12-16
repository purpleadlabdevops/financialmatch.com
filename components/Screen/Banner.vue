<template>
  <div class="screen-banner">
    <div class="container">
      <h1 v-if="winWidth < 992">Has your business been impacted by the restrictions and impacts of COVID-19?</h1>
      <div class="screen-banner--box">
        <h1 v-if="winWidth > 991">Has your business been impacted by the restrictions and impacts of COVID-19?</h1>
        <h4>Our professionals do all the hard work so you can sleep at night knowing it was done right</h4>
        <a href="https://go.financialmatch.com/">Check eligibility</a>
        <svg v-if="winWidth > 991" width="1376" height="542" viewBox="0 0 1376 542" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1376 100.357V267.346C1376 272.945 1373.15 277.848 1369.04 279.317L691.474 540.66C689.178 541.546 686.755 542 684.294 542C672.362 542 635.679 542 634.98 542H9.44429C4.23081 542 0 536.44 0 529.588V12.4122C0 5.56036 4.23081 0 9.44429 0H822L1032 542H1224V88L1366.55 87.945C1371.76 87.945 1375.99 93.5054 1375.99 100.357H1376Z" fill="#41A280"/></svg>
        <svg v-else width="343" height="203" viewBox="0 0 343 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M343 37.5877V100.131C343 102.228 342.29 104.065 341.265 104.615L206.307 202.057C205.457 202.67 204.462 203 203.415 203C195.266 203 158.469 203 158.283 203H2.35421C1.05463 203 0 200.917 0 198.351V4.64886C0 2.08257 1.05463 0 2.35421 0H225.5L273.5 203H301V32.9388H340.644C341.944 32.9388 342.999 35.0214 342.999 37.5877H343Z" fill="#41A280"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      winWidth: 0
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    window.addEventListener('resize', e => this.winWidth = window.innerWidth)
  }
}
</script>

<style lang="scss" scoped>
.screen-banner{
  @media(min-width:992px){
    padding: 32px 0;
  }
  &--box{
    position: relative;
  }
  h1{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #0E0E11;
    margin-bottom: 24px;
    @media(min-width:992px){
      margin-bottom: 0;
      position: absolute;
      left: 32px; top: 32px;
      color: #FAFAFA;
      width: 57.5%;
      font-size: 36px;
    }
    @media(min-width:1200px){
      font-size: 42px;
    }
    @media(min-width:1400px){
      font-size: 56px;
    }
  }
  h4{
    position: absolute;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #FAFAFA;
    left: 16px;
    width: 190px;
    @media(max-width:991px){
      top: 16px;
    }
    @media(min-width:992px){
      left: 32px; bottom: 32px;
      width: 22.67%;
      font-size: 15px;
    }
    @media(min-width:1200px){
      font-size: 16px;
    }
    @media(min-width:1400px){
      font-size: 20px;
    }
  }
  a{
    position: absolute;
    left: 16px;
    bottom: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-transform: capitalize;
    color: #0E0E11;
    padding: 16px 32px 13px;
    background: #FAFAFA;
    border-radius: 8px;
    text-decoration: none;
    @media(min-width:992px){
      bottom: 32px;
      left: 36.48%;
      font-size: 14px;
    }
    @media(min-width:1200px){
      padding: 16px 32px 13px;
      font-size: 16px;
    }
  }
  svg{
    display: block;
    width: 100%;
    height: auto;
    @media(max-width:991px){
      max-width: 500px;
    }
  }
}
</style>