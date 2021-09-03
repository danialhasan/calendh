<script>
export default {
  data() {
    return {
      loginEmail: "testemail@test.com",
      loginPassword: "",
      registerEmail: "",
      registerPassword: "",
    };
  },
  props: [],
  methods: {
    authLogin() {
      console.log("authLogin activated");
      // commit 'login' data properties to store
      this.$store.commit("updateLoginEmail", { email: this.loginEmail });
      this.checkStore();
    },
    authRegister() {},
    checkStore() {
      console.log("Email in Vuex Store:", this.$store.loginEmail);
    },
  },
  async mounted() {
    // const firebaseAuth = require("firebase/auth");
    // const firebaseui = require("firebaseui");
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // console.log(firebaseAuth);

    this.loginEmail = "testemail@test.com";
    // this.authLogin();
  },
};
</script>
<template>
  <div class="p-20">
    <h1 class="text-3xl font-bold">This is the login/register component.</h1>
    <form @submit.prevent="authLogin" class="flex flex-wrap w-60">
      <label for="" class="text-xl font-bold">Email</label>
      <input type="text" placeholder="Email here..." v-model="loginEmail" />
      <label for="" class="mt-4 text-xl font-bold">Password</label>
      <input
        type="text"
        placeholder="Password here..."
        v-model="loginPassword"
      />
      <button
        type="submit"
        class="px-6 py-3 mt-4 text-white rounded-lg bg-blue-500"
      >
        Sign In
      </button>
    </form>
    <form @submit.prevent="authRegister" class="flex flex-wrap w-60">
      <label for="" class="text-xl font-bold">Email</label>
      <input type="text" placeholder="Email here..." v-model="registerEmail" />
      <label for="" class="mt-4 text-xl font-bold">Password</label>
      <input
        type="text"
        placeholder="Password here..."
        v-model="registerPassword"
      />
      <button
        type="submit"
        class="px-6 py-3 mt-4 text-white rounded-lg bg-green-500"
      >
        Register
      </button>
    </form>
  </div>
</template>