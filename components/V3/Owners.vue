<template>
  <div class="screen-owners">
    <div class="container">
      <h4>Most business owners don’t realize they can qualify to</h4>
      <h2>Get $26,000 cash <br>for each W2 employee</h2>
      <button @click="$parent.quiz = true" class="btn" v-if="winWidth > 767">Check eligibility</button>
      <div class="screen-owners--row">
        <h3>Using the IRS’ ERC <br>Program</h3>
        <div class="screen-owners--right">
          <div class="screen-owners--item">
            <h5>No risk</h5>
            <ul>
              <li>No up front fees</li>
              <li>No credit Check</li>
              <li>Not a loan</li>
            </ul>
          </div>
          <div class="screen-owners--item">
            <h5>Qualify 1 of 3 ways</h5>
            <ul>
              <li>Revenue Reduction</li>
              <li>Shutdowns</li>
              <li>Supply Chain Disruptions</li>
            </ul>
          </div>
          <div class="screen-owners--item">
            <h5>Get money</h5>
            <p>from the IRS, even If you got PPP</p>
          </div>
          <div class="screen-owners--item">
            <h5>Get $1.3 million</h5>
            <p>No cap on refund. Ie. a 50 employee business can get $1.3 Million</p>
          </div>
        </div>
      </div>
      <button @click="$parent.quiz = true" class="btn" v-if="winWidth < 768">Check eligibility</button>
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
.screen-owners{
  padding: 40px 0;
  @media(min-width:768px){
    padding: 80px 0;
  }
  @media(min-width:992px){
    padding: 160px 0;
  }
  h4{
    font-weight: 600;
    font-size: 16px;
    line-height: 130%;
    color: #797B87;
    margin-bottom: 8px;
    @media(min-width:768px){
      font-size: 20px;
    }
  }
  h2{
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: #0E0E11;
    margin-bottom: 32px;
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  &--row{
    border-top: 1px solid #D5D4D4;
    margin-top: 32px;
    padding-top: 32px;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      padding-top: 40px;
    }
  }
  h3{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #797B87;
    @media(max-width:767px){
      br{
        display: none;
      }
    }
    @media(min-width:768px){
      font-size: 32px;
      width: 50%;
    }
  }
  &--right{
    margin-bottom: 48px;
    @media(min-width:768px){
      margin-bottom: 0;
      margin-top: -34px;
      display: flex;
      flex-wrap: wrap;
      width: 50%;
    }
  }
  &--item{
    margin-top: 16px;
    @media(max-width:767px){
      padding-left: 86px;
    }
    @media(min-width:768px){
      width: 50%;
      margin-top: 34px;
    }
  }
  h5{
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: #0E0E11;
    margin-bottom: 8px;
    @media(min-width:768px){
      font-size: 32px;
    }
  }
  p, li{
    font-size: 16px;
    line-height: 140%;
    color: #0E0E11;
  }
  ul{
    list-style: outside disc;
    padding-left: 12px;
  }
}
</style>