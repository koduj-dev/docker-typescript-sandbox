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
    icon: 'pi pi-contact',
    command: () => router.push({ name: 'second' }),
    class: computed(() => route.name === 'second' ? 'menu-active' : '')
  }, {
    label: 'Todo List',
    icon: 'pi pi-book',
    command: () => router.push({ name: 'todo' }),
    class: computed(() => route.name === 'todo' ? 'menu-active' : '')
  }
]);

</script>

<template>
  <div>
    <Menubar :model="menuItems" />

    <router-view />
  </div>
</template>
