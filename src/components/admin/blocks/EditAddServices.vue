<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Дополнителье услуги"</h2>
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
    <v-row>
      <v-col cols="12">
        <h3>Услуги</h3>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) of data.cards" :key="index">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Верхний заголовок"
              v-model="data.cards[index].title_first"
              required
            ></v-text-field>
            <v-text-field
              label="Нижний заголовок"
              v-model="data.cards[index].title_last"
              required
            ></v-text-field>
          </v-card-content>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-text-field
          label="Второй заголовок"
          v-model="data.second_title"
          required
        ></v-text-field>
        <v-text-field
          label="Второй подзаголовок"
          v-model="data.second_subtitle"
          required
        ></v-text-field>
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
    <v-btn class="mt-6" color="success" @click="$emit('saveData', 'add_services', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditAddServices',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.add_services
    this.loading = false
  }
}
</script>

<style scoped>

</style>
