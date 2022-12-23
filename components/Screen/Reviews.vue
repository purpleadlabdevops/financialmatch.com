<template>
  <div class="screen-reviews">
    <div class="container">
      <div class="screen-reviews--row">
        <h2>Client review</h2>
        <button v-if="winWidth > 991" @click.prevent="next">
          Next review
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#DC5750"/></svg>
        </button>
      </div>
      <div class="screen-reviews--slider">

        <div class="screen-reviews--item active">
          <img src="@/assets/img/screens/review-1.png">
          <div class="screen-reviews--info">
            <h3>Selena Giri</h3>
            <h4>CEO Chess.com</h4>
            <div class="screen-reviews--left">
              <div class="screen-reviews--money"><span>$</span> 200,500</div>
              <h5>received  to our clients</h5>
            </div>
            <div class="screen-reviews--right">
              <div class="screen-reviews--monthes">4 <span>months</span></div>
              <h5>from call to receiving money</h5>
            </div>
          </div>
        </div>

        <div class="screen-reviews--item">
          <img src="@/assets/img/screens/review-2.png">
          <div class="screen-reviews--info">
            <h3>Cody K.</h3>
            <h4>CEO Paramaus.com</h4>
            <div class="screen-reviews--left">
              <div class="screen-reviews--money"><span>$</span> 400,700</div>
              <h5>received  to our clients</h5>
            </div>
            <div class="screen-reviews--right">
              <div class="screen-reviews--monthes">4 <span>months</span></div>
              <h5>from call to receiving money</h5>
            </div>
          </div>
        </div>

<!--         <div class="screen-reviews--item">
          <img src="@/assets/img/screens/review-2.png">
          <div class="screen-reviews--info">
            <h3>Selena Giri</h3>
            <h4>CEO Chess.com</h4>
            <div class="screen-reviews--left">
              <div class="screen-reviews--money"><span>$</span> 200,500</div>
              <h5>received  to our clients</h5>
            </div>
            <div class="screen-reviews--right">
              <div class="screen-reviews--monthes">4 <span>months</span></div>
              <h5>from call to receiving money</h5>
            </div>
          </div>
        </div>
        <div class="screen-reviews--item">
          <img src="@/assets/img/screens/review-2.png">
          <div class="screen-reviews--info">
            <h3>Selena Giri</h3>
            <h4>CEO Chess.com</h4>
            <div class="screen-reviews--left">
              <div class="screen-reviews--money"><span>$</span> 200,500</div>
              <h5>received  to our clients</h5>
            </div>
            <div class="screen-reviews--right">
              <div class="screen-reviews--monthes">4 <span>months</span></div>
              <h5>from call to receiving money</h5>
            </div>
          </div>
        </div>
        <div class="screen-reviews--item">
          <img src="@/assets/img/screens/review-2.png">
          <div class="screen-reviews--info">
            <h3>Selena Giri</h3>
            <h4>CEO Chess.com</h4>
            <div class="screen-reviews--left">
              <div class="screen-reviews--money"><span>$</span> 200,500</div>
              <h5>received  to our clients</h5>
            </div>
            <div class="screen-reviews--right">
              <div class="screen-reviews--monthes">4 <span>months</span></div>
              <h5>from call to receiving money</h5>
            </div>
          </div>
        </div> -->
      </div>
      <button v-if="winWidth < 992" @click.prevent="next">
        Next review
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H6H8V2V8H6V3.2L2 8L0 6L4.8 2H0V0Z" fill="#DC5750"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      winWidth: 0
    }
  },
  mounted(){
    this.winWidth = window.innerWidth
    window.addEventListener('resize', e => this.winWidth = window.innerWidth)
  },
  methods: {
    next(){
      const activeSlide = document.querySelector(`.active`)
      if(activeSlide.nextElementSibling){
        activeSlide.classList.remove('active')
        activeSlide.nextElementSibling.classList.add('active')
      } else {
        const firstSlide = document.querySelector(`.screen-reviews--item:first-child`)
        activeSlide.classList.remove('active')
        firstSlide.classList.add('active')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.screen-reviews{
  overflow: hidden;
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
    @media(min-width:768px){
      font-size: 56px;
    }
  }
  button{
    background: none;
    border: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    text-transform: capitalize;
    color: #DC5750;
    padding: 0;
    @media(max-width:767px){
      margin-left: auto;
      display: block;
    }
    svg{
      margin-left: 4px;
      transition: transform .5s ease;
    }
    &:hover{
      svg{transform: rotate(45deg);}
    }
    &:active{
      svg{transform: rotate(45deg) scale(1.3);}
    }
  }
  &--row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin-bottom: 32px;
  }
  &--slider{
    min-height: 330px;
    position: relative;
    width: calc(100% - 32px);
    @media(min-width:992px){
      width: 1000px;
      min-height: 349px;
    }
  }
  &--item{
    width: 100%;
    max-width: calc(100% - 32px);
    background: #DC5750;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(calc(200% + 64px));
    opacity: 0;
    transition: transform 1s ease .5s, opacity .5s ease;
    @media(max-width:991px){
      flex-direction: column;
      padding-top: 55px;
      background: none;
      overflow: visible;
    }
    @media(min-width:992px){
      max-width: 1000px;
    }
    &.active{
      transform: translateX(0);
      opacity: 1;
      transition: transform 1s ease, opacity .5s ease;
      & + .screen-reviews--item{
        transform: translateX(calc(100% + 32px));
        opacity: 1;
        transition: transform 1s ease, opacity .5s ease;
      }
    }
    img{
      width: 100%;
      @media(max-width:991px){
        border-radius: 10px;
      }
      @media(min-width:992px){
        width: calc(100% - 344px);
      }
    }
  }
  &--info{
    width: 100%;
    padding: 16px;
    @media(max-width:991px){
      background: #DC5750;
      border-radius: 0px 0px 10px 10px;
      margin-top: -8px;
      display: flex;
      justify-content: space-between;
    }
    @media(min-width:992px){
      width: 344px;
      padding: 32px;
    }
  }
  h3{
    font-weight: 600;
    font-size: 20px;
    line-height: 130%;
    color: #FAFAFA;
    @media(max-width:991px){
      position: absolute;
      top: 0; left: 0;
      color: #0E0E11;
    }
  }
  h4{
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    color: #FAFAFA;
    margin-bottom: 23px;
    @media(max-width:991px){
      position: absolute;
      top: 22px; left: 0;
      color: #0E0E11;
    }
  }
  h5{
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #FAFAFA;
    @media(min-width:992px){
      font-size: 16px;
    }
  }
  &--money{
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    @media(min-width:992px){
      font-size: 56px;
      line-height: 73px;
    }
    span{
      font-size: 16px;
      font-weight: 400;
      line-height: 23px;
      @media(min-width:992px){
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
  &--monthes{
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    @media(min-width:992px){
      margin-top: 23px;
      font-size: 56px;
      line-height: 73px;
    }
    span{
      font-size: 20px;
      font-weight: 400;
      line-height: 26px;
      @media(min-width:992px){
        font-size: 32px;
        line-height: 42px;
      }
    }
  }
  &--left, &--right{
    @media(max-width:576px){
      width: calc(50% - 8px);
    }
    @media(max-width:991px){
      width: calc(50% - 16px);
    }
  }
}
</style>