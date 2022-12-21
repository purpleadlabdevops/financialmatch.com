<template>
  <div class="screen-aboutus">
    <div class="container">
      <h2>Saying about us</h2>
      <div class="screen-aboutus--row">
        <div class="screen-aboutus--item screen-aboutus--1">
          <h4>CEO Weekly</h4>
          <img src="@/assets/img/screens/about-01.png" >
        </div>
        <div class="screen-aboutus--item screen-aboutus--2">
          <h4>Business First Online</h4>
          <img src="@/assets/img/screens/about-02.png" >
        </div>
        <div class="screen-aboutus--item screen-aboutus--3"></div>
        <div class="screen-aboutus--item screen-aboutus--4">
          <h4>USA today</h4>
          <img src="@/assets/img/screens/about-03.png" >
        </div>
        <div class="screen-aboutus--item screen-aboutus--5"></div>
        <div class="screen-aboutus--item screen-aboutus--6">
          <h4>Disrupt Magazine</h4>
          <img src="@/assets/img/screens/about-04.png" >
        </div>
        <div class="screen-aboutus--item screen-aboutus--7">
          <h4>The Losangeles Tribune</h4>
          <img src="@/assets/img/screens/about-05.png" >
        </div>
        <div class="screen-aboutus--item screen-aboutus--8"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen-aboutus{
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  @media(min-width:992px){
    padding: 160px 0;
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #0E0E11;
    margin-bottom: 32px;
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  h4{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #0E0E11;
    position: absolute;
    left: 16px;
    top: 16px;
    @media(min-width:768px){
      left: 24px;
      top: 24px;
    }
  }
  &--row{
    display: flex;
    flex-wrap: wrap;
  }
  &--item{
    width: 50%;
    min-height: 126px;
    padding: 16px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    @media(min-width:768px){
      width: 25%;
      min-height: 238px;
      padding: 24px;
    }
    img{
      display: block;
      max-width: 100%;
      height: auto;
      @media(min-width:768px){
        margin-bottom: 30px;
      }
    }
  }
  &--1{
    border-width: 2px 0px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
    border-radius: 10px 0px 0px 0px;
    @media(min-width:768px){
      border-radius: 10px 0px 0px 10px;
    }
  }
  &--2{
    border: 2px solid #D5D4D4;
  }
  &--3{
    border-bottom: 2px solid #D5D4D4;
  }
  &--4{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      margin-top: -2px;
    }
    @media(min-width:768px){
      border-radius: 0px 10px 10px 0px;
      margin-left: -2px;
    }
  }
  &--5{
    @media(max-width:767px){
      order: 6;
    }
  }
  &--6{
    @media(max-width:767px){
      order: 5;
      transform: translateX(2px);
    }
    border-width: 0px 2px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
  }
  &--7{
    @media(max-width:767px){
      order: 8;
      border-width: 2px;
      border-radius: 0px 0px 10px 0px;
      margin-top: -2px;
      img{
        width: 42px;
      }
    }
    border-width: 0px 2px 2px 0px;
    border-style: solid;
    border-color: #D5D4D4;
  }
  &--8{
    @media(max-width:767px){
      order: 7;
    }
  }
}
</style>
