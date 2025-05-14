<script setup lang="ts">
import type {BoxEmits, BoxProps} from "@/types";

const props = withDefaults(defineProps<BoxProps>(), {
  title: "Defaultní titulek",
  content: "Defaultní content",
});
const emits = defineEmits<BoxEmits>();

function clearInputs(): void {
  emits('clearInputs');
}

function setInputs(): void {
  emits('setInputs', {
    value1: "Hodnota 1",
    value2: "Hodnota 2",
  });
}

</script>

<template>
  <div>
    <div class="header">{{ props.title }}</div>
    <div class="content">{{ props.content }}</div>

    <button @click="clearInputs">Smaž inputy</button>
    <button @click="setInputs">Nastav inputy</button>
  </div>
</template>

<style scoped>
.header{
  border: 1px solid yellow;
  padding: 5px;
  margin: 5px;
}

.content {
  border: 1px solid blue;
  margin: 5px;
  padding: 5px;
}
</style>
