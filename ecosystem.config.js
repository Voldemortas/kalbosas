module.exports = {
  apps: [
    {
      name: 'kalbosas',
      script: 'src/kalbosas.js',
      args: 'one two',
      instances: 1,
      autorestart: true,
    },
  ],
}
