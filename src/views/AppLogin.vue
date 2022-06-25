<template>
  <v-container>
    <v-row justify="center">
      <v-card class="mt-16 pa-3">
        <v-card-title>Вход в административную панель</v-card-title>
        <v-card-content>
          <v-form
            v-model="valid"
            lazy-validation
          >

            <v-text-field
              label="E-mail"
              name="email"
              v-model="email"
              :rules="emailRules"
              clearable
              required
            ></v-text-field>

            <v-text-field
              label="Пароль"
              name="password"
              v-model="password"
              :type="passwordShow ? 'text' : 'password'"
              :rules="passwordRules"
              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
              counter="counter"
              @click:append="passwordShow = !passwordShow"
              required
            ></v-text-field>

            <v-btn
              color="success"
              class="mr-4"
              @click="login"
              :disabled="!valid"
            >
              Войти
            </v-btn>
          </v-form>
        </v-card-content>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>

import messages from '@/utils/messages'

export default {
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'Введите e-mail',
      v => /.+@.+\..+/.test(v) || 'Некорректный e-mail'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => v.length >= 8 || 'Минимум 8 символов'
    ],
    passwordShow: false
  }),

  mounted () {
    if (messages[this.$route.query.message]) {
      this.$notify({ type: 'error', text: messages[this.$route.query.message] })
    }
  },

  methods: {
    async login () {
      const { email, password } = this
      try {
        await this.$store.dispatch('login', { email, password }).then(() => {
          this.$router.push('/admin')
          this.$notify({ type: 'success', text: 'Вход выполнен' })
        })
      } catch (e) {}
    }
  }
}
</script>

<style scoped>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
  }
</style>
