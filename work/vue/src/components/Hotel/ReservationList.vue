<script setup lang="ts">

import Card from 'primevue/card'
import Button from 'primevue/button'
import { useReservationStore } from '@/store/ReservationStore.ts'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { onMounted } from 'vue'
import ReservationForm from '@/components/Hotel/ReservationForm.vue'

const reservationStore = useReservationStore();

onMounted(() => {
  reservationStore.fetchReservations();
})

</script>

<template>
  <Card>
    <template #title>
      <h1>Správa rezervací</h1>
      <Button label="Přidat rezervaci" icon="pi pi-plus" @click="reservationStore.showEditDialog()" />
    </template>

    <template #content>
      <DataTable :value="reservationStore.reservations" dataKey="id">
        <template #empty>
          Neexistují žádné rezervace.
        </template>

        <Column header="#" field="id" />
        <Column header="Host" field="guestName" />
        <Column header="Pokoj" field="roomName" />
        <Column header="Počet hostů" field="guests" />
        <Column header="Od" field="startDate">
          <template #body="slotProps">
            {{ new Date(slotProps.data.startDate).toLocaleDateString() }}
          </template>
        </Column>
        <Column header="Do" field="endDate">
          <template #body="slotProps">
            {{ new Date(slotProps.data.endDate).toLocaleDateString() }}
          </template>
        </Column>
        <Column header="Nocí" field="nights" />
        <Column header="Cena" field="totalPrice" />
        <Column header="Zaplaceno" field="isPaid">
          <template #body="slotProps">
            {{ slotProps.data.isPaid ? "✅" : "❌" }}
          </template>
        </Column>

        <Column header="Akce">
          <template #body="slotProps">
            <Button icon="pi pi-pencil" class="mr-2" size="small"
                    @click.stop="reservationStore.showEditDialog(slotProps.data)"/>
            <Button icon="pi pi-trash" severity="danger" size="small"
                    @click.stop="reservationStore.deleteReservation(slotProps.data)" />
          </template>
        </Column>

        <template #footer>
          Počet položek: <strong>{{ reservationStore.reservations.length }}</strong>
        </template>
      </DataTable>
    </template>
  </Card>

  <ReservationForm />
</template>
