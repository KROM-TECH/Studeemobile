<template>
  <transition name="slide" appear>
    <div class="bg" v-if="showModal" @click="$emit('close')">
      <ion-card class="card">
        <!-- <img src="@/assets/mark.svg" class="img" alt="" /> -->
        <p>{{ Details }}</p>
      </ion-card>
    </div>
  </transition>
</template>

<script>
import { IonCard } from "@ionic/vue";
export default {
  components: { IonCard },
  name: "NotificationCards",
  props: ["showModal", "Details"],
};
</script>

<style scoped>
.bg {
  position: fixed;
  background-color: rgba(41, 37, 37, 0.568);
  min-width: 100vw;
  min-height: 100vh;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.img {
  width: 100px;
}
.card {
  min-width: 310px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
}
</style>
