const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer:{
    proxy:"https://skin-care-tips.herokuapp.com", //backend address
  }
})
