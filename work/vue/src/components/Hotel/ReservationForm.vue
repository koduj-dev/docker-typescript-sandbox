<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { computed, onMounted, type Ref } from 'vue'
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker'
import Checkbox from 'primevue/checkbox';
import Select from 'primevue/select';
import { useReservationStore } from '@/store/ReservationStore.ts'
import { useRoomStore } from '@/store/RoomStore.ts'

const reservationStore = useReservationStore();
const roomStore = useRoomStore();

onMounted(() => {
  roomStore.fetchRooms();
})

const formTitle: Ref<string> = computed(() =>
  reservationStore.currentReservation.id ? 'Editace rezervace' : 'Vytváření rezervace'
);

const roomOptions = computed(() => {
  return roomStore.rooms.map(room => ({
    label: `${room.name} - ${room.capacity} os. (${room.price} Kč)`,
    value: room['@id'],
  }));
})

</script>

<template>
  <Dialog :closable="true" :modal="true"
          :header="formTitle"
          class="col-6"
          v-model:visible="reservationStore.isEditDialogVisible"
          dismissable-mask
  >
    <div class="p-fluid">
      <div class="field col-12 flex flex-column">
        <label for="guestName" class="mb-2">Jméno hosta</label>
        <InputText id="guestName" v-model="reservationStore.currentReservation.guestName" />
      </div>
    </div>

    <div class="p-fluid">
      <div class="field col-12 flex flex-column">
        <label for="guests" class="mb-2">Počet hostů</label>
        <InputNumber id="guests" v-model="reservationStore.currentReservation.guests" />
      </div>
    </div>

    <div class="p-fluid">
      <div class="field col-12 flex flex-column">
        <label for="room" class="mb-2">Pokoj</label>
        <Select
          id="room"
          v-model="reservationStore.currentReservation.room"
          :options="roomOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Vyberte místnost"
          show-clear
        />
      </div>
    </div>

    <div class="p-fluid">
      <div class="field col-12 flex">
        <div class="field col-6 flex flex-column">
          <label for="startDate" class="mb-2">Datum od</label>
          <DatePicker
            id="startDate"
            :minDate="new Date()"
            dateFormat="dd. mm. yy"
            show-icon
            v-model="reservationStore.currentReservation.startDate"
          />
        </div>

        <div class="field col-6 flex flex-column">
          <label for="endDate" class="mb-2">Datum do</label>
          <DatePicker
            id="endDate"
            dateFormat="dd. mm. yy"
            show-icon
            v-model="reservationStore.currentReservation.endDate"
          />
        </div>
      </div>
    </div>

    <div class="p-fluid">
      <div class="field col-12 flex flex-column">
        <label for="isPaid" class="mb-2">Zaplaceno</label>
        <Checkbox id="isPaid" v-model="reservationStore.currentReservation.isPaid" binary />
      </div>
    </div>

    <template #footer>
      <Button @click.stop="reservationStore.persistReservation()">Uložit</Button>
      <Button severity="danger" @click.stop="reservationStore.hideEditDialog()">Cancel</Button>
    </template>
  </Dialog>
</template>

<style scoped>

</style>
