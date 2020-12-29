<template>
  <ion-app>
    <ion-header :translucent="true" v-if="show">
      <ion-toolbar>
        <ion-title>{{ $route.name }}</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button menu="main-menu"> </ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <SideBar />
    <router-view id="main" class="router" />
  </ion-app>
</template>

<script>
import SideBar from "@/components/Sidebar.vue";
import { IonApp, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from "@ionic/vue";
export default {
  name: "App",
  components: {
    IonApp,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    SideBar,
  },

  computed: {
    show() {
      if (this.$route.meta.requiresGuest) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {
    console.log(this.$route.meta.requiresGuest);
  },
};
</script>
