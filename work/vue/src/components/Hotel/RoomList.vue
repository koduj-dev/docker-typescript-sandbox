<script setup lang="ts">

import { useRoomStore } from '@/store/RoomStore.ts'
import { onMounted } from 'vue'
import Card from 'primevue/card';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import RoomForm from '@/components/Hotel/RoomForm.vue'

const roomStore = useRoomStore();

onMounted(async () => {
  roomStore.fetchRooms();
});

</script>

<template>
  <Card>
    <template #title>
      <h1>Správa pokojů</h1>
      <Button label="Přidat pokoj" icon="pi pi-plus" @click="roomStore.showEditDialog()" />
    </template>
    <template #content>
      <DataTable :value="roomStore.rooms" dataKey="id">
        <template #empty>
          Neexistují žádné místnosti.
        </template>

        <Column header="Název" field="name" :sortable="true" />
        <Column header="Kapacita" field="capacity" />
        <Column header="Cena (Kč)" field="price">
          <template #body="slotProps">
            {{ slotProps.data.price.toFixed(2) }} Kč
          </template>
        </Column>
        <Column header="Akce">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="mr-2" size="small"
                    @click.stop="roomStore.showEditDialog(slotProps.data)"/>
            <Button icon="pi pi-trash" severity="danger" size="small"
                    @click.stop="roomStore.deleteRoom(slotProps.data)" />
          </template>
        </Column>

        <template #footer>
          Počet položek: <strong>{{ roomStore.rooms.length }}</strong>
        </template>
      </DataTable>
    </template>
  </Card>

  <RoomForm />
</template>

