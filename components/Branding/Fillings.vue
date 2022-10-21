<template>
  <section class="fillings">
    <div class="container">
      <h2>Some Recent Fillings</h2>
      <div class="fillings-item">
        <div class="fillings-img">
          <img src="@/assets/img/branding/icon-fillings.png">
        </div>
          {Industry} client $XX,XXX
      </div>
      <div class="fillings-item">
        <div class="fillings-img">
          <img src="@/assets/img/branding/icon-fillings.png">
        </div>
          {Industry} client $XX,XXX
      </div>
      <div class="fillings-item">
        <div class="fillings-img">
          <img src="@/assets/img/branding/icon-fillings.png">
        </div>
          {Industry} client $XX,XXX
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fillings{
  padding: 50px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
  h2{
    font-weight: 600;
    font-size: 40px;
    line-height: 1.4;
    color: #222222;
    margin: 0 0 30;
    @media(min-width:768px){
      font-size: 55px;
      width: calc(100% / 2 - 15px);
      margin: 25px 0;
    }
  }
  &-item{
    height: 100px;
    background: linear-gradient(124.04deg, #EBEBEB -1.83%, #FFFFFF 92.98%), #D9D9D9;
    box-shadow: -8.75367px -8.75367px 48.1452px #FFFFFF, 17.5073px 13.1305px 21.8842px rgba(241, 241, 241, 0.25), -10px 27px 40px rgba(0, 0, 0, 0.06), inset 0px 17.5073px 26.261px rgba(192, 192, 192, 0.25), inset -30.6378px -21.8842px 57px #FFFFFF;
    border-radius: 75px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    color: #222222;
    display: flex;
    align-items: center;
    margin: 25px 0;
    @media(min-width:768px){
      width: calc(100% / 2 - 15px);
      font-size: 24px;
      height: 153px;
    }
  }
  &-img{
    margin-right: 15px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88.66px;
    height: 88.66px;
    background: linear-gradient(135deg, #FFFFFF 11.38%, #FFFFFF 86.03%);
    box-shadow: 0px 0px 15.9156px rgba(202, 202, 202, 0.58);
    @media(min-width:768px){
      width: 152.64px;
      height: 152.64px;
      margin-right: 30px;
    }
    img{
      width: 58px;
      height: auto;
      @media(min-width:768px){
        width: 100px;
      }
    }
  }
}
</style>
