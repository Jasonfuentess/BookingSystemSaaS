export type AppointmentStatus =
  | "confirmed"
  | "pending"
  | "completed"
  | "cancelled"

export type Appointment = {
  id: string

  customer: string

  service: string

  staff: string

  start: string

  end: string

  price: number

  status: AppointmentStatus
}