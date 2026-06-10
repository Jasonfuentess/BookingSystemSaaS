import { create } from "zustand"

import type { Appointment }
from "../features/appointments/types/Appointment"
import { appointmentData }
from "../mock/appointments.mock"
type AppointmentStore = {

  appointments: Appointment[]

  addAppointment: (
    appointment: Appointment
  ) => void

}

export const useAppointmentStore =
  create<AppointmentStore>((set) => ({

appointments: appointmentData,

    addAppointment: (appointment) =>

      set((state) => ({

        appointments: [

          ...state.appointments,

          appointment,

        ],

      })),

  }))