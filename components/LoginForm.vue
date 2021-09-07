<script>
export default {
  data() {
    return {
      loginEmail: "testemail@test.com",
      loginPassword: "placeholder",
      registerEmail: "test@test.com",
      registerPassword: "placeholder",
    };
  },
  props: [],
  methods: {
    authLogin() {
      console.log("authLogin activated");
      // commit 'login' data properties to store
      this.$store.commit("updateLoginEmail", { email: this.loginEmail });
    },
    authRegister() {
      this.$store.commit("updateRegisterEmail", { email: this.registerEmail });
      console.log(this.$store.state.registerEmail);
    },
    checkStore() {
      console.log("Email in Vuex Store:", this.$store.state.loginEmail);
    },
  },
  async mounted() {
    // const firebaseAuth = require("firebase/auth");
    // const firebaseui = require("firebaseui");
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // console.log(firebaseAuth);
    // this.authLogin();
  },
};
</script>
<template>
  <div class="p-20">
    <h1 class="text-3xl font-bold">This is the login/register component.</h1>
    <!-- login -->
    <form @submit.prevent="authLogin" class="flex flex-wrap w-60">
      <label for="" class="text-xl font-bold">Email</label>
      <input type="text" placeholder="Email here..." v-model="loginEmail" />
      <label for="" class="mt-4 text-xl font-bold">Password</label>
      <input
        type="password"
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
    <!-- register -->
    <form @submit.prevent="authRegister" class="flex flex-wrap w-60">
      <label for="" class="text-xl font-bold">Email</label>
      <input type="text" placeholder="Email here..." v-model="registerEmail" />
      <label for="" class="mt-4 text-xl font-bold">Password</label>
      <input
        type="password"
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