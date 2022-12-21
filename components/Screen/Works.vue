<template>
  <div class="screen-works">
    <div class="container">
      <h2>How it works</h2>
      <div class="screen-works--row">
        <div class="screen-works--item"></div>
        <div class="screen-works--item">
          <span>01</span>
          <h5>Qualification Quiz</h5>
          <h6>A boss who admits to having acted in their own interest may show honesty by rectifying the situation</h6>
        </div>
        <div class="screen-works--item">
          <span>02</span>
          <h5>Fill Out Application</h5>
          <h6>Online or phone</h6>
        </div>
        <div class="screen-works--item">
          <span>03</span>
          <h5>Get Docs and Info</h5>
          <h6>Work with our team</h6>
        </div>
        <div class="screen-works--item">
          <span>04</span>
          <h5>Processing</h5>
          <h6>A boss who admits to having acted in their own interest may show honesty by rectifying the situation</h6>
        </div>
        <div class="screen-works--item">
          <span>05</span>
          <h5>Submission</h5>
          <h6>Online or phone</h6>
        </div>
        <div class="screen-works--item">
          <span>06</span>
          <h5>Payment from IRS</h5>
          <h6>Work with our team</h6>
        </div>
        <div class="screen-works--item"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen-works{
  background: #30785D;
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  @media(min-width:992px){
    padding: 160px 0;
    min-height: 100vh;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #FAFAFA;
    margin-bottom: 32px;
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--row{
    display: flex;
    flex-wrap: wrap;
  }
  &--item{
    width: 50%;
    min-height: 253px;
    padding: 16px;
    display: flex;
    border: 2px solid #41A280;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 24px 24px 24px 89px;
    }
    &:first-child, &:last-child{
      border: none;
      @media(max-width:767px){
        display: none;
      }
    }
    &:nth-child(2){
      @media(max-width:767px){
        border-radius: 10px 0 0 0;
      }
      @media(min-width:768px){
        border-bottom-width: 1px;
      }
    }
    &:nth-child(3){
      @media(max-width:767px){
        border-radius: 0 10px 0 0;
      }
      @media(min-width:768px){
        border-left-width: 1px;
        border-bottom-width: 1px;
      }
    }
    &:nth-child(4){
      @media(min-width:768px){
        border-radius: 0px 10px 10px 0px;
        border-left-width: 1px;
      }
    }
    &:nth-child(5){
      @media(min-width:768px){
        border-radius: 10px 0px 0px 10px;
        border-right-width: 1px;
      }
    }
    &:nth-child(6){
      @media(max-width:767px){
        border-radius: 0 0 0 10px;
      }
      @media(min-width:768px){
        border-left-width: 1px;
      }
    }
    &:nth-child(7){
      @media(max-width:767px){
        border-radius: 0 0 10px 0;
      }
      @media(min-width:768px){
        border-left-width: 1px;
      }
    }
  }
  h5{
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: #fff;
    padding-top: 2px;
    margin-bottom: 16px;
    width: 100%;
    padding-left: 34px;
    @media(min-width:768px){
      padding-left: 0;
      font-size: 20px;
      padding-top: 10px;
      margin-bottom: 0;
    }
  }
  h6{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #fff;
    width: 100%;
    @media(min-width:768px){
      font-size: 16px;
      margin-left: 0;
    }
  }
  span{
    position: absolute;
    left: 16px; top: 16px;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #fff;
    @media(min-width:768px){
      font-size: 32px;
      left: 24px; top: 24px;
    }
  }
}
</style>