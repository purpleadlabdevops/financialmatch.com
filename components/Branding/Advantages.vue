<template>
  <section class="banner-advantages">
    <div class="container">
      <div class="banner-advantages__item" v-for="(item, index) in items">
        <img :src="require(`@/assets/img/branding/adv-${++index}.png`)" alt="">
        <h3>{{ item }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      items: ["Honest & Accurate","State Licensed CPA’s","No Upfront Fees","Multiple Ways To Quality`","Integrity Over Profit "]
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-advantages{
  background: #E8FAF9;
  padding: 50px 0;
  position: relative;
  z-index: 2;
  @media(min-width:768px){
    padding: 83px 0;
  }
  .container{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item{
    width: calc(100% / 2);
    padding: 0 5px;
    @media(min-width:768px){
      width: calc(100% / 5);
      padding: 0 15px;
    }
    img{
      display: block;
      margin: 0 auto 10px;
      max-width: 100%;
      @media(min-width:768px){
        margin-bottom: 30px;
      }
    }
    h3{
      font-weight: 800;
      font-size: 20px;
      line-height: 1.2;
      text-align: center;
      color: #326A6F;
      @media(min-width:768px){
        font-size: 24px;
      }
    }
  }
}
</style>
