<template>
  <section class="faqu">
    <div class="container">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <div class="faqu-inner">
        <div class="faqu-list">
          <div class="faqu-item" v-for="(item, i) in items">
            <div class="faqu-q" @click.prevent="action" :key="`question${++i}`">{{ item.q }}</div>
            <div class="faqu-a">{{ item.a }}</div>
          </div>
        </div>
        <a href="https://go.financialmatch.com/" class="btn">Check Eligibility</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      items: [
        {
          q: "Is the ERC program a loan?",
          a: "No, this is government money for businesses affected by Covid. This is NOT a loan."
        },
        {
          q: "Can we qualify if our revenue went up in 2020 or 2021?",
          a: "No, this is government money for businesses affected by Covid. This is NOT a loan."
        },
        {
          q: "Can we qualify if we already received a PPP loan?",
          a: "No, this is government money for businesses affected by Covid. This is NOT a loan."
        },
        {
          q: "Wasn’t the ERC program from several years ago?",
          a: "No, this is government money for businesses affected by Covid. This is NOT a loan."
        }
      ]
    }
  },
  methods: {
    action(e){
      e.target.parentNode.classList.toggle('active')
    }
  }
}
</script>

<style lang="scss" scoped>
.faqu{
  padding: 50px 0;
  @media(min-width:768px){
    padding: 100px 0;
  }
  h2{
    font-weight: 600;
    font-size: 40px;
    line-height: 1.4;
    color: #222222;
    margin-bottom: 40px;
    @media(min-width:768px){
      font-size: 55px;
      margin-bottom: 80px;
    }
  }
  &-inner{
    padding: 20px 20px;
    background: linear-gradient(124.04deg, #EBEBEB -1.83%, #FFFFFF 92.98%);
    box-shadow: -8.75367px -8.75367px 48.1452px #FFFFFF, 17.5073px 13.1305px 21.8842px rgba(241, 241, 241, 0.25), -10px 27px 40px rgba(0, 0, 0, 0.06), inset 0px 17.5073px 26.261px rgba(192, 192, 192, 0.25), inset -30.6378px -21.8842px 57px #FFFFFF;
    border-radius: 31px;
    @media(min-width:768px){
      padding: 90px;
    }
  }
  &-list{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  &-item{
    @media(min-width:768px){
      width: calc(50% - 15px);
    }
    &.active{
      .faqu-q{
        &:after{
          height: 0;
        }
      }
      .faqu-a{
        max-height: 1000px;
        opacity: 1;
        &:before{
          height: 100%;
        }
      }
    }
  }
  &-q{
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    color: #222222;
    margin-top: 20px;
    padding-left: 37px;
    position: relative;
    cursor: pointer;
    @media(min-width:768px){
      margin-top: 30px;
      font-size: 24px;
    }
    &:before{
      content: "";
      width: 22px;
      height: 4px;
      position: absolute;
      left: 0; top: 12px;
      background: #326A6F;
      border-radius: 3px;
    }
    &:after{
      content: "";
      width: 4px;
      height: 22px;
      position: absolute;
      left: 9px; top: 4px;
      background: #326A6F;
      border-radius: 3px;
      transition: .5s ease;
    }
    &:hover{
      opacity: .7;
    }
  }
  &-a{
    margin-left: 55px;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.3;
    color: #000000;
    position: relative;
    margin-top: 25px;
    padding-left: 20px;
    max-height: 0px;
    opacity: 0;
    transition: 1s ease;
    @media(min-width:768px){
      font-size: 18px;
    }
    &:before{
      background: #326A6F;
      content: "";
      display: block;
      width: 4px;
      position: absolute;
      left: 0; top: 0;
      height: 0%;
      border-radius: 3px;
      transition: .5s ease .25s;
    }
  }
  .btn{
    margin: 60px auto 0;
    width: 500px;
    max-width: 100%;
    text-align: center;
    height: 60px;
    font-weight: 600;
    font-size: 18px;
    line-height: 60px;
    color: #FFFFFF;
    background: #326A6F;
    border-radius: 10px;
    display: block;
    text-decoration: none;
    @media(min-width:768px){
      font-size: 24px;
      height: 66px;
      line-height: 66px;
    }
    &:hover{
      opacity: .7;
    }
  }
}
</style>
