import { describe, expect, it } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('Homepage', () => {
  it('Renders the slideshow', async () => {
    const doc = await $fetch('/')
    expect(doc).toContain('INDEX PAGE')
  })

  it('Renders the nav', async () => {
    const doc = await $fetch('/')
    expect(doc).toContain('id="topnav"')
    expect(doc).toContain('<nav')
  })

  it('Renders the footer', async () => {
    const doc = await $fetch('/')
    expect(doc).toContain('<footer')
  })

  it('Renders cookie consents', async () => {
    const doc = await $fetch('/')
    expect(doc).toContain('cookie-comply')
  })
})
