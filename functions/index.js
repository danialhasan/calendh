const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");
const axios = require("axios");
const nuxtConfig = require("./nuxt.config.js");
const express = require("express");
const cors = require("cors")({ origin: true });

const app = express();

// Middleware
// app.use(cors);

// TODO set DEV to false for production
const config = {
  ...nuxtConfig,
  dev: false,
  debug: true,
  buildDir: "nuxt",
};
const nuxt = new Nuxt(config);

// app.get("/sayHi", async (req, res) => {});

/**
 * For serverless functions, you call them and give in parameters
 * through HTTP request. Basically a POST request to them.
 *
 * To access the Express functions defined above, you go to the url
 * https://us-central1-<project-id>.cloudfunctions.net/ssrapp/<function>
 *
 * So for example: If we wanted to call the sayHi function, we'd go to:
 * https://us-central1-<project-id>.cloudfunctions.net/ssrapp/sayHi
 */
exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});
exports.sayHi = functions.https.onRequest(async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(response.data);
});
exports.createCollection = functions.https.onRequest(async (req, res) => {
  res.send("Request received!");
});
