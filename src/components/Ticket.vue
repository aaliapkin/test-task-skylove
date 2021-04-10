<template>
  <div class="ticket__wrapper">
    <section class="ticket__section">
      <div class="ticket__number">#12</div>
    </section>
    <section>
      <div class="user__wrapper">
        <div class="user__photo">
          <img src="assets/img/photo.jpg" alt="" />
        </div>
        <div class="user__name">Vladislav Nepomnyaschikh</div>
      </div>
    </section>
    <section>a</section>
    <section>a</section>
    <section>a</section>
    <section>a</section>
  </div>
</template>

<style scoped>
.ticket {
  &__wrapper {
    background: #fff;
    margin: 0 0 8px 0;
    display: grid;
    height: 60px;
    grid-template-columns: 1fr 3fr 5fr 3fr 3fr 3fr;
    align-items: center;
    padding: 5px 10px;
    font-size: 0.75rem;
  }

  &__number {
    background: #a9d86e;
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
  }
  &__photo {
  }
  &__name {
    color: #dcdcdc;
  }
}
</style>
