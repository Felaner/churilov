<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Отзывы"</h2>
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
        <h3>Отзывы</h3>
      </v-col>

      <v-col cols="12" md="6" lg="4" v-for="(item, index) of data.slides" :key="index">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Имя"
              v-model="data.slides[index].name"
              required
            ></v-text-field>
            <v-text-field
              label="Адрес"
              v-model="data.slides[index].address"
              required
            ></v-text-field>
            <v-textarea
              label="Отзыв"
              v-model="data.slides[index].text"
              required
            ></v-textarea>
            <v-btn
              color="error"
              width="100%"
              class="mb-3"
              @click="removeReview(index)"
            >Удалить отзыв</v-btn>
          </v-card-content>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="4">
        <v-card>
          <v-card-content>
            <v-text-field
              label="Имя"
              v-model="newReview.name"
              required
            ></v-text-field>
            <v-text-field
              label="Адрес"
              v-model="newReview.address"
              required
            ></v-text-field>
            <v-textarea
              label="Отзыв"
              v-model="newReview.text"
              required
            ></v-textarea>
            <v-btn
              color="success"
              width="100%"
              class="mb-3"
              @click="addReview"
            >Добавить отзыв</v-btn>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
    <v-btn class="mt-6" color="success" @click="$emit('saveData', 'reviews', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>

export default {
  name: 'EditReviews',
  data () {
    return {
      loading: true,
      data: '',
      newReview: {
        avatar: '',
        name: '',
        address: '',
        text: ''
      }
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.reviews
    this.loading = false
  },
  methods: {
    clearData () {
      this.newReview = {
        avatar: '',
        name: '',
        address: '',
        text: ''
      }
    },
    async addReview () {
      await this.data.slides.push(this.newReview)
      this.clearData()
    },
    removeReview (index) {
      this.data.slides.splice(index, 1)
      this.$notify({ type: 'success', text: 'Отзыв удален' })
    }
  }
}
</script>

<style scoped>

</style>
