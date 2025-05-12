<script setup lang="ts">

import type {TodoItem} from "@/types";
import TodoForm from "@/components/Todo/TodoForm.vue";
import { default as TodoItemComponent } from "@/components/Todo/TodoItem.vue";
import { onMounted, type Ref, ref, watch} from "vue";

const todoItem: Ref<TodoItem> = ref(createEmptyTodo());
const todoList: Ref<TodoItem[]> = ref([]);

function createEmptyTodo(): TodoItem {
  return {
    id: 0,
    title: "",
    content: "",
    completed: false,
  };
}

function onReset(): void {
  todoItem.value = createEmptyTodo();
}

function onAddTodo(): void {
  todoList.value.push({...todoItem.value, id: new Date().getTime()});
  onReset();
}

function onCompleteTodo(item: TodoItem): void {
  item.completed = true;
}

function onRemoveTodo(item: TodoItem): void {
  todoList.value = todoList.value.filter((listItem) => listItem.id !== item.id);
}

watch(todoList.value, (newTodoList): void => {
  localStorage.setItem("todoList", JSON.stringify(newTodoList));
});

onMounted(() => {
  const todoItems: TodoItem[] = JSON.parse(localStorage.getItem("todoList") as string);
  todoList.value.push(...todoItems);
})

</script>

<template>
  <h1>Todo list</h1>
  <TodoForm v-model="todoItem" @reset="onReset" @addTodo="onAddTodo" />

  <div>
    <TodoItemComponent v-for="item in todoList" :key="item.id"
                       :item="item"
                       @removeTodo="onRemoveTodo(item)"
                       @completeTodo="onCompleteTodo"
    />
  </div>
</template>

<style scoped>

</style>
