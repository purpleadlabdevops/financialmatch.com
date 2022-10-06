<template>
  <section class="industries">
    <div class="container">
      <div class="industries-left">
        <div class="industries-item" v-for="(item, index) in items">
          <div class="industries-img"><img :src="require(`@/assets/img/branding/ind-${++index}.png`)" alt=""></div>
          <h3>{{ item }}</h3>
        </div>
      </div>
      <div class="industries-right">
        <h2>INDUSTRIES WE’VE HELPED</h2>
        <p>We’ve helped clients of all sizes and  across multiple different industries.</p>
        <nuxt-link to="/" class="btn">Check Eligibility</nuxt-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return{
      items: ["Construction","Restaurants / QSR","Warehouse / 3PL","Business Services","Retail","Mechanical Supplies"]
    }
  }
}
</script>

<style lang="scss" scoped>
.industries{
  padding: 50px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &-left{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(min-width:768px){
      width: 50%;
    }
  }
  &-right{
    padding-left: 30px;
    @media(min-width:768px){
      width: 50%;
    }
  }
  &-img{
    width: 152.64px;
    height: 152.64px;
    background: linear-gradient(135deg, #EAEAEE 11.38%, #FFFFFF 86.03%);
    box-shadow: -10.9603px -10.9603px 60.2814px #FFFFFF, 21.9205px 16.4404px 27.4006px rgba(241, 241, 241, 0.25), inset 0px 21.9205px 32.8808px rgba(192, 192, 192, 0.25), inset -38.3609px -27.4006px 21.9205px #FFFFFF;
    margin: 0 auto 20px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      display: block;
    }
  }
  &-item{
    margin-top: 40px;
    width: calc(100% / 2);
    @media(min-width:768px){
      width: calc(100% / 3);
    }
    h3{
      font-weight: 600;
      font-size: 15px;
      line-height: 1.2;
      color: #222222;
      text-align: center;
      @media(min-width:768px){
        font-size: 18px;
      }
    }
  }
  h2{
    font-weight: 600;
    font-size: 40px;
    line-height: 1.4;
    text-align: right;
    color: #222222;
    margin-bottom: 40px;
    @media(min-width:768px){
      font-size: 55px;
    }
  }
  p{
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    text-align: right;
    color: #222222;
    margin-bottom: 30px;
    @media(min-width:768px){
      font-size: 30px;
      margin-bottom: 60px;
    }
  }
  .btn{
    margin-left: auto;
    width: 500px;
    max-width: 100%;
    text-align: center;
    height: 66px;
    font-weight: 600;
    font-size: 24px;
    line-height: 66px;
    color: #FFFFFF;
    background: #326A6F;
    border-radius: 10px;
    display: block;
    text-decoration: none;
    &:hover{
      opacity: .7;
    }
  }
}
</style>
