<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Есть смета"</h2>
    <v-text-field
      label="Заголовок"
      v-model="data.title"
      required
    ></v-text-field>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          label="Первый текст"
          v-model="data.subtitle_one"
          required
        ></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-textarea
          label="Второй текст"
          v-model="data.subtitle_two"
          required
        ></v-textarea>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Верхний текст кнопки"
          v-model="data.button"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Нижний текст кнопки"
          v-model="data.button_small"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="success" @click="$emit('saveData', 'want', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditWant',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.want
    this.loading = false
  }
}
</script>

<style scoped>

</style>
