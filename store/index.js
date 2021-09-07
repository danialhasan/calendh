import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const state = () => ({
  loginEmail: "",
  loginPassword: "",
  registerEmail: "",
  registerPassword: "",
  loggedIn: false,
  errorExists: true,
  errorMessage: "",
});

export const mutations = {
  updateLoginEmail(state, payload) {
    state.loginEmail = payload.email;
  },
  updateRegisterEmail(state, payload) {
    state.registerEmail = payload.email;
  },
  updateLoginPassword(state, payload) {
    state.loginPassword = payload.password;
  },
  updateRegisterPassword(state, payload) {
    state.registerPassword = payload.password;
  },
  logIn(state) {
    state.loggedIn = true;
  },
  updateErrorMessage(state, newErrorMessage) {
    state.errorMessage = newErrorMessage;
    console.log("New error message:", state.errorMessage);
  },
  toggleErrorExists(state) {
    state.errorExists = !state.errorExists;
    state.errorMessage === ""
      ? (state.errorMessage = "test error message")
      : (state.errorMessage = "");
    console.log("errorExists:", state.errorExists);
    console.log("errorMessage:", state.errorMessage);
  },
};

export const actions = {
  async createNewAccount(context, payload) {
    try {
      const userCredential =
        await this.$fire.auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        );
      const user = userCredential.user;
      console.log("User created!");
    } catch (error) {
      const errorCode = error.code;
      context.commit("updateErrorMessage", error.message);
      state.errorExists = true;
      setTimeout(() => {
        state.errorExists = false;
      }, 2500);

      console.log(errorCode, error.message);
    }
  },
};
