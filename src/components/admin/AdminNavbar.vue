<template>
  <v-app-bar
    theme="dark"
    class="position-relative"
  >
    <template v-slot:prepend v-if="isMobile">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Административная панель</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
      prepend-icon="mdi-export"
      variant="outlined"
      @click="logout"
    >
      Выйти
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="drawer"
    theme="dark"
    height="100%"
    absolute
  >
    <v-list density="compact" nav>
      <router-link to="/admin/dashboard" @click.stop="drawer = !drawer">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Панель" value="home"></v-list-item>
      </router-link>
      <router-link to="/admin/edit" @click.stop="drawer = !drawer">
        <v-list-item prepend-icon="mdi-forum" title="Редактирование" value="about"></v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AdminNavbar',
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout').then(() => {
          this.$router.push('/login?message=logout')
        })
      } catch (e) {}
    }
  },
  computed: {
    isMobile () {
      return window.innerWidth < 900
    }
  }
}
</script>

<style scoped lang="sass">
  a
    color: #ffffff
    text-decoration: none
</style>
