export const state = () => ({
  loginEmail: "",
  loginPassword: "",
  registerEmail: "",
  registerPassword: "",
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
};
