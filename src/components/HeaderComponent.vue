<template>
  <nav>
    <table style="width: 100%">
      <colgroup>
        <col span="1" style="width: 20%" />
        <col span="1" style="width: 80%" />
      </colgroup>

      <!-- Put <thead>, <tbody>, and <tr>'s here! -->
      <tbody>
        <tr>
          <td>
            <Slide noOverlay id="burgermen">
              <a @click="this.$router.push({ path: '/' })">Home</a>
              <a @click="this.$router.push({ path: 'listPage' })">Scanned Products - History</a>
            </Slide>
          </td>
          <td>
            <h1>{{ this.title }}</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </nav>
</template>

<script>
import { Slide } from 'vue3-burger-menu'

export default {
  name: 'headerComponent',
  data() {
    return {
      isOpen: false
    }
  },
  components: {
    Slide // Register your component
  },
  props: {
    title: {
      type: String,
      default: null
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped>
h1 {
  background-color: rgba(72, 206, 197, 0.319);
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24pt;
  color: rgb(93, 93, 93);
}

#burgermen {
  position: fixed;
  top: 25px;
  left: 0px;
}
</style>
