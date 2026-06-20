import type { Appointment } from "../types/Appointment"
import type { Staff, WorkingDay } from "../../staff/types/staff"

const SLOT_INTERVAL_MINUTES = 30

function getDayName(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
  })
}

function formatTime(date: Date) {
  return `${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`
}

function createDateWithTime(
  date: Date,
  time: string
) {
  const [hours, minutes] =
    time.split(":").map(Number)

  const result = new Date(date)

  result.setHours(hours, minutes, 0, 0)

  return result
}

function overlaps(
  startA: Date,
  endA: Date,
  startB: Date,
  endB: Date
) {
  return startA < endB && endA > startB
}

function isTimeOff(
  employee: Staff,
  date: Date
) {
  const selectedDate =
    date.toISOString().split("T")[0]

  return employee.timeOff.some((timeOff) => {
    return (
      selectedDate >= timeOff.startDate &&
      selectedDate <= timeOff.endDate
    )
  })
}

function getWorkingDay(
  employee: Staff,
  date: Date
): WorkingDay | undefined {
  const dayName = getDayName(date)

  return employee.schedule.find(
    (day) => day.day === dayName
  )
}

export function getAvailableStaff(
  serviceName: string,
  date: Date,
  staff: Staff[]
) {
  return staff.filter((employee) => {
    if (!employee.active) return false

    if (
      !employee.services.includes(serviceName)
    ) {
      return false
    }

    if (isTimeOff(employee, date)) {
      return false
    }

    const workingDay =
      getWorkingDay(employee, date)

    if (!workingDay || !workingDay.enabled) {
      return false
    }

    return true
  })
}

export function getAvailableSlots(
  employee: Staff,
  appointments: Appointment[],
  date: Date,
  duration: number
) {
  const workingDay =
    getWorkingDay(employee, date)

  if (!workingDay || !workingDay.enabled) {
    return []
  }

  if (isTimeOff(employee, date)) {
    return []
  }

  const workStart =
    createDateWithTime(date, workingDay.start)

  const workEnd =
    createDateWithTime(date, workingDay.end)

  const breakStart =
    workingDay.breakStart
      ? createDateWithTime(
          date,
          workingDay.breakStart
        )
      : null

  const breakEnd =
    workingDay.breakEnd
      ? createDateWithTime(
          date,
          workingDay.breakEnd
        )
      : null

  const now = new Date()

  const employeeAppointments =
    appointments.filter((appointment) => {
      return (
        appointment.staff === employee.name &&
        new Date(appointment.start)
          .toDateString() ===
          date.toDateString()
      )
    })

  const slots: string[] = []

  const current = new Date(workStart)

  while (current < workEnd) {
    const proposedStart =
      new Date(current)

    const proposedEnd =
      new Date(current)

    proposedEnd.setMinutes(
      proposedEnd.getMinutes() + duration
    )

    const isPast =
      proposedStart < now

    const exceedsWorkingHours =
      proposedEnd > workEnd

    const overlapsBreak =
      breakStart &&
      breakEnd &&
      overlaps(
        proposedStart,
        proposedEnd,
        breakStart,
        breakEnd
      )

    const overlapsAppointment =
      employeeAppointments.some((appointment) =>
        overlaps(
          proposedStart,
          proposedEnd,
          new Date(appointment.start),
          new Date(appointment.end)
        )
      )

    if (
      !isPast &&
      !exceedsWorkingHours &&
      !overlapsBreak &&
      !overlapsAppointment
    ) {
      slots.push(formatTime(proposedStart))
    }

    current.setMinutes(
      current.getMinutes() +
        SLOT_INTERVAL_MINUTES
    )
  }

  return slots
}