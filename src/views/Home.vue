<template lang="pug">
 #home
   b-container
     b-row
       b-col(cols="12")
         h1 {{ current }}
         h2 {{ timetext }}
</template>

<script>
export default {
  name: 'Home',
  computed: {
    current () {
      return this.$store.state.current
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    alarm () {
      return this.$store.state.alarm
    },
    todos () {
      return this.$store.state.todos
    }
  }
}
</script>
