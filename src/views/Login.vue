<template>
  <div id="login">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section v-if="!spinnerIsActive">
      <div class="col2">
        <form @submit.prevent>
          <h1>Welcome Back</h1>
          <div>
            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="you@email.com" id="email1" />
          </div>
          <div>
            <label for="password1">Password</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="******" id="password1" />
          </div>
          <button @click="login()" class="button">Log In</button>
          <div class="extras">
            <a @click="togglePasswordReset()">Forgot Password</a>
            <router-link to="/sign-up">Create an Account</router-link>
          </div>
        </form>
      </div>
    </section>
    <Spinner v-else />
  </div>
</template>

<script>
import PasswordReset from '@/components/PasswordReset'
import Spinner from '@/components/Spinner'

export default {
  components: {
    PasswordReset,
    Spinner
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      showPasswordReset: false,
      spinnerIsActive: false
    }
  },
  methods: {
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.spinnerIsActive = true
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      }).then(() => this.spinnerIsActive = false)
    }
  }
}
</script>
