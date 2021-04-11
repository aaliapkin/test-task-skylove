<template>
  <div>
    <div class="form__overlay"></div>
    <div class="form__wrapper">
      <form v-on:submit="submitForm">
        <div class="form__layout">
          <h2 class="form__header">
            Новый тикет
          </h2>
          <label for="" class="form__label">Имя:</label>
          <input type="text" placeholder="" class="form__text" v-model="name" />
          <label for="" class="form__label">Email:</label>
          <input type="text" placeholder="" class="form__text" v-model="mail" />
          <label for="" class="form__label">Сообщение:</label>
          <textarea
            class="form__textarea"
            v-model="body"
            maxLength="1024"
            rows="3"
          />
          <label for="" class="form__label">Тип обращения:</label>
          <select class="form__select" v-model="type">
            <option
              v-for="item in typeList"
              :value="item.value"
              :key="item.id"
              >{{ item.value }}</option
            >
          </select>
          <label for="" class="form__label">Приоритет обращения:</label>
          <select class="form__select" v-model="priority">
            <option
              v-for="item in priorityList"
              :value="item.id"
              :key="item.id"
              >{{ item.value }}</option
            >
          </select>
          <label for="" class="form__label">Статус обращения:</label>
          <select class="form__select" v-model="status">
            <option
              v-for="item in statusList"
              :value="item.id"
              :key="item.id"
              >{{ item.value }}</option
            >
          </select>
          <div class="form__button-wrapper">
            <button class="btn btn-ok">Создать</button>
            <button class="btn btn-cancel" @click="closeForm">Отмена</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { TYPE_ENUM, PRIORITY_ENUM, STATUS_ENUM } from "js/model/item-model"

export default {
  name: "Form",

  data: function() {
    const typeList = TYPE_ENUM
    const priorityList = PRIORITY_ENUM
    const statusList = STATUS_ENUM

    return {
      name: "",
      mail: "",
      body: "",
      type: "",
      priority: 0,
      status: 0,
      typeList,
      priorityList,
      statusList,
    }
  },
  methods: {
    closeForm() {
      this.$emit("closeForm")
    },

    submitForm(e) {
      e.preventDefault()
      const payload = {
        user: {
          name: this.name,
          email: this.mail,
          avatar:
            "https://lh3.googleusercontent.com/ogw/ADGmqu9mwjd_DnKM_J5VCm0fPeUuIA1p-MU6rR7Fi0wV=s192-c-mo",
        },
        body_subject: this.body,
        subject: this.type,
        status: this.status,
        priority: this.priority,
        ticket_number: 1,
      }

      this.$emit("submitForm", payload)
      this.$emit("closeForm", payload)
    },
  },

  watch: {
    name() {
      this.name = this.name.replaceAll(/[^A-Za-zА-Яа-я\s]/g, "")
    },
  },
}
</script>

<style scoped lang="scss">
.form {
  &__wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 5px;
    padding: 30px;
    color: #9297a3;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);
    min-width: 40vw;
    z-index: 30;
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(49, 54, 63, 0.5);
    z-index: 25;
  }

  &__layout {
    display: flex;
    flex-direction: column;
  }

  &__header {
    color: #9297a3;
    font-size: 24px;
    margin: 0 0 20px 0;
  }

  &__button-wrapper {
    align-self: flex-start;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }

  &__label {
    font-size: 1rem;
    font-weight: normal;
    margin: 0 0 16px 0;
  }

  &__text,
  &__select {
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    justify-content: flex-start;
    background: #e7e8ec;
    margin: 0 0 16px 0;
  }

  &__textarea {
    height: 80px;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    justify-content: flex-start;
    background: #e7e8ec;
    margin: 0 0 16px 0;
    resize: none;
  }

  &__select {
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    font-weight: normal;
    margin: 0 0 32px 0;
  }
}
</style>
