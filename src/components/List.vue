<template>
  <ul>
    <Ticket></Ticket>
    <Ticket></Ticket>
    <Ticket></Ticket>
    <Ticket></Ticket>
  </ul>
</template>

<script>
import Ticket from "components/Ticket"

export default {
  name: "List",
  components: {
    Ticket,
  },
}
</script>

<style scoped></style>
