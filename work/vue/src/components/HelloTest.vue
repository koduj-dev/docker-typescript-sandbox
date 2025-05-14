<script setup lang="ts">
import { ref, type Ref } from 'vue'
const clicks: Ref<number> = ref(0);

const props = defineProps<{
  text?: string;
}>();

const emits = defineEmits<{
  (e: 'testClick', payload: string): void
}>();

function onClick() {
  clicks.value++;
  emits('testClick', "test kliku");
}

</script>

<template>
  <div>
    Hello test.

    {{ props.text }}

    <div id="clickCounter">Počet kliknutí: {{ clicks }}</div>

    <button @click="onClick">Klik.</button>
  </div>
</template>
