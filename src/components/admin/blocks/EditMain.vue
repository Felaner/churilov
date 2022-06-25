<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Главный экран"</h2>
    <v-row>
      <v-col cols=12>
        <v-text-field
          label="Верхний текст"
          v-model="data.planing"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <h3>Текста, которые меняются</h3>
      </v-col>
      <v-col cols=4>
        <v-text-field
          label="Первый текст"
          v-model="this.data.change[0]"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=4>
        <v-text-field
          label="Второй текст"
          v-model="this.data.change[1]"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=4>
        <v-text-field
          label="Третий текст"
          v-model="this.data.change[2]"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=4>
        <v-text-field
          label="Первая часть заголовка"
          v-model="data.title_first"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=4>
        <v-text-field
          label="Стоимость в заголовке"
          v-model="data.title_price"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=4>
        <v-text-field
          label="Вторая часть заголовка"
          v-model="data.title_last"
          required
        ></v-text-field>
      </v-col>
      <v-col cols=12>
        <v-text-field
          label="Нижний текст"
          v-model="data.gost"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn color="success" @click="$emit('saveData', 'main', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditMain',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.main
    this.loading = false
  }
}
</script>

<style scoped>

</style>
