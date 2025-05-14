import { defineStore } from 'pinia'
import reservationService from '@/services/ReservationService.ts';
import type { Reservation } from '@/types'

export interface ReservationStoreState {
  reservations: Reservation[];
  isReservationsLoaded: boolean;
  currentReservation: Reservation;
  isEditDialogVisible: boolean;
}

export const useReservationStore = defineStore('reservation', {
  state: (): ReservationStoreState => ({
    reservations: [],
    isReservationsLoaded: false,
    currentReservation: createEmptyReservation(),
    isEditDialogVisible: false,
  }),
  actions: {
    async fetchReservations(): Promise<void> {
      this.isReservationsLoaded = false;

      reservationService.getAll().then((reservations: Reservation[]) => {
        this.reservations = reservations;
        this.isReservationsLoaded = true;
      });
    },
    async deleteReservation(reservation: Reservation): Promise<void> {
      return reservationService.remove(reservation).then(() => {
        return this.fetchReservations();
      });
    },
    async persistReservation(reservation?: Reservation): Promise<void> {
      const reservationToPersist: Reservation = {...(reservation ?? this.currentReservation)};

      let promise: Promise<Reservation>;

      if (reservationToPersist.id) {
        promise = reservationService.update(reservationToPersist);
      } else {
        promise = reservationService.add(reservationToPersist);
      }

      this.hideEditDialog();

      return promise.then(() => {
        return this.fetchReservations();
      });
    },
    showEditDialog(reservation?: Reservation): void {
      if (reservation) {
        this.currentReservation = {...reservation};
      } else {
        this.currentReservation = createEmptyReservation();
      }

      this.isEditDialogVisible = true;
    },
    hideEditDialog(): void {
      this.isEditDialogVisible = false;
      this.resetCurrentReservation();
    },
    resetCurrentReservation(): void {
      this.currentReservation = createEmptyReservation();
    }
  }
});

function createEmptyReservation(): Reservation {
  return {
    id: null,
    guestName: '',
    guests: 0,
    isPaid: false,
    nights: 0,
    totalPrice: 0,
    room: null,
    startDate: null,
    endDate: null,
    createdAt: null,
    updatedAt: null,
  }
}
