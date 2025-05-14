<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import type {TodoItem, TodoItemEmits} from "@/types";

const props = defineProps<{ item: TodoItem }>();
const emits = defineEmits<TodoItemEmits>();

function removeTodo(): void {
  emits('removeTodo');
}

function completeTodo(): void {
  emits('completeTodo', props.item);
}

</script>

<template>
  <Card data-testid="todo-item">
    <template #title><span>{{ props.item.completed ? '✅' : '❌' }}</span> {{ props.item.title }}</template>
    <template #content>{{ props.item.content }}</template>

    <template #footer>
      <Button size="small" @click="completeTodo" v-if="!item.completed">Dokončit</Button>
      <Button severity="danger" size="small" @click="removeTodo">Smazat</Button>
    </template>
  </Card>
</template>
