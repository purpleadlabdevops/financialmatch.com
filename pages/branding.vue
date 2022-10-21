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
export default {
  layout: 'branding',
  head: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap", rel: "stylesheet" }
    ]
  }
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