<template>
  <transition name="slide" appear>
    <div class="body">
      <img src="@/assets/general/Logo.svg" class="res-img grow" alt="" />
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10000;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  background-color: rgb(220, 220, 220);
}
.grow {
  animation: grow 3s forwards infinite;
}
@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: 1s;
}

.slide-enter,
.slide-leave-to {
  transform: scale(1);
}
</style>
