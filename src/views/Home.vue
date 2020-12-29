<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{ $route.name }}</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button menu="main-menu"> </ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
  </ion-page>
</template>

<script lang="ts">
import { IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
  },
});
</script>

<style scoped></style>
