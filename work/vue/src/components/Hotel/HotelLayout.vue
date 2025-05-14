<script setup lang="ts">

import Menu from 'primevue/menu'
import type { MenuItem } from 'primevue/menuitem'
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const menuItems: Ref<MenuItem[]> = ref([
  { label: 'Hotel', disabled: true, icon: 'pi pi-cog' },
  { label: 'Pokoje', icon: 'pi pi-home', command: () => router.push({ name: 'rooms'})},
  { label: 'Rezervace', icon: 'pi pi-calendar', command: () => router.push({ name: 'reservations'})}
]);

</script>

<template>
  <div class="flex">
    <aside class="p-1 mr-5">
      <Menu :model="menuItems" />
    </aside>

    <main class="flex-1">
      <router-view />
    </main>
  </div>
</template>
