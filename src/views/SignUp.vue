<template>
  <div id="login">
    <section v-if="!spinnerIsActive">
      <div class="col2 signup-form">

        <form  @submit.prevent>
          <h1>Get Started</h1>
          <div>
            <label for="name">Name</label>
            <input v-model.trim="signupForm.name" type="text" placeholder="Savvy Apps" id="name" />
          </div>
          <div>
            <label for="title">Title</label>
            <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
          </div>
          <div>
            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />
          </div>
          <div>
            <label for="password2">Password</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 characters" id="password2" />
          </div>
          <button @click="signup()" class="button">Sign Up</button>
          <div class="extras">
            
            <router-link to="/sign-in">Back to Log In</router-link>
          </div>
        </form>
      </div>
    </section>
     <Spinner v-else />
  </div>
</template>

<script>

import Spinner from '@/components/Spinner'

export default {
  components:{
    Spinner
  },
  data() {
    return {
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      spinnerIsActive: false
    }
  },
  methods: {
    signup() {
      this.spinnerIsActive = true
      this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
      }).then(() => this.spinnerIsActive = false)
    }
  }
}
</script>
