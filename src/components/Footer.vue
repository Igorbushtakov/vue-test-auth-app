<template>
  <footer>
    <section>
      <div class="col1" style="width: 100%">
        <router-link to="/">
          <h3>Vue test application</h3>
        </router-link>
        <ul class="inline">
          <li class="date">{{getCurrentDate()}}</li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userProfile']),
    showBars() {
      return Object.keys(this.userProfile).length > 1
    }
  },
methods: {
getCurrentDate(){
    let clock = () => {
      const date = new Date(),
      year = date.getFullYear(),
      month = Number(date.getMonth()) < 9 ? `0${Number(date.getMonth()) + 1}` : Number(date.getMonth()) + 1,
      day = date.getDate(),
      hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
      minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
      seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();

      if(this.showBars) document.querySelector('.date').innerHTML = `${year}-${month}-${day} ${hours} : ${minutes} : ${seconds}`
    }
    setInterval(clock, 1000)   
}
}
}
</script>