import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../entities/Appointment';
import IAppointmentsService from '@modules/appointments/repositories/IAppointmentsService';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>
  implements IAppointmentsService {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || undefined;
  }
}

export default AppointmentsRepository;