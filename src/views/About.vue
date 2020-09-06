<template>
  <div id="dashboard">
    <transition name="fade">
    </transition>
    <section>
      <div class="col1">
        <div class="profile">
          <h5>{{ userProfile.name }}</h5>
          <p>{{ userProfile.title }}</p>
        </div>
      </div>
      <div class="col2">
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore officia voluptas eos beatae quaerat nostrum et velit impedit sit at sint suscipit, quo necessitatibus voluptate provident tenetur. Aliquid earum nulla optio expedita quasi architecto deserunt, facere neque. Reiciendis, ipsa at ex perspiciatis laborum possimus minus ut minima repellat dolorum, quis eos dolores eaque voluptatem laudantium inventore sunt, consequuntur cumque! Dolorem officia, alias tempore labore eius ipsam quos debitis doloremque in voluptates ipsum quisquam vitae similique sint necessitatibus facere sapiente. Corporis quos vel, et repellendus obcaecati ut dicta eaque veniam cum eum voluptatem impedit. Eius sequi alias itaque dignissimos incidunt.</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sunt laudantium nisi asperiores exercitationem eligendi voluptatum ducimus assumenda corrupti perspiciatis cumque sint amet ullam quae nesciunt nobis, facilis quasi odio tenetur? Accusamus nisi accusantium, ratione corporis, voluptate obcaecati sequi officiis, temporibus nihil perspiciatis error ea voluptatum eius sed animi. Blanditiis tempora aperiam corporis aspernatur tempore quibusdam omnis impedit laborum voluptatum ducimus, voluptas sunt, labore quo eius? Temporibus sint aspernatur magnam quis asperiores, possimus veniam quisquam iste blanditiis maxime ab! Dolores, consequuntur nam quasi praesentium possimus modi perspiciatis dolore doloremque voluptatibus fugit fuga laudantium. Ad quam fugiat voluptatem explicabo vel voluptatum.</span>
      </div>
    </section>

  </div>
</template>

<script>
import { commentsCollection } from '@/firebase'
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      post: {
        content: ''
      },
      showPostModal: false,
      fullPost: {},
      postComments: []
    }
  },
  computed: {
    ...mapState(['userProfile', 'posts'])
  },
  methods: {
  
  },
  filters: {
  }
}
</script>

<style lang="scss" scoped>

</style>
