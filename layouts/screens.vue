<template>
  <div>
    <Transition>
      <ScreenPreload v-if="!loaded" />
    </Transition>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'screens',
  data(){
    return{
      loaded: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.loaded = true
    }, 500);
  }
}
</script>