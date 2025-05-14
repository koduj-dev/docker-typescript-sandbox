import { ApiService } from '@/services/ApiService.ts'
import type { Room } from '@/types'

class RoomService extends ApiService<Room> {
  protected readonly resourceLocator: string = '/rooms';
}

export default new RoomService();
