<script setup lang="ts">
import {computed, type Ref, ref} from "vue";
import Menubar from 'primevue/menubar';
import type {MenuItem} from "primevue/menuitem";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

const menuItems: Ref<MenuItem[]> = ref([
  {
    label: 'First',
    icon: 'pi pi-home',
    command: () => router.push({ name: 'home' }),
    class: computed(() => route.name === 'home' ? 'menu-active' : '')
  }, {
    label: 'Second',
    icon: 'pi pi-cog',
    command: () => router.push({ name: 'second' }),
    class: computed(() => route.name === 'second' ? 'menu-active' : '')
  }, {
    label: 'Todo List',
    icon: 'pi pi-book',
    command: () => router.push({ name: 'todo' }),
    class: computed(() => route.name === 'todo' ? 'menu-active' : '')
  }, {
    label: 'Hotel',
    icon: 'pi pi-home',
    command: () => router.push({ name: 'rooms' }),
  }
]);

</script>

<template>
  <div>
    <Menubar :model="menuItems" />

    <div class="p-4">
      <router-view />
    </div>
  </div>
</template>
