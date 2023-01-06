<template>
  <div class="screen-whyus">
    <div class="container">
      <h2>Why us?</h2>
      <div class="screen-whyus--row">
        <div class="screen-whyus--item screen-whyus--1"></div>
        <div class="screen-whyus--item screen-whyus--2">
          <p>We do this by listening and understanding your businesses, identifying your needs, making a plan and holding your hand as we help you utilize government programs, get funding, and optimize your taxes.</p>
        </div>
        <div class="screen-whyus--item screen-whyus--3 screen-whyus--hide"></div>
        <div class="screen-whyus--item screen-whyus--4">
          <div class="screen-whyus--box">
            <span>05</span>
            <h5>Honest & Accurat</h5>
            <h6>A boss who admits to having acted in their own interest may show honesty by rectifying the situation</h6>
          </div>
        </div>
        <div class="screen-whyus--item screen-whyus--5">
          <div class="screen-whyus--box">
            <span>01</span>
            <h5>State Licensed CPA’s</h5>
            <h6>A certified public accountant (CPA), however, is someone who has earned a professional designation through a combination of education</h6>
          </div>
        </div>
        <div class="screen-whyus--item screen-whyus--6 screen-whyus--hide"></div>
        <div class="screen-whyus--item screen-whyus--7">
          <div class="screen-whyus--box">
            <span>04</span>
            <h5>No Upfront Fees</h5>
            <h6>An amount of money paid before a particular piece of work or a particular service is done or received</h6>
          </div>
        </div>
        <div class="screen-whyus--item screen-whyus--8 screen-whyus--hide"></div>
        <div class="screen-whyus--item screen-whyus--9 screen-whyus--hide"></div>
        <div class="screen-whyus--item screen-whyus--10">
          <div class="screen-whyus--box">
            <span>02</span>
            <h5>Multiple Ways To Quality</h5>
            <h6>The totality of features and characteristics of a product or service that bears on its ability to meet a stated or implied need</h6>
          </div>
        </div>
        <div class="screen-whyus--item screen-whyus--11">
          <div class="screen-whyus--box">
            <span>03</span>
            <h5>Integrity Over Profit</h5>
            <h6>Integrity in business enhances your reputation — which can help attract and retain customers</h6>
          </div>
        </div>
        <div class="screen-whyus--item screen-whyus--12 screen-whyus--hide"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen-whyus{
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  @media(min-width:992px){
    padding: 160px 0;
  }
  &--row{
    display: flex;
    flex-wrap: wrap;
  }
  &--item{
    width: 50%;
    min-height: 253px;
    padding: 12px;
    display: flex;
    @media(max-width:767px){
      order: 10;
    }
    @media(min-width:576px){
      padding: 16px;
    }
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 20px;
    }
  }
  &--hide{
    @media(max-width:767px){
      display: none;
    }
  }
  &--1{
    @media(max-width:767px){
      order: 1;
    }
  }
  &--2{
    @media(max-width:767px){
      order: 0;
      width: 100%;
      min-height: 0px;
      padding-bottom: 32px;
      padding-left: 0;
      padding-right: 0;
    }
  }
  &--3{}
  &--4{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 6;
      border-radius: 0px 0px 10px 0px;
    }
    @media(min-width:768px){
      margin-left: -4px;
      border-radius: 0px 10px 10px 0px;
    }
  }
  &--5{
    border: 2px solid #D5D4D4;
    border-radius: 0px 10px 0px 0px;
    @media(max-width:767px){
      order: 2;
      border-bottom: 1px;
    }
    @media(min-width:768px){
      border-radius: 10px 0px 0px 10px;
      margin-left: 2px;
    }
  }
  &--6{}
  &--7{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 5;
      border-radius: 0px 0px 0px 10px;
      border-right: 1px;
    }
    @media(min-width:768px){
      margin-left: -4px;
    }
  }
  &--8{}
  &--9{}
  &--10{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 3;
      border-radius: 10px 0px 0px 0px;
      border-bottom: 1px;
      border-right: 1px;
    }
    @media(min-width:768px){
      margin-top: -2px;
    }
  }
  &--11{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      order: 4;
      border: 2px solid #D5D4D4;
      border-bottom: 1px;
    }
    @media(min-width:768px){
      margin-left: -2px;
      margin-top: -2px;
    }
  }
  &--12{}
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #0E0E11;
    margin-bottom: 16px;
    @media(min-width:768px){
      font-size: 56px;
      margin-bottom: 32px;
    }
  }
  p{
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: #0E0E11;
  }
  &--box{
    position: relative;
    padding-left: 34px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width:768px){
      padding-left: 84px;
    }
    h5{
      font-weight: 600;
      font-size: 16px;
      line-height: 130%;
      color: #1D3C86;
      padding-top: 2px;
      margin-bottom: 16px;
      @media(min-width:768px){
        font-size: 20px;
        padding-top: 10px;
        margin-bottom: 0;
      }
    }
    h6{
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      margin-left: -34px;
      @media(min-width:768px){
        font-size: 16px;
        margin-left: 0;
      }
    }
    span{
      position: absolute;
      left: 0; top: 0;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      color: #1D3C86;
      @media(min-width:768px){
        font-size: 32px;
      }
    }
  }
}
</style>