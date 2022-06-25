<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Экскурсия"</h2>
    <v-text-field
      label="Заголовок"
      v-model="data.title"
      required
    ></v-text-field>
    <v-text-field
      label="Подзаголовок"
      v-model="data.subtitle"
      required
    ></v-text-field>
    <v-btn color="success" @click="$emit('saveData', 'excursion', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditExcursion',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.excursion
    this.loading = false
  }
}
</script>

<style scoped>

</style>
