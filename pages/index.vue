<template>
  <main class="branding">
    <BrandingHeader />
    <BrandingBanner />
    <BrandingAdvantages />
    <BrandingService />
    <BrandingIndustries />
    <BrandingFillings />
    <BrandingWorks />
    <BrandingFaq />
    <BrandingFooter />
  </main>
</template>
<script>
export default{
  layout: 'branding'
}
</script>
<style lang="scss">
.branding, .branding *{
  font-family: 'Montserrat', sans-serif;
  .container {
    max-width: 1330px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>