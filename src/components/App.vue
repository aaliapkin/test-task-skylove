<template>
  <div class="container">
    <List :list="list" />
    <Form v-if="displayForm" @closeForm="closeForm" @submitForm="submitForm" />
    <Actions @showForm="showForm" />
  </div>
</template>

<script>
import List from "components/List"
import Form from "components/Form"
import Actions from "components/Actions"
import ItemModel from "js/model/item-model"

export default {
  name: "App",
  data: function() {
    return {
      list: [],
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
    submitForm(payload) {
      this.list.push(new ItemModel(payload))
    },
  },

  created() {
    this.list = [
      new ItemModel({
        user: {
          name: "Василий Васильев",
          email: "vasya@gmail.com",
          avatar:
            "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo",
        },
        body_subject: "text text",
        subject: "Оплата",
        status: 0,
        priority: 0,
        ticket_number: 1,
      }),
      new ItemModel({
        user: {
          name: "Василий Васильев",
          email: "vasya@gmail.com",
          avatar:
            "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo",
        },
        body_subject: "text text",
        subject: "Оплата",
        status: 1,
        priority: 2,
        ticket_number: 2,
      }),
      new ItemModel({
        user: {
          name: "Василий Васильев",
          email: "vasya@gmail.com",
          avatar:
            "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo",
        },
        body_subject: "text text",
        subject: "Жалоба на приложение",
        status: 3,
        priority: 1,
        ticket_number: 3,
      }),
    ]
  },
}
</script>
