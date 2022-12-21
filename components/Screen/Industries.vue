<template>
  <div class="screen-industries">
    <div class="container">
      <h2>Industries <br>we’ve helped</h2>
      <div class="screen-industries--row">
        <div class="screen-industries--left">
          <h3>We’ve helped clients of all sizes and across multiple different industries</h3>
          <button @click="$parent.quiz = true" class="btn">Check eligibility</button>
        </div>
        <div class="screen-industries--right">
          <div class="screen-industries--item">
            Construction
            <span>1</span>
          </div>
          <div class="screen-industries--item">
            Restaurants / QSR
            <span>2</span>
          </div>
          <div class="screen-industries--item">
            Warehouse / 3PL
            <span>3</span>
          </div>
          <div class="screen-industries--item">
            Business Services
            <span>4</span>
          </div>
          <div class="screen-industries--item">
            Retail
            <span>5</span>
          </div>
          <div class="screen-industries--item">
            Mechanical Supplies
            <span>6</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.screen-industries{
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  @media(min-width:992px){
    padding: 160px 0;
  }
  &--row{
    @media(min-width:768px){
      display: flex;
    }
  }
  &--left{
    border-top: 2px solid #D9D9D9;
    padding-top: 22px;
    padding-bottom: 32px;
    @media(min-width:768px){
      width: 50%;
      padding-bottom: 0;
    }
  }
  &--right{
    @media(min-width:768px){
      width: 50%;
    }
  }
  &--item{
    border-top: 2px solid #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #0E0E11;
    display: flex;
    justify-content: space-between;
    height: 74px;
    align-items: center;
    @media(min-width:768px){
      font-size: 32px;
      height: 90px;
    }
    span{
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      text-align: right;
      color: #797B87;
      @media(min-width:768px){
        font-size: 32px;
      }
    }
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #0E0E11;
    margin-bottom: 32px;
    @media(max-width:767px){
      br{display: none;}
    }
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  h3{
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
      max-width: 344px;
    }
  }
}
</style>