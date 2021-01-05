<template>
  <notification-cards :showModal="showModal" :Details="Details" @close="showModal = false" />
  <div>
    <main>
      <h4>Get updated about new features and incoming changes</h4>
      <ion-card
        class="CS"
        v-for="(content, index) in contents"
        :key="index"
        @click="showDetails(content.details)"
      >
        <h2>{{ content.name }}</h2>
      </ion-card>

      <div class="dis" id="disqus_thread"></div>
    </main>
  </div>
</template>

<script>
import { IonCard } from "@ionic/vue";
import NotificationCards from "@/components/NotificationCards.vue";
import contents from "@/helpers/CS_Details.js";
export default {
  components: { IonCard, NotificationCards },
  data() {
    return {
      Details: "",
      showModal: false,
      contents,
    };
  },
  methods: {
    showDetails(details) {
      this.Details = details;
      this.showModal = true;
    },
  },
  mounted() {
    //     var disqus_config = function () {
    // this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    // this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    // };
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://kromtech.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  },
};
</script>

<style scoped>
main {
  text-align: center;
}
.dis {
  background-color: transparent;
  width: 80vw !important;
}
h2 {
  margin: 0;
  padding: 0;
}
.CS {
  background-color: #72727e;
  color: white;
  cursor: pointer;
}
ion-card {
  padding: 0.3rem;
  min-width: 18rem;
  min-height: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: #6c63ff;
  font-weight: 550;
}
.empty {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img {
  width: 55%;
  height: auto;
  margin: 10px;
}
.coursebox {
  height: 70vh;
}
.h1 {
  height: 3.2rem;
}
.input-field {
  margin: 2.5rem 1rem;
}
.left {
  float: left;
  max-width: 77%;
}
.right {
  float: right;
}
.topic {
  display: block;
  font-size: 1em;
  font-weight: 550;
  margin-bottom: 10px;
  text-align: center;
}
h1 {
  color: #6c63ff;
  text-align: center;
}
.center {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
details {
  text-align: center;
  border-radius: 0.2rem;
  width: 85vw;
  max-width: 550px;
  background-color: white;
  border: none;
  height: fit-content;
  margin: 0.3rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  color: #6c63ff;
  transition: 0.5s;
}
details[open] summary {
  background-color: rgba(230, 230, 230, 0.802);
  transition: 0.5s;
}
h5 {
  margin: 0.5rem 0rem !important;
}
summary {
  border-radius: 0.2rem;
  cursor: pointer;
  outline: none;
  padding: 0.2rem;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14);
  border: 1px solid;
}

p {
  padding: 1rem;
}

summary::-webkit-details-marker {
  display: none;
}
.modall {
  background-color: rgb(220, 220, 220);
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;
}
select {
  width: 80vw !important;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #6c63ff;
  outline: none;
  height: 3rem;
  margin: 0 0 8px 0;
  background-color: rgba(152, 145, 246, 0.2);
}

option {
  font-weight: 500;
  display: block;
  white-space: pre-line;
  min-height: 2em;
  height: 20rem;
  padding: 2em;
}
label {
  color: #6c63ff;
}

button:disabled {
  border-color: grey !important;
  color: grey !important;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100vw);
}
</style>
