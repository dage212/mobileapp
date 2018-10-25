module.exports = {
	devServer: {
      host: '192.168.10.69',

      port: 8080,

      https: false,

      hotOnly: false,

      proxy: null,

      before: app => {
      }
    },
}
