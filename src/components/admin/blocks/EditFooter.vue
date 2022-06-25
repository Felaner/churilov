<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Подвал"</h2>
    <v-text-field
      label="Год и название компании"
      v-model="data.years_and_company"
      required
    ></v-text-field>
    <v-textarea
      label="Текст"
      v-model="data.text"
      required
    ></v-textarea>
    <v-btn color="success" @click="$emit('saveData', 'footer', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditFooter',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.footer
    this.loading = false
  }
}
</script>

<style scoped>

</style>
