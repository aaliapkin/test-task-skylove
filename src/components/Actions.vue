<template>
  <div class="actions__wrapper">
    <button class="btn" @click="showForm">Create ticket</button>
  </div>
</template>

<script>
export default {
  name: "Actions",
  methods: {
    showForm() {
      this.$emit("showForm")
    },
  },
}
</script>

<style scoped lang="scss">
.actions {
  &__wrapper {
    margin: 20px 0 0 0;
  }
}
</style>
