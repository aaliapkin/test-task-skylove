<template>
  <div class="container">
    <List />
    <Form v-if="displayForm" @close="closeForm" />
    <Actions @showForm="showForm" />
  </div>
</template>

<script>
import List from "components/List"
import Form from "components/Form"
import Actions from "components/Actions"

export default {
  name: "App",
  data: function() {
    return {
      displayForm: false,
    }
  },
  components: {
    List,
    Form,
    Actions,
  },
  methods: {
    closeForm() {
      this.displayForm = false
    },
    showForm() {
      this.displayForm = true
    },
  },
}
</script>
