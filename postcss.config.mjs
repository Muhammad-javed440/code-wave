// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ required for Tailwind v4+
    autoprefixer: {},
  },
};

export default config;
