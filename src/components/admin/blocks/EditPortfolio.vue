<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Портфолио"</h2>
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
      <v-col cols="12" sm="6">
        <v-text-field
          label="Текст перед ссылкой на инстаграм"
          v-model="data.text"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Ссылка на инстаграм"
          v-model="data.instagram"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <h3>Карточка</h3>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Число"
          v-model="data.card.digit"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Текст"
          v-model="data.card.text"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <h3>Изображения</h3>
      </v-col>
      <v-col cols="12" lg="3" md="4" sm="6" v-for="(image, index) of data.images" :key="index">
        <v-img
          :src="image"
          width="100%"
          height="80%"
          cover
        />
        <v-btn
          width="100%"
          color="error"
          @click="removeImage(image, index)"
        >Удалить
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-file-input
          label="Загрузить изображение"
          accept="image/*"
          prepend-icon="mdi-camera"
          @change="imageUpload"
        ></v-file-input>
      </v-col>
      <v-col cols="12">
        <h3>Не забудьте сохранить!</h3>
      </v-col>
    </v-row>
    <v-btn class="mt-6" color="success" @click="$emit('saveData', 'portfolio', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../../../../server/keys'

export default {
  name: 'EditPortfolio',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.portfolio
    this.loading = false
  },
  methods: {
    async removeImage (image, index) {
      await axios.post(BASE_URL + 'api/image/remove', { image: image })
        .then(res => {
          this.data.images.splice(index, 1)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async imageUpload (event) {
      const selectedFile = event.target.files[0]
      const formData = new FormData()
      formData.append('file', selectedFile)
      await axios.post(BASE_URL + 'api/image/load', formData)
        .then(res => {
          this.data.images.push(res.data.path)
          this.$notify({ type: 'success', text: 'Изображение загружено' })
          event.target.clear()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="sass">
.v-img
  border: 1px solid black
</style>
