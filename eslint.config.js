import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  astro: false,
  pnpm: false,
  ignores: [
    'packages/starlight-theme-black-category/**/*.d.ts',
  ],
})
