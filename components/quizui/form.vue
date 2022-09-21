<template>
  <form @submit.prevent="submit" class="form">
    <div
      class="form-progress"
      :style="`width: ${((step + 1) * 100) / (quiz.length + 1)}%`"
    ></div>
    <div
      class="step"
      v-for="(item, i) in quiz"
      v-show="step === i && !notQualify"
    >
      <h2 class="form-question" v-html="item.question"></h2>
      <h3 v-if="step === 0">
        <svg
          width="17"
          height="23"
          viewBox="0 0 17 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5306 1.22407C6.19336 0.0793971 -9.40939 2.75616 10.8777 22.6206M9.29278 14.5903C9.328 16.6859 9.68373 21.2153 10.8249 22.5678C9.59215 21.8458 5.38329 20.5602 2.68891 20.296"
            stroke="#75A7EF"
          />
        </svg>
        Please Select One
        <svg
          width="18"
          height="23"
          viewBox="0 0 18 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.999659 1.22407C11.3369 0.0793971 26.9397 2.75616 6.65257 22.6206M8.2375 14.5903C8.20227 16.6859 7.84655 21.2153 6.7054 22.5678C7.93812 21.8458 12.147 20.5602 14.8414 20.296"
            stroke="#75A7EF"
          />
        </svg>
      </h3>
      <div class="form-options" v-if="item.options === 'Number'">
        <select v-model="number">
          <option disabled value="">Choose one</option>
          <option :value="i" v-for="i in item.max">{{ i }}</option>
          <option :value="+item.max + 1">{{ item.max + '+' }}</option>
        </select>
        <div class="buttons">
          <button
            @click.prevent="chooseAnswer(number, i)"
            :key="number"
            class="yellow"
            v-if="number"
          >
            Submit
          </button>
          <button class="back" @click.prevent="stepBack">
            <img src="@/assets/img/arrow-back.svg" />
          </button>
        </div>
      </div>
      <div class="form-options" v-else>
        <button
          v-for="option in item.options"
          @click.prevent="chooseAnswer(option, i)"
          :key="option"
        >
          {{ option }}
        </button>
      </div>
    </div>
    <div class="step" v-if="step === quiz.length && !notQualify">
      <h2>Enter info below to get your results.</h2>
      <input
        type="text"
        placeholder="Company Name"
        v-model="company"
        required
        id="company"
      />
      <input
        type="text"
        placeholder="First Name"
        v-model="first_name"
        required
        id="first_name"
      />
      <input
        type="text"
        placeholder="Last Name"
        v-model="last_name"
        required
        id="last_name"
      />
      <input
        type="email"
        placeholder="Email"
        v-model="email"
        required
        id="email"
      />
      <input
        type="tel"
        @input="phoneNumberInput"
        placeholder="Phone"
        v-model="phone"
        minlength="8"
        maxlength="14"
        required
        id="phone"
      />
      <input type="submit" value="Submit" :disabled="spinner" />
    </div>
    <div class="step" v-if="notQualify">
      <h2>You Do Not Qualify for ERC</h2>
      <p>
        Unfortunately based on your answers, it appears that you do not qualify
        for the Employee Retention Tax Credit program.
      </p>
    </div>

    <input
      ref="leadid_token"
      id="leadid_token"
      name="universal_leadid"
      type="hidden"
    />
    <div class="spinner" v-if="spinner">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      spinner: false,
      step: 0,
      number: '',
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      company: null,
      quiz: [
        {
          question: 'I had W2 Employees in 2020 or 2021',
          options: ['Yes', 'No'],
          answer: null,
          id: 'paid_w2_wages_20_21',
        },
        {
          question: 'How Many W2 Employees<br> Do You Have?',
          options: 'Number',
          min: 1,
          max: 100,
          answer: null,
          id: 'data3',
        },
        {
          question:
            'Did You Experience a Supply Chain Disruption<br> in 2020 or 2021?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'data4',
        },
        {
          question:
            'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
          options: ['Yes', 'No'],
          answer: null,
          id: 'data5',
        },
        {
          question: 'Did You Receive PPP Money',
          options: ['Yes', 'No'],
          answer: null,
          id: 'pppMoney',
        },
        // {
        //   question: 'Who is Your Payroll Provider?',
        //   options: [
        //     'Gusto',
        //     'Paychex',
        //     'ADP',
        //     'Trinet',
        //     'Quickbooks',
        //     'Other/Don’t Know',
        //   ],
        //   answer: null,
        //   id: 'payrollProvider'
        // }
      ],
      lead_source: null,
      source: 'everflow',
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      c1: '',
      c2: '',
      c3: '',
      c4: '',
      sub1: '',
      sub2: '',
      sub3: '',
      sub4: '',
    }
  },
  mounted() {
    this.lead_source = window.location.origin
    if (this.$route.query.utm_source)
      this.utm_source = this.$route.query.utm_source
    if (this.$route.query.utm_medium)
      this.utm_medium = this.$route.query.utm_medium
    if (this.$route.query.utm_campaign)
      this.utm_campaign = this.$route.query.utm_campaign
    if (this.$route.query.c1) this.c1 = this.$route.query.c1
    if (this.$route.query.c2) this.c2 = this.$route.query.c2
    if (this.$route.query.c3) this.c3 = this.$route.query.c3
    if (this.$route.query.c4) this.c4 = this.$route.query.c4
    if (this.$route.query.sub1) this.sub1 = this.$route.query.sub1
    if (this.$route.query.sub2) this.sub2 = this.$route.query.sub2
    if (this.$route.query.sub3) this.sub3 = this.$route.query.sub3
    if (this.$route.query.sub4) this.sub4 = this.$route.query.sub4
  },
  computed: {
    notQualify() {
      return (
        (this.quiz[0].answer === 'No' || this.quiz[1].answer) < 2 &&
        this.step > 1
      )
    },
    result() {
      return this.$store.state.result
    },
  },
  methods: {
    chooseAnswer(a, i) {
      if(this.step === this.quiz.length){
        this.submit()
      } else {
        this.quiz[i].answer = a
        this.step = this.step + 1
      }
      if(this.$route.name === 'call' && i === 4){
        this.$parent.route = this.$route.name
      }
      if (this.quiz[i].answer === 'No' && this.quiz[i].question !== 'Did You Receive PPP Money') {
        this.step = this.step + 2
      }
    },
    stepBack() {
      this.step = this.step - 1
    },
    phoneNumberInput(e) {
      let arr = e.target.value
        .replace(/[^\dA-Z]/g, '')
        .replace(/[\s]/g, '')
        .split('')
      this.phone = arr.toString().replace(/[,]/g, '')
    },
    setUrl(object){
      const api = process.env.NODE_ENV === 'production' ? `https://financialmatch.com` : `http://${process.env.API}`

      let urlParams = ''
      for(let item in object){
        urlParams += `${item}=${encodeURIComponent(object[item])}&`;
      }
      urlParams = urlParams.slice(0, -1);
      return `${api}/api/lead/?${urlParams}`
    },
    submit() {
      const em = this.quiz[1].answer
      this.spinner = true
      this.$store.commit('setResult', +em)

      if (this.quiz[0].answer === 'Yes' && em > 1) {

        sessionStorage.user = JSON.stringify({
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
          company: this.company,
          quiz: JSON.stringify(this.quiz)
        })

        const data = {
          firstname: this.first_name,
          lastname: this.last_name,
          email: this.email,
          phone: this.phone,
          company: this.company,
          data: JSON.stringify(this.quiz),
          lead_source: this.lead_source,
          utm_source: this.utm_source,
          utm_medium: this.utm_medium,
          utm_campaign: this.utm_campaign,
          c1: this.c1,
          c2: this.c2,
          c3: this.c3,
          c4: this.c4,
          ssid: this.$refs.leadid_token.value,
          ef_aff: this.c3,
          ef_sub1: this.sub1,
          ef_sub2: this.sub2,
          ef_sub3: this.sub3,
          ef_sub4: this.sub4,
          ef_trans: this.c1,
          source: this.source,
          optinurl: window.location.href
        }

        this.$axios.get(this.setUrl(data))
          .then(res => {
            if (res.data.status === 'error') {
              throw res.data.msg
            } else {
              return EF.conversion({
                offer_id: 1,
                value: 1,
                email: this.email
              })
            }
          })
          .then(res => {
            // if 5 or more
            if (em > 4) {
              return EF.conversion({
                offer_id: 1,
                event_id: 3
              })
            }
          })
          .then(res => {
            // if 2-4
            if (em > 1 && em < 5) {
              return EF.conversion({
                offer_id: 1,
                event_id: 4
              })
            }
          })
          .then(res => {
            console.log(this.$route.name);
            this.$parent.route = this.$route.name
          })
          .catch(err => {
            console.log(this.spinner);
            this.spinner = false
            console.log(this.spinner);
            this.$swal(err)
          })
          .finally(() => {
            this.spinner = false
          })
      }
    }
  },
  watch: {
    notQualify(val) {
      if (val) this.step = this.quiz.length
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  background: #dbeae9;
  border-radius: 15px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding: 30px 15px 60px;
  @media (min-width: 768px) {
    padding: 60px 30px 120px;
  }
  &-progress {
    background: rgb(39, 159, 150);
    height: 15px;
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    @media (min-width: 768px) {
      height: 30px;
    }
  }
  .spinner {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    svg {
      width: 50%;
      max-width: 10rem;
      animation: rotate 3.6s linear infinite;
    }
    circle {
      fill: none;
      stroke: #106b70;
      stroke-width: 8px;
      stroke-dasharray: 300;
      animation: outline 2s cubic-bezier(0.77, 0, 0.18, 1) infinite;
    }
  }
    @keyframes outline {
      0% {
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dashoffset: 300;
      }
      100% {
        stroke-dashoffset: 600;
      }
    }

    @keyframes rotate {
      from {
        transform: rotate(0turn);
      }
      to {
        transform: rotate(-1turn);
      }
    }

  &:before {
    content: '';
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 15px;
    @media (min-width: 768px) {
      height: 30px;
    }
  }
  &:after {
    content: '🔒 256-bit Secure Enscryption';
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    text-align: center;
    color: #181818;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    color: #181818;
    margin-bottom: 10px;
    @include xs {
      margin-top: 0;
    }
  }
  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.1;
    text-align: center;
    color: #181818;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      font-size: 16px;
    }
    svg {
      display: block;
      margin-left: 10px;
      &:first-child {
        margin-right: 15px;
        margin-left: 0;
      }
    }
  }
  &-options {
    .buttons {
      .back {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 15px;
        box-shadow: none;
      }
      @media (max-width: 767px) {
        display: flex;
        flex-direction: row-reverse;
        .back {
          flex: 1 30%;
        }
      }
    }
    button {
      border: none;
      font-weight: 500;
      font-size: 20px;
      line-height: 1.1;
      text-align: center;
      color: #59595a;
      background: #ffffff;
      box-shadow: 0px 4px 10px rgba(1, 1, 1, 0.3), 0px -4px 0px #f8f8f8 inset;
      border-radius: 15px;
      height: 60px;
      display: block;
      margin: 15px auto;
      width: 340px;
      max-width: 100%;
      transition: 0.5s ease-in-out;
      @media (min-width: 576px) {
        height: 74px;
        font-size: 23px;
      }
      @media (min-width: 768px) {
        height: 77px;
        width: 450px;
      }
      &:hover {
        outline: 2px solid #59595a;
      }
      &:active,
      &.active {
        background: #75a7ef !important;
        color: #fff !important;
        box-shadow: 0px 4px 10px #c7d6ed, 0px -4px 0px #75a7ef inset !important;
      }
      &.yellow {
        color: #fff;
        background: #fcd53f;
        box-shadow: 0px 4px 10px #c7d6ed, 0px -4px 0px #fbca38 inset;
      }
      @include xs {
        height: 50px;
      }
    }
  }
  input,
  select {
    display: block;
    margin: 0 auto;
    width: 450px;
    max-width: 100%;
    height: 77px;
    background: #ffffff;
    border: 2px solid rgb(39, 159, 150);
    border-radius: 15px;
    font-weight: 500;
    font-size: 23px;
    color: #59595a;
    padding: 0 30px;
    &:not(:first-child) {
      margin-top: 15px;
    }
    &::placeholder {
      color: #a4bce1;
    }

    &[type='submit'] {
      border: none;
      font-weight: 500;
      font-size: 23px;
      line-height: 26px;
      text-align: center;
      color: #fff;
      background: #fcd53f;
      box-shadow: 0px 4px 10px #c7d6ed, 0px -4px 0px #fbca38 inset;
      border-radius: 15px;
      height: 74px;
      display: block;
      margin: 15px auto;
      width: 450px;
      max-width: 100%;
      transition: 0.5s ease-in-out;
      @media (min-width: 768px) {
        height: 77px;
      }
      &:hover {
        outline: 2px solid #59595a;
      }
      &:active,
      &.active {
        background: #75a7ef;
        color: #fff;
        box-shadow: 0px 4px 10px #c7d6ed, 0px -4px 0px #75a7ef inset;
      }
      &.disabled, &:disabled {
        opacity: 0.5;
        cursor: wait;
      }
    }
  }
}
</style>
