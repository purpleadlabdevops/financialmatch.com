<template>
  <div class="gn">
    <h2>You may qualify for up to {{ money | format }}</h2>
    <ul>
      <li>There is No Wait or Hold Time To Speak With Our ERC Filing Expert</li>
      <li>Find Out Exactly How Much You Can Get From the IRS</li>
      <li>No Upfront Fees, No Credit Check, Not a Loan</li>
    </ul>
    <svg class="timer" width="55" height="61" viewBox="0 0 55 61" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 9.00858V2M27.5 2H20M27.5 2H35M27.5 20.0221V33.4688H39.7995M53 33.4688C53 47.5693 41.5833 59 27.5 59C13.4167 59 2 47.5693 2 33.4688C2 19.3682 13.4167 7.9375 27.5 7.9375C41.5833 7.9375 53 19.3682 53 33.4688Z" stroke="#106b70" stroke-width="3"/>
      <path d="M27.5 9.00858V2M27.5 2H20M27.5 2H35M27.5 20.0221V33.4688H39.7995M53 33.4688C53 47.5693 41.5833 59 27.5 59C13.4167 59 2 47.5693 2 33.4688C2 19.3682 13.4167 7.9375 27.5 7.9375C41.5833 7.9375 53 19.3682 53 33.4688Z" stroke="#106b70" stroke-width="3"/>
      <path d="M27.5 9.00858V2M27.5 2H20M27.5 2H35M27.5 20.0221V33.4688H39.7995M53 33.4688C53 47.5693 41.5833 59 27.5 59C13.4167 59 2 47.5693 2 33.4688C2 19.3682 13.4167 7.9375 27.5 7.9375C41.5833 7.9375 53 19.3682 53 33.4688Z" stroke="#106b70" stroke-width="3"/>
    </svg>
    <p class="text-timer">
      This Spot Will Be Available for <b>{{ time }} Seconds</b>
    </p>
    <a @click="setCall" :href="`tel:${phone}`">{{phone | number}}</a>
    <p>Thousands of People Have Called, Received Checks Directly from the IRS, and Got Approved for the ERC Program - The Last Stimulus Plan Available to Business Owners Under the CARES Act</p>
  </div>
</template>
<script>
export default {
  head: {
    script: [
      {
        ssr: false,
        src: '/js/snap.js',
        async: true,
        hid: 'script_snaptr',
        callback: () => {
            snaptr('init', 'dbf21719-ebb7-43a4-a152-0b3ec1f7e0c1', {
                'user_email': '__INSERT_USER_EMAIL__'
            });
            snaptr('track', 'SIGN_UP');
        }
      }
    ]
  },
  data() {
    return {
      time: 90
    }
  },
  methods: {
    setCall() {
      EF.conversion({
        offer_id: 1,
        event_id: 10
      })
        .then(res => {
          console.dir(res)
          return EF.conversion({
            offer_id: 1
          })
        })
        .then(res => {
          console.dir(res)
        })
    },
    timer() {
      const inteval = setInterval(()=>{
        this.time--
      }, 1000);
      setTimeout(() => {
        clearInterval(inteval)
        location.reload()
      }, this.time * 1000);
    }
  },
  filters: {
    format: rangep => `${rangep}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,'),
    number(tel){
      const newTel = tel.match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/)
      return `(${newTel[2]}) ${newTel[3]}-${newTel[4]}`
    }
  },
  computed: {
    phone() {
      return this.$store.state.phone
    },
    result() {
      return this.$store.state.result
    },
    money() {
      return this.$store.state.result > 1
        ? `$${this.$store.state.result * 26000}`
        : false
    }
  },
  mounted(){
    this.timer()
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
.gn{
  max-width: 768px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  h2 {
    font-weight: 700;
    font-size: 19px;
    color: #000;
    line-height: 1.2;
    margin-bottom: 15px;
    @media(min-width:768px){
      font-size: 22px;
      margin-bottom: 30px;
    }
    @media(min-width:992px){
      font-size: 34px;
    }
  }
  ul {
    padding: 0;
    margin: 0 auto 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: #8b692e;
    text-align: left;
    list-style-type: disc;
    max-width: 430px;
    @media (min-width: 768px) {
      font-size: 20px;
      margin: 0 auto 30px;
    }
    &.list{
      margin: 15px auto 0px;
      font-size: 12px;
      color: #000;
      max-width: 260px;
      @media (min-width: 768px) {
        font-size: 14px;
      }
    }
    li{
      &:not(:first-child){
        margin-top: 4px;
        @media (min-width: 768px) {
          margin-top: 10px;
        }
      }
    }
  }
  .timer {
    margin-bottom: 5px;
    height: auto;
    width: 30px;
    @media(min-width:768px){
      margin-bottom: 30px;
      width: 55px;
    }
  }
  b {
    font-weight: 700;
  }
  p {
    font-size: 16px;
    color: #000;
    line-height: 1.2;
    &:last-child {
      font-weight: 500;
      font-size: 14px;
      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
  a {
    max-width: 580px;
    width: 100%;
    font-weight: 700;
    margin: 0 auto;
    font-size: 23px;
    background: #106b70;
    border-radius: 10px;
    padding: 26px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    margin-bottom: 30px;
    transition: 1s;
    img {
      padding-left: 20px;
    }
    &:hover {
      transition: 1s;
      transform: scale(0.9);
    }
  }
}
</style>