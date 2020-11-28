<template lang="pug">
 #settings
   b-container
     b-row
       b-col(cols="12")
         b-table(:items="items")
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      items: [
        {
          name: '鬧鈴',
          file: 'alarm.mp3'
        },
        {
          name: 'yay',
          file: 'yay.mp3'
        }
      ]
    }
  }
}
</script>
