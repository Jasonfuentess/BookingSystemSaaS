import { SalonCalendar } from "../features/calendar/components/SalonCalendar"
import { useAppointmentStore } from "../stores/useAppointmentStore"


export function CalendarPage() {
  const appointments =
  useAppointmentStore(
    (state) => state.appointments
  )
  

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">
          Manage salon appointments by day, week, or month.
        </p>
      </div>

      <SalonCalendar
        events={appointments}

      />
    </div>
  )
}