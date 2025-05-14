import type { Room } from '@/types'
import { defineStore } from 'pinia'
import roomService from '@/services/RoomService.ts';

export interface RoomStoreState {
  rooms: Room[];
  isRoomsLoaded: boolean;
  currentRoom: Room;
  isEditDialogVisible: boolean;
}

export const useRoomStore = defineStore('room', {
  state: (): RoomStoreState => ({
    rooms: [],
    isRoomsLoaded: false,
    currentRoom: createEmptyRoom(),
    isEditDialogVisible: false,
  }),
  actions: {
    async fetchRooms(): Promise<void> {
      this.isRoomsLoaded = false;

      roomService.getAll().then((rooms: Room[]) => {
        this.rooms = rooms;
        this.isRoomsLoaded = true;
      });
    },
    async deleteRoom(room: Room): Promise<void> {
      return roomService.remove(room).then(() => {
        return this.fetchRooms();
      });
    },
    async persistRoom(room?: Room): Promise<void> {
      const roomToPersist: Room = {...(room ?? this.currentRoom)};

      let promise: Promise<Room>;

      if (roomToPersist.id) {
        promise = roomService.update(roomToPersist);
      } else {
        promise = roomService.add(roomToPersist);
      }

      this.hideEditDialog();

      return promise.then(() => {
        return this.fetchRooms();
      });
    },
    showEditDialog(room?: Room): void {
      if (room) {
        this.currentRoom = {...room};
      } else {
        this.currentRoom = createEmptyRoom();
      }

      this.isEditDialogVisible = true;
    },
    hideEditDialog(): void {
      this.isEditDialogVisible = false;
      this.resetCurrentRoom();
    },
    resetCurrentRoom(): void {
      this.currentRoom = createEmptyRoom();
    }
  }
});

function createEmptyRoom(): Room {
  return {
    '@id': '',
    id: null,
    name: '',
    capacity: 0,
    price: 0,
  }
}
