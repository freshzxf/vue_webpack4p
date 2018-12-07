<style scoped>
  /*@import 'styles/common.css';*/
</style>
<template>
  <div>

    <router-view></router-view>

  </div>
</template>
<script>

export default {
  data () {
    return {}
  },

  components: {},
  mounted () {

  },
  beforeDestroy () {

  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>
