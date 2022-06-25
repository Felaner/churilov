<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Этапы работ"</h2>
    <v-text-field
      label="Заголовок"
      v-model="data.title"
      required
    ></v-text-field>
    <v-textarea
      label="Подзаголовок"
      v-model="data.subtitle"
      required
    ></v-textarea>
    <v-row>
      <v-col cols="12">
        <h3>Этапы</h3>
      </v-col>
      <v-col cols="12" lg="4" md="6" v-for="(item, index) of data.step" :key="index">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Заголовок"
              v-model="data.step[index].title"
              required
            ></v-text-field>
            <v-text-field
              label="Верхний текст"
              v-model="data.step[index].subtitle_first"
              required
            ></v-text-field>
            <v-text-field
              label="Нижний текст"
              v-model="data.step[index].subtitle_last"
              required
            ></v-text-field>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-6" color="success" @click="$emit('saveData', 'steps', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditSteps',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.steps
    this.loading = false
  }
}
</script>

<style scoped>

</style>
