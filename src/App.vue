<template>
  <div id="app">
    <SiteNav v-if="showBars"></SiteNav>
    <router-view/>
    <Footer v-if="showBars"></Footer>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import SiteNav from '@/components/SiteNav'
import Footer from '@/components/Footer'

export default {
  components: {
    SiteNav,
    Footer
  },
  computed: {
    ...mapState(['userProfile']),
    showBars() {
      return Object.keys(this.userProfile).length > 1
    }
  }
}
</script>
<style scoped>
  #app{
    height: auto;
    min-height: 100%;
  }
</style>
