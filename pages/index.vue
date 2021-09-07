<script>
import axios from "axios";
import FirestoreForm from "~/components/FirestoreForm.vue";
import LoginForm from "~/components/LoginForm.vue";
import ErrorMessage from "~/components/ErrorMessage.vue";

export default {
  components: { FirestoreForm, LoginForm, ErrorMessage },
  data() {
    return {};
  },
  methods: {
    toggleErrorExists() {
      this.$store.commit("toggleErrorExists");
      console.log(
        "errorExists in index.vue page",
        this.$store.state.errorExists
      );
    },
    logIn() {
      // this.$store.commit("logIn");
      // console.log("loggedIn status:", this.$store.state.loggedIn);

      this.$store.dispatch("createNewAccount", {
        email: "test@test.com",
        password: "placeholder",
      });
    },
  },
  // async mounted() {
  //   try {
  //     const response = await axios.get(
  //       "https://us-central1-calendh-xyz.cloudfunctions.net/sayHi"
  // "http://localhost:5001/calendh-xyz/us-central1/sayHi"
  //     );
  //     console.log("HTTP Response received!");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log("HTTP request failed. ");
  //   }
  // },
  computed: {
    errorExists() {
      return this.$store.state.errorExists;
    },
  },
};
</script>

<template>
  <div class="m-4">
    <!-- <button @click="logIn" class="px-6 py-4 bg-blue-500 text-white rounded-xl">
      Log in
    </button>
    <div v-if="this.$store.state.loggedIn" class="bg-green-500 rounded-xl p-12">
      <h1 class="text-xl font-bold">You're logged in!</h1>
    </div> -->
    <button @click="logIn" class="px-6 py-4 bg-blue-500 text-white rounded-xl">
      Dispatch New Account Action
    </button>
    <button
      @click="toggleErrorExists"
      class="px-6 py-4 bg-black text-white rounded-xl"
    >
      Toggle Error Exists
    </button>
    <login-form />
    <!-- BUG: The v-if does not toggle the visibility of the component. this.errorExists
tracks the store and is therefore verifiably reactive. When this is rendered, it triggers an html-markup-error stating that 
the dom nodes don't match up. -->
    <error-message v-if="errorExists" />
    <!-- <firestore-form /> -->
  </div>
</template>

