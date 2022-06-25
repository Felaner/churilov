<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-xxl-2 col-lg-3 col-12 offset-xxl-1 d-flex flex-lg-column justify-lg-center flex-sm-row justify-sm-between flex-column">
          <p>{{ block.years_and_company }}</p>
          <p>Все права защищены</p>
          <p>Политика конфиденциальности</p>
        </div>
        <div class="col-xxl-8 col-lg-9 col-12">
          <p class="footer-text">{{ block.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  props: ['block']
}
</script>

<style scoped lang="sass">
  .footer
    padding: 30px 0
    background: #000000
    color: #ffffff
    p
      font-family: "Muller Regular"
      font-size: 14px
      margin: 8px 0
    .footer-text
      line-height: 27px
      font-size: 12px

  //@media (max-width: 1399.98px)

  //@media (max-width: 1199.98px)

@media (max-width: 991.98px)

@media (max-width: 767.98px)
  .footer
    p
      font-size: 12px

@media (max-width: 575.98px)
  .footer
    p
      text-align: center
</style>
