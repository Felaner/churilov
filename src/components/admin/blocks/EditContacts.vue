<template>
  <v-form v-if="!loading">
    <h2 class="mb-6">Редактирование блока "Контакты"</h2>
    <v-text-field
      label="Заголовок"
      v-model="data.title"
      required
    ></v-text-field>
    <v-text-field
      label="Имя"
      v-model="data.name"
      required
    ></v-text-field>
    <v-text-field
      label="Должность"
      v-model="data.post"
      required
    ></v-text-field>
    <v-text-field
      label="Название компании"
      v-model="data.company_name"
      required
    ></v-text-field>
    <v-text-field
      label="Адрес"
      v-model="data.address"
      required
    ></v-text-field>
    <v-text-field
      label="Номер телефона"
      v-model="data.phone"
      required
    ></v-text-field>
    <v-textarea
      label="Текст"
      v-model="data.subtitle"
      required
    ></v-textarea>
    <v-text-field
      label="Номер телефона для whatsApp"
      v-model="data.whatsapp"
      hint="Введите номер телефона в таком же формате"
      required
    ></v-text-field>
    <v-text-field
      label="Ссылка на инстаграм"
      v-model="data.instagram"
      required
    ></v-text-field>
    <v-btn color="success" @click="$emit('saveData', 'contacts', this.data)">Сохранить</v-btn>
  </v-form>

</template>

<script>
export default {
  name: 'EditContacts',
  data () {
    return {
      loading: true,
      data: ''
    }
  },
  async beforeMount () {
    this.data = await this.$store.state.editData.contacts
    this.loading = false
  }
}
</script>

<style scoped>

</style>
