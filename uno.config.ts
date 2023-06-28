// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetWebFonts({
      inlineImports: true,
      provider: 'none', // default provider
      extendTheme: true,
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        dancing: "Dancing Script",
        roboto: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
    presetWind(),
    presetRemToPx(),
    presetIcons(),
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
  ],
})
