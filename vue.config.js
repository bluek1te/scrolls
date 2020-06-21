const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  configureWebpack: {
    plugins: [
       new GoogleFontsPlugin({
          fonts: [
	    { family: "Lora" }
          ]
       })
    ]
  },
  transpileDependencies: [
    'quasar'
  ]
}
