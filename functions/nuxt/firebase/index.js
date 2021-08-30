import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'
import functionsService from './service.functions.js'

const appConfig = {"apiKey":"AIzaSyBOMddvZ9yLuqJpINXqFmzrVSrjAo5I_wE","authDomain":"calendh-xyz.firebaseapp.com","projectId":"calendh-xyz","storageBucket":"calendh-xyz.appspot.com","messagingSenderId":"707209656771","appId":"1:707209656771:web:10ecf5a94c9fbe049de576"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),
    functionsService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),
      functionsService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore,
    functions
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore,
    functions: functions
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}