<template>
  <div>
    <Loader v-if="loader" />
    <div class="content">
      <img class="responsive-img" src="@/assets/auth/verify.svg" alt="" />
      <h2 style="margin:0" class="center">
        verify your Email to Proceed
      </h2>
      <button v-if="!btn" class="btn Obtn " @click="verify">Verify</button>
      <p v-else class="center pur-text" v-html="msg"></p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Loader from "@/components/Loader";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      msg: "",
      loader: false,
      btn: true,
    };
  },
  methods: {
    verify() {
      this.loader = true;
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          console.log(firebase.auth().currentUser);
          this.loader = false;
          this.btn = false;
          this.msg = `A Verification Link has been sent to Your Email <br/> After Verification sign out and sign in to access your account`;
        })
        .catch((error) => {
          console.log(error.message);
          this.loader = false;
          this.btn = true;
          this.msg = `Something went wrong, check your network and then reload the page `;
        });
    },
  },
  mounted() {
    if (!firebase.auth().currentUser) {
      this.$router.push({ path: "login" });
    } else {
      this.user = firebase.auth().currentUser;
      console.log("llle");
      console.log(this.user);
    }
  },
};
</script>

<style scoped>
.but {
  width: 70%;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.center {
  margin: 2rem;
  font-size: 22px;
  text-align: center;
}
img {
  max-width: 50% !important;
  margin-top: 4rem;
}
</style>
