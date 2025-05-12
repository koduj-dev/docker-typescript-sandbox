<script setup lang="ts">
import type {TodoFormEmits, TodoItem} from "@/types";
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const model = defineModel<TodoItem>();
const emits = defineEmits<TodoFormEmits>();

function addTodo(): void {
  emits('addTodo')
}

function reset(): void {
  emits('reset');
}

</script>

<template>
  <Card>
    <template #title>Nové Todo:</template>
    <template #content>
      Název: <InputText type="text" v-model="model.title" />
      <div>
        Popis: <br>
        <Textarea v-model="model.content" />
      </div>
    </template>
    <template #footer>
      <Button @click="addTodo" size="small">Uložit</Button>
      <Button @click="reset" severity="danger" size="small">Vymazat</Button>
    </template>
  </Card>
</template>

<style scoped>

</style>
