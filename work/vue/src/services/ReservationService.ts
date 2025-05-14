import { ApiService } from '@/services/ApiService.ts'
import type { Reservation } from '@/types'

class ReservationService extends ApiService<Reservation> {
  protected readonly resourceLocator: string = '/reservations';
}

export default new ReservationService();
