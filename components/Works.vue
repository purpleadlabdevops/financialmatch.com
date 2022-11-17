<template>
  <section class="works">
    <div class="container">
      <h2>How It Works</h2>
      <div class="works-inner">
        <div class="works-item" v-for="(item, i) in items">
          <img :src="require(`@/assets/img/branding/works-${++i}.png`)" :alt="item">
          {{ item }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      items: ["Take the Qualification Quiz","Fill Out Application (Online or Phone)","Work With Our Team to Get Docs and Info","Processing, Submission and Payment from IRS"]
    }
  }
}
</script>

<style lang="scss" scoped>
.works{
  padding: 50px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  h2{
    font-weight: 600;
    font-size: 40px;
    line-height: 1.4;
    color: #222222;
    margin: 0 0 40px;
    @media(min-width:768px){
      font-size: 55px;
      margin: 0 0 80px;
    }
  }
  &-inner{
    background: #E8FAF9;
    box-shadow: -10px 27px 41px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 45px 30px;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      padding: 85px 78px;
    }
  }
  &-item{
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    text-align: center;
    @media(min-width:768px){
      text-align: left;
      padding-right: 50px;
      width: calc(100% / 4);
      margin-bottom: 0;
    }
    img{
      display: block;
      margin: 0 auto 15px;
      @media(min-width:768px){
        margin-bottom: 35px;
      }
    }
  }
}
</style>
