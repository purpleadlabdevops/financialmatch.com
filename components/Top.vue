<template>
  <section id="quiz" class="top">
    <div class="container">
      <ThanksMain v-if="route === 'index' || route === '10k' || route === 'cal' && result < 8 || route === 'calext' && result < 8" />
      <ThanksCur v-else-if="route === 'cur'" />
      <ThanksCall v-else-if="route === 'call' && result > 4" />
      <h2 v-else-if="route === 'call' && result < 5">Unfortunately, based on your answers it appears we can not help you at this time.</h2>
      <ThanksCal v-else-if="route === 'cal' && result > 7" />
      <ThanksCalext v-else-if="route === 'calext' && result > 7" />
      <div class="top__inner" v-else>
        <div class="top__questions-col">
          <quizui-formMain class="top__quiz" v-if="this.$route.name === 'index' || this.$route.name === '10k'" />
          <quizui-form class="top__quiz" v-else />
        </div>
        <div class="top__title-col">
          <h4 class="top__pre-title">Most Business Owners Don’t Realize They Can Qualify To</h4>
          <h1 class="top__title">“Get <span class="top__title-accented" v-html="this.$route.name === '10k' ? '$10,000': '$26,000'"></span> Cash for Each W2 Employee</h1>
          <h2 class="top__pre-title">Using the IRS’ ERC Program”</h2>
          <ul class="top__list">
            <li>Qualify 1 of 3 Different Ways (Revenue Reduction, Shutdowns, Supply Chain Disruptions)</li>
            <li>Get Money from the IRS, Even If You Got PPP</li>
            <li>No Cap on Refund. Ie. a 50 Employee Business Can Get $1.3 Million!</li>
            <li>No Up Front Fees. No Credit Check. Not a loan.</li>
          </ul>
          <h4 class="top__action-row">Take the 60sec Quiz to Find Out If You Qualify, and How Much You Can Get</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Top',
  data(){
    return {
      route: null
    }
  },
  computed: {
    result() {
      return this.$store.state.result
    }
  }
}
</script>

<style lang="scss">
.top {
  padding: 20px 0 60px;
  @include xs {
    padding: 10px 0 60px;
  }
}
.top__inner {
  display: flex;
  @include lg {
    flex-direction: column;
  }
}
.top__questions-col {
  width: calc(100% / 3);
  @include xl {
    width: 40%;
  }
  @include lg {
    width: 100%;
  }
}
.top__title-col {
  width: calc(100% / 3 * 2);
  padding: 20px 0px 0px 40px;
  @include xl {
    width: 60%;
  }
  @include lg {
    width: 100%;
    order: -1;
    padding: 0;
  }
}
.top__pre-title {
  font-weight: 400;
  font-size: 24px;
  margin: 0;
  @include sm {
    font-size: 20px;
  }
  @include xs {
    font-size: 16px;
  }
}
.top__title {
  font-size: 53px;
  font-weight: 700;
  line-height: 1.3em;
  margin: 0.2em 0 0;
  @include sm {
    font-size: 42px;
    margin: 0.5em 0 0;
  }
  @include xs {
    font-size: 26px;
    margin-top: 0.1em;
  }
}
.top__title-accented {
  color: #c1ab16;
  display: inline-block;
  position: relative;
  &:before {
    content: '';
    display: block;
    background: rgba(193, 171, 22, 0.5);
    position: absolute;
    left: -4%;
    bottom: 0;
    animation: 2s ease-out 0s 1 scalefromleft;
    width: 110%;
    height: 8px;
    transform: rotate(-2deg);
    border-radius: 2px;
    transform-origin: left center;
  }
}
@keyframes scalefromleft {
  from {
    width: 0;
  }
}
.top__list {
  font-size: 18px;
  font-weight: 400;
  list-style: none;
  padding-left: 20px;
  li {
    margin: 15px 0;
    padding-left: 36px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: url('@/assets/img/check-mark.svg') center no-repeat;
      background-size: contain;
    }
  }
  @include xs {
    padding-left: 0;
    li {
      font-size: 16px;
      padding-left: 30px;
      margin: 10px 0;
      line-height: 1.4;
      &:before {
        width: 20px;
        height: 20px;
      }
    }
  }
}
.top__action-row {
  color: $global_color_1;
  font-size: 22px;
  &:before {
    content: '\21E6';
    animation: bounce_h_2 3s infinite;
    display: inline-block;
    margin-right: 15px;
  }
  @include lg {
    &:before {
      animation: bounce_h_3 3s infinite;
      transform: rotate(-90deg);
    }
  }
  @include xs {
    font-size: 16px;
  }
}
@keyframes bounce_h_2 {
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(8px);
  }
  60% {
    transform: translateX(4px);
  }
}
@keyframes bounce_h_3 {
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateY(0) rotate(-90deg);
  }
  40% {
    transform: translateY(8px) rotate(-90deg);
  }
  60% {
    transform: translateY(4px) rotate(-90deg);
  }
}
.top__quiz {
  margin-bottom: -60px;
  z-index: 55;
  position: relative;
}
</style>
