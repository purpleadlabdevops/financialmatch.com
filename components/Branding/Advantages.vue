<template>
  <section class="banner-advantages">
    <div class="container">
      <div class="banner-advantages__item" v-for="(item, index) in items">
        <div class="banner-advantages__img"><img :src="require(`@/assets/img/branding/adv-${++index}.png`)" :alt="item"></div>
        <h3>{{ item }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      items: ['Honest & Accurate', 'State Licensed CPA’s', 'No Upfront Fees', 'Multiple Ways To Quality`', 'Integrity Over Profit']
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-advantages{
  background: #E8FAF9;
  padding: 35px 0 5px;
  position: relative;
  z-index: 2;
  @media(min-width:768px){
    padding: 50px 0;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
  }
  &__item{
    width: calc(100% / 2);
    margin-bottom: 30px;
    @media(min-width:992px){
      display: flex;
      align-items: center;
      width: calc(100% / 3);
      padding-right: 10px;
    }
    @media(min-width:1200px){
      margin-bottom: 0;
      width: calc(100% / 5);
      padding-right: 5px;
    }
    h3{
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #326A6F;
      text-align: center;
      margin-top: 20px;
      @media(min-width:992px){
        margin-bottom: 0;
        text-align: left;
        margin-left: 30px;
      }
    }
  }
  &__img{
    background: #FFFFFF;
    box-shadow: -4.03297px -4.03297px 28.1038px #FFFFFF, 8.06594px 6.04945px 16.5858px #DDE6E5;
    flex: 1 80px;
    min-width: 110px;
    max-width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    @media(min-width:992px){
      margin-left: 0;
      margin-right: 0;
      min-width: 80px;
      max-width: 80px;
      height: 80px;
    }
    img{
      display: block;
      width: 72px;
      height: auto;
      @media(min-width:992px){
        width: 52px;
      }
    }
  }
}
</style>
