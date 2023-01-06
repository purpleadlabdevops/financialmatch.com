<template>
  <div class="aboutus">
    <div class="container">
      <h2>Saying about us</h2>
      <div class="aboutus--row">
        <div class="aboutus--item aboutus--1">
          <img src="@/assets/img/about-01.png">
        </div>
        <div class="aboutus--item aboutus--2">
          <img src="@/assets/img/about-02.png">
        </div>
        <div class="aboutus--item aboutus--3"></div>
        <div class="aboutus--item aboutus--4">
          <img src="@/assets/img/about-03.png">
        </div>
        <div class="aboutus--item aboutus--5"></div>
        <div class="aboutus--item aboutus--6">
          <img src="@/assets/img/about-04.png">
        </div>
        <div class="aboutus--item aboutus--7">
          <img src="@/assets/img/about-05.png">
        </div>
        <div class="aboutus--item aboutus--8">
          <img src="@/assets/img/about-06.png">
        </div>
        <div class="aboutus--item aboutus--9">
          <img src="@/assets/img/about-07.png">
        </div>
        <div class="aboutus--item aboutus--10"></div>
        <div class="aboutus--item aboutus--11">
          <img src="@/assets/img/about-08.png">
        </div>
        <div class="aboutus--item aboutus--12">
          <img src="@/assets/img/about-09.png">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutus{
  padding-top: 80px;
  @media(min-width:992px){
    padding-top: 160px;
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
    align-items: center;
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
    }
  }
  &--1{
    border-width: 2px 0px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
    border-radius: 10px 0px 0px 0px;
  }
  &--2{
    border: 2px solid #D5D4D4;
    @media(max-width:767px){
      border-radius: 0px 10px 0px 0px;
    }
  }
  &--3{
    border-bottom: 2px solid #D5D4D4;
    @media(max-width:992px){
      order: 20;
      display: none;
    }
  }
  &--4{
    @media(max-width:767px){
      border-left: 2px solid #D5D4D4;
      border-bottom: 2px solid #D5D4D4;
    }
    @media(min-width:992px){
      border: 2px solid #D5D4D4;
      border-radius: 0px 10px 0px 0px;
    }
  }
  &--5{
    border-bottom: 2px solid #D5D4D4;
    @media(max-width:992px){
      order: 20;
      display: none;
    }
  }
  &--6{
    border-width: 0px 2px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
  }
  &--7{
    border-width: 0px 0px 2px 0px;
    border-style: solid;
    border-color: #D5D4D4;
    @media(max-width:767px){
      border-left: 2px solid #D5D4D4;
    }
  }
  &--8{
    border: 2px solid #D5D4D4;
    border-radius: 0px;
    border-top: none;
  }
  &--9{
    border: 2px solid #D5D4D4;
    border-top: none;
    border-radius: 0px 0px 0px 10px;
    @media(min-width:992px){
      transform: translateX(2px);
    }
    @media(max-width:767px){
      border-left: 2px solid #D5D4D4;
      border-right: none;
      border-radius: 0;
    }
  }
  &--10{
    @media(max-width:992px){
      order: 20;
      display: none;
    }
  }
  &--11{
    border-width: 0px 0px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
    @media(max-width:767px){
      border-right: 2px solid #D5D4D4;
    }
    @media(min-width:992px){
      transform: translateX(-2px);
    }
  }
  &--12{
    border-width: 0px 2px 2px 2px;
    border-style: solid;
    border-color: #D5D4D4;
    border-radius: 0px 0px 10px 0px;
    transform: translateX(0px);
    @media(max-width:767px){
      border-radius: 0px 0px 0 10px;
      width: calc(50% + 2px);
    }
  }
}
</style>
