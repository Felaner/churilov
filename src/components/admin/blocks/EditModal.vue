<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Модальное окно"</h2>
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
    <v-btn color="success" @click="$emit('saveData', 'modal', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditModal',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.modal
    this.loading = false
  }
}
</script>

<style scoped>

</style>
