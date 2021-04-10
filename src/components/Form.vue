<template>
  <div>
    <div class="form__overlay"></div>
    <div class="form__wrapper">
      <form>
        <div class="form__layout">
          <h2 class="form__header">
            Новый тикет
          </h2>
          <label for="" class="form__label">Имя:</label>
          <input type="text" placeholder="" class="form__text" />
          <label for="" class="form__label">Email:</label>
          <input type="text" placeholder="" class="form__text" />
          <label for="" class="form__label">Сообщение:</label>
          <input type="text" placeholder="" class="form__text" />
          <label for="" class="form__label">Тип обращения:</label>
          <select class="form__select">
            <option value="">--Please choose an option--</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
          <div class="form__button-wrapper">
            <button class="btn btn-ok">Создать</button>
            <button class="btn btn-cancel">Отмена</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  methods: {
    closeForm() {
      this.$emit("close")
    },
  },
}
</script>

<style scoped>
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

  &__select {
    font-size: 1rem;
    font-family: Montserrat, sans-serif;
    font-weight: normal;
    margin: 0 0 32px 0;
  }
}
</style>
