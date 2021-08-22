const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");

const nuxtConfig = require("./nuxt.config.js");

// TODO set DEV and DEBUG to FALSE
const config = {
  ...nuxtConfig,
  dev: false,
  debug: true,
  buildDir: "nuxt",
};
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});
