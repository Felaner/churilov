<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Форма"</h2>
    <v-text-field
      label="Верхний текст заголовка"
      v-model="data.title_first"
      required
    ></v-text-field>
    <v-text-field
      label="Нижний текст заголовка"
      v-model="data.title_last"
      required
    ></v-text-field>
    <v-text-field
      label="Текст кнопки"
      v-model="data.button"
      required
    ></v-text-field>
    <v-btn color="success" @click="$emit('saveData', 'form_block', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.form_block
    this.loading = false
  }
}
</script>

<style scoped>

</style>
