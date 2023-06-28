<script setup lang="ts">
const store = useSystemStore()

const isDark = computed(() => store.isDark)
</script>

<template>
  <NuxtLayout name="default">
    <div class=":uno: font-dancing font-bold text-black cursor-pointer" @click.prevent="store.isDark = !store.isDark">
      <div class=":uno: font-bold hover:text-red text-black text-3xl pb-7">
        INDEX PAGE
      </div>
      <div class=":uno: i-mdi-ceiling-light text-6xl mx-auto" :class="[{ ':uno: text-orange-400': isDark, ':uno: text-slate-400': !isDark }]" />
    </div>
  </NuxtLayout>
</template>
