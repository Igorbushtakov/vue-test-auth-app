<template>
  <div class="spinner">
    <PulseLoader :color="color" :size="size" />
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: {
    PulseLoader
  },
  data() {
    return {
      color: '#30A0EE',
      size: '20px'
    }
  }
}
</script>
<style scoped>
.spinner {
  margin-top: 15%;
  text-align: center;
  background-color: #E6ECF0;
}
</style>