<template>
  <div>
    <login-form />
    <!-- <firestore-form /> -->
  </div>
</template>

<script>
import axios from "axios";
import FirestoreForm from "~/components/FirestoreForm.vue";
import LoginForm from "~/components/LoginForm.vue";
export default {
  components: { FirestoreForm, LoginForm },
  data() {
    return {};
  },
  // async mounted() {
  //   try {
  //     const response = await axios.get(
  //       "https://us-central1-calendh-xyz.cloudfunctions.net/sayHi"
  //       // "http://localhost:5001/calendh-xyz/us-central1/sayHi"
  //     );
  //     console.log("HTTP Response received!");
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log("HTTP request failed. ");
  //   }
  // },
};
</script>
