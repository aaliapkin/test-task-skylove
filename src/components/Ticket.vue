<template>
  <div class="ticket__wrapper">
    <section class="ticket__section">
      <div
        class="ticket__number"
        v-bind:style="{ background: item.getStatus().color }"
      >
        #{{ item.ticket_number }}
      </div>
    </section>
    <section>
      <div class="user__wrapper">
        <div class="user__photo">
          <img :src="imagesSource" alt="" class="user__photo-img" />
        </div>
        <div class="user__name">{{ item.user.name }}</div>
      </div>
    </section>
    <section>
      <div class="ticket__message message__wrapper">
        <header class="message__header">
          Тип обращения:
          <span
            class="message__type"
            v-bind:style="{ color: item.getStatus().color }"
            >{{ item.subject }}</span
          >
        </header>
        <article class="message__text">
          {{ item.body_subject }}
        </article>
      </div>
    </section>
    <section class="message__status">
      <span
        class="message__circle"
        v-bind:style="{ background: item.getStatus().color }"
      ></span>
      {{ item.getStatus().value }}
    </section>
    <section>{{ item.getPriority().value }}</section>
    <section>31.03.2021, 10.04</section>
  </div>
</template>
<script>
import ItemModel from "js/model/item-model"
// Why should i do it this way??? vue-loader is pile of giraffe shit
import img from "assets/img/photo.png"

export default {
  name: "Ticket",
  props: {
    item: {
      type: ItemModel,
      required: true,
    },
  },

  computed: {
    imagesSource: () => img,
  },
}
</script>

<style scoped lang="scss">
.ticket {
  &__wrapper {
    background: #fff;
    color: #c5c5c5;
    margin: 0 0 8px 0;
    display: grid;
    height: 60px;
    grid-template-columns: 1fr minmax(0, 4fr) 6fr 3fr 3fr 3fr;
    grid-gap: 4px;
    align-items: center;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 400;
  }

  &__number {
    background: #ff6c60;
    padding: 4px;
    border-radius: 2px;
    color: #fff;
    margin: auto;
    display: inline-block;
  }
}

.user {
  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__photo {
    margin: 0 4px 0 0;
    &-img {
      width: 32px;
      height: 32px;
      object-fit: cover;
    }
  }

  &__name {
    color: #dcdcdc;
  }
}

.message {
  &__wrapper {
    background: #f6f6f6;
    border-left: 3px #dcdcdc solid;
    display: flex;
    flex-direction: column;
    padding: 4px;
    overflow: hidden;
  }

  &__header {
    font-size: 0.825rem;
    margin-bottom: 4px;
  }

  &__text {
    font-size: 0.825rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__status {
    position: relative;
    padding: 0 0 0 12px;
  }

  &__circle {
    content: "";
    top: 50%;
    left: 0px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    position: absolute;
    transform: translate(0, -50%);
    background: #ff6c60;
  }

  &__type {
    color: #ff6c60;
    font-weight: 600;
  }
}
</style>
