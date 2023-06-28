import { defineStore } from 'pinia'

export const useSystemStore = defineStore('systemstore', () => {
  const isDark = ref(false)

  return {
    isDark,
  }
}, { persist: true })
