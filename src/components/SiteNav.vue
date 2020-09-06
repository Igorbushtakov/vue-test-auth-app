<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>Vue test application</h3>
        </router-link>
        <ul class="inline">
          <li>
            <router-link to="/">About</router-link>
          </li>
          <li>
            <router-link to="/settings">Profile</router-link>
          </li>
          <li><a @click="logout()">logout</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>
