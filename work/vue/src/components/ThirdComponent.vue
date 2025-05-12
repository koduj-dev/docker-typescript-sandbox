<script setup lang="ts">
import type {PersonForm} from "@/types";

const model = defineModel<PersonForm>();

function resetName(): void {
  model.value.name = "xxx";
}

</script>

<template>
  <div class="form">
    <input name="name" v-model="model.name">
    <input name="age" v-model="model.age" type="number">

    <button @click="resetName">Smazat name</button>
  </div>
</template>

<style scoped>

</style>
