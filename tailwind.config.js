module.exports = {
  purge: {
    enabled: process.env.NODE_ENV == "production",
    content: [
      './src/**/*.html',
      './src/**/*.svelte'
    ],
    options: {
      whitelist: [/svelte-/],
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
