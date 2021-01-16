module.exports = {
  apps: [
    {
      name: 'GavinKennaIO',
      exec_mode: 'cluster',
      instances: '2', //
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: true,
      restart_delay: 5000
    }
  ]
}
