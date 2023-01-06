<template>
  <div class="screen-philosophy">
    <div class="container">
      <div class="screen-philosophy--left">
        <h2>Our <br>philosophy</h2>
        <h4>Individual. Intellectual. <br>Professional</h4>
        <p>
          Through our observations and learnings, we have created a logical and sequential Financial Match set of Values and Principles, across Emotional, Intellectual and Physical dimensions that human beings operate in. <br><br>
          Our beliefs are grounded in latest and most advanced scientific research that explore the effects that emotions have on our entire being originating from cells in particular, on our chromosomes and mitochondrial DNA. <br><br>
          <a href="#">Read More</a>
        </p>
      </div>
      <img class="screen-philosophy--img" src="@/assets/img/screens/philosophy-01.png">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen-philosophy{
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
    margin-bottom: 8px;
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 56px;
      margin-bottom: 16px;
    }
  }
  h4{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #797B87;
    margin-bottom: 32px;
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 32px;
    }
  }
  p{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #0E0E11;
    margin-left: auto;
    width: calc(100% - 60px);
    margin-bottom: 40px;
    @media(min-width:576px){
      width: calc(100% - 100px);
    }
    @media(min-width:768px){
      width: 50%;
      margin-bottom: 0;
    }
  }
  a{
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-transform: capitalize;
    color: #41A280;
    text-decoration: none;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
  }
  &--left{
    @media(min-width:768px){
      width: 50%;
    }
  }
  &--img{
    width: 100%;
    height: auto;
    @media(min-width:768px){
      width: calc(50% - 32px);
    }
  }
}
</style>
