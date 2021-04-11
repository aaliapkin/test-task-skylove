<template>
  <ul>
    <template v-for="item in list">
      <Ticket :item="item"></Ticket>
    </template>
  </ul>
</template>

<script>
import Ticket from "components/Ticket"

export default {
  name: "List",

  components: {
    Ticket,
  },

  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss"></style>
