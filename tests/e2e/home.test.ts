import { describe, expect, it } from 'vitest'
import { $fetch } from '@nuxt/test-utils'

describe('Homepage', () => {
  it('Renders the slideshow', async () => {
    const doc = await $fetch('/')
    expect(doc).toContain('INDEX PAGE')
  })
})
