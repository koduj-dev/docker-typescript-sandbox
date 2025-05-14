<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { useRoomStore } from '@/store/RoomStore.ts'
import { computed, type Ref } from 'vue'
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const roomStore = useRoomStore();

const formTitle: Ref<string> = computed(() =>
  roomStore.currentRoom.id ? 'Editace místnosti' : 'Vytváření místnosti'
);

</script>

<template>
  <Dialog :closable="true" :modal="true"
          :header="formTitle"
          v-model:visible="roomStore.isEditDialogVisible"
          dismissable-mask
  >
    <div class="p-fluid">
      <div class="field col-12 flex flex-column">
        <label for="name" class="mb-2">Název pokoje *:</label>
        <InputText id="name" v-model="roomStore.currentRoom.name" required autofocus />
      </div>

      <div class="field col-12 flex flex-column">
        <label for="price" class="mb-2">Cena pokoje *:</label>
        <InputNumber id="price"
               v-model="roomStore.currentRoom.price" required autofocus />
      </div>

      <div class="field col-12 flex flex-column">
        <label for="capacity" class="mb-2">Kapacita pokoje *:</label>
        <InputNumber id="capacity"
                     v-model="roomStore.currentRoom.capacity" required autofocus />
      </div>
    </div>

    <template #footer>
      <Button @click.stop="roomStore.persistRoom()">Uložit</Button>
      <Button severity="danger" @click.stop="roomStore.hideEditDialog()">Cancel</Button>
    </template>
  </Dialog>
</template>

<style scoped>

</style>
