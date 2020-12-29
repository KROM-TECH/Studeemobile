<template>
  <ion-menu menu-id="main-menu" content-id="main">
    <ion-content>
      <div class="menu_header"></div>
      <div class="header_content">
        <img src="@/assets/general/Female.png" alt="" />
        <ion-label>
          <h2>Kromate</h2>
          <p>University of Lagos</p>
        </ion-label>
      </div>

      <div class="action_button">
        <ion-button :class="[connected ? 'online' : 'offline']">
          {{ connected ? "Online" : "Offline" }}
        </ion-button>
      </div>
      <div class="von">
        <ion-list class="menu_items" lines="none">
          <router-link to="/home">
            <ion-item> <ion-icon :icon="home"></ion-icon> Home </ion-item>
          </router-link>

          <router-link to="/pastquestions">
            <ion-item> <ion-icon :icon="home"></ion-icon> Past Questions </ion-item>
          </router-link>

          <router-link to="/courses">
            <ion-item> <ion-icon :icon="home"></ion-icon> Course Outline </ion-item>
          </router-link>

          <router-link class="box" to="/tutor">
            <ion-item> <ion-icon :icon="home"></ion-icon> Find a Tutor </ion-item>
          </router-link>

          <router-link class="box" to="/profile">
            <ion-item> <ion-icon :icon="home"></ion-icon> Profile </ion-item>
          </router-link>

          <router-link class="box" to="/questions">
            <ion-item> <ion-icon :icon="home"></ion-icon> Ask Questions </ion-item>
          </router-link>

          <router-link class="box" to="/chat">
            <ion-item> <ion-icon :icon="home"></ion-icon> Chat </ion-item>
          </router-link>

          <router-link class="box" to="/market">
            <ion-item> <ion-icon :icon="home"></ion-icon> Market place </ion-item>
          </router-link>

          <router-link class="box" to="/tte">
            <ion-item> <ion-icon :icon="home"></ion-icon> T/T/E </ion-item>
          </router-link>

          <div class="row">
            <ion-item @click="signOut"> <ion-icon :icon="exit"></ion-icon> Sign Out </ion-item>
          </div>
        </ion-list>
      </div>
    </ion-content>
  </ion-menu>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { IonIcon, IonLabel, IonContent, IonButton, IonMenu, IonItem, IonList } from "@ionic/vue";
import { add, home, exit } from "ionicons/icons";
export default {
  name: "Menu",
  components: {
    IonIcon,
    IonLabel,
    IonContent,
    IonButton,
    IonMenu,
    IonItem,
    IonList,
  },
  data() {
    return {
      home,
      add,
      exit,
      connected: navigator.onLine,
    };
  },

  methods: {
    handleConnectionChange() {
      console.log("hello");
      window.addEventListener("offline", () => {
        this.connected = false;
      });
      window.addEventListener("online", () => {
        this.connected = true;
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          //   this.$store.commit("clearUserData");
          this.$router.go({ path: "login" });
        });
    },
  },

  created() {
    this.handleConnectionChange();
  },
};
</script>

<style scoped>
.action_button {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.menu_items {
  margin: 0px;
}
.menu_items ion-icon {
  margin-right: 20px;
  color: #86979f;
}

.menu_items ion-item {
  padding-left: 20px;
  margin-bottom: 10px;
}

ion-button {
  text-transform: capitalize;
  font-weight: 300;

  --border-radius: 3px;
}

.online {
  --background: #6c63ff;
}
.offline {
  --background: #97969e;
}
ion-icon {
  margin-right: 1px;
}
img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 7px solid #555297;
  margin-right: 7px;
}
h2 {
  font-weight: 300;
  color: #fff;
}
p {
  font-size: 12px;
  color: #e4e4e4;
  font-weight: 100;
  letter-spacing: 0.4px;
}
.header_content {
  position: absolute;
  top: 30px;
  left: 12px;
  display: flex;
  align-items: center;
}
.menu_header {
  height: 170px;
  width: 350px;
  background-color: #6c63ff;
  background: linear-gradient(90deg, #6a67b1 0%, #6c63ff 100%);
  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);
  transform: rotate(-15deg);
  border-radius: 10px 10px 10px 50px;
  margin-left: -18px;
  margin-top: -50px;
  margin-bottom: 60px;
}
</style>
