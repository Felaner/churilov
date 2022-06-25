<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Навигационное меню"</h2>
    <v-text-field
      label="Номер телефона"
      v-model="data.phone"
      required
    ></v-text-field>
    <v-btn color="success" @click="$emit('saveData', 'navbar', this.data)">Сохранить</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'EditNavbar',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.navbar
    this.loading = false
  },
  methods: {
    async saveData () {
      await this.$store.dispatch('updateTexts', { block: 'navbar', docData: this.data })
      this.$notify({ type: 'success', text: 'Сохранено' })
    }
  }
}
</script>

<style scoped>

</style>
