import { Calendar } from "../../../components/ui/calendar"
import {
  Card,
  CardContent,
} from "../../../components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { Input } from "../../../components/ui/input"
import { useState } from "react"
import type { Appointment }
from "../types/Appointment"
type DateTimePickerProps = {
  start: Date
  end: Date
  onStartChange: (date: Date) => void
  onEndChange: (date: Date) => void
  appointments: Appointment[]
  selectedStaff: string
}

export function DateTimePicker({
  start,
  end,
  onStartChange,
  onEndChange,
  appointments,
  selectedStaff,
}: DateTimePickerProps) {
const [duration, setDuration] = useState(60)

const hours = []

for (let h = 8; h <= 20; h++) {

  hours.push(`${h.toString().padStart(2, "0")}:00`)
  hours.push(`${h.toString().padStart(2, "0")}:30`)

}
const bookedTimes = appointments

  .filter((appointment) => {

    return (
      new Date(
        appointment.start
      ).toDateString()
      ===
      start.toDateString()
    )

  })
  .flatMap((appointment) => {

    const slots = []

    let current =
      new Date(appointment.start)

    const end =
      new Date(appointment.end)

    while (current < end) {

      slots.push(

        `${current
          .getHours()
          .toString()
          .padStart(2, "0")}:${current
          .getMinutes()
          .toString()
          .padStart(2, "0")}`

      )

      current =
        new Date(
          current.getTime()
          + 30 * 60 * 1000
        )

    }

    return slots

  })
  const now = new Date()

const isToday =
  start.toDateString() ===
  now.toDateString()
  const overlapsAppointment = (
  hour: string
) => {

  const [hourValue, minuteValue] =
    hour.split(":").map(Number)

  const proposedStart =
    new Date(start)

  proposedStart.setHours(
    hourValue,
    minuteValue,
    0,
    0
  )

  const proposedEnd =
    new Date(proposedStart)

  proposedEnd.setMinutes(
    proposedEnd.getMinutes()
    + duration
  )

  return appointments.some(
    (appointment) => {
if (
  appointment.staff !==
  selectedStaff
) {
  return false
}
      const appointmentStart =
        new Date(
          appointment.start
        )

      const appointmentEnd =
        new Date(
          appointment.end
        )

      return (
        proposedStart <
          appointmentEnd
        &&
        proposedEnd >
          appointmentStart
      )

    }
  )

}
  return (
    <Card>

      <CardContent className="p-5">

<div className="grid gap-12 xl:grid-cols-[400px_1fr] items-start">
        {/* Calendar */}
    <div className="flex justify-end">

      <Calendar
        mode="single"

        selected={start}
        onSelect={(date) => {
          if (!date) return

          const newDate = new Date(start)

          newDate.setFullYear(
            date.getFullYear(),
            date.getMonth(),
            date.getDate()
          )

          onStartChange(newDate)
        }}
        disabled={{
  before: new Date(
    new Date().setHours(0, 0, 0, 0)
  ),
}}
        className="  rounded-xl
    border
    shadow-sm
    p-7
    
    [--cell-size:--spacing(9.5)]"
      />

    </div>

 {/* Hours */}
<div className="space-y-5 max-w-sm mx-auto">

 {/* Start Time */}
<div className="space-y-2">
  <p className="text-sm font-medium text-center">
    Start Time
  </p>

  <div className="grid grid-cols-3 gap-3">

  {hours.map((hour) => {

  const [hourValue, minuteValue] =
  hour.split(":").map(Number)

const slotTime =
  new Date(start)

slotTime.setHours(
  hourValue,
  minuteValue,
  0,
  0
)

const pastTime =
  isToday &&
  slotTime < now


const overlap =
  overlapsAppointment(hour)
const disabled =
overlap
  || pastTime
  

    const selected =
      `${start.getHours()
        .toString()
        .padStart(2, "0")}:${start
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
      === hour

    return (

      <button
        key={hour}
        type="button"
        disabled={disabled}
        onClick={() => {

          const [hourValue, minuteValue] =
            hour.split(":").map(Number)

          const newStart =
            new Date(start)

          newStart.setHours(
            hourValue,
            minuteValue
          )

          onStartChange(newStart)

          const newEnd =
            new Date(newStart)

          newEnd.setMinutes(
            newEnd.getMinutes() + duration
          )

          onEndChange(newEnd)

        }}
        className={`
          rounded-xl
          border
          p-3
          text-sm
          font-medium
          transition-all

          ${
           selected
  ? "bg-primary text-primary-foreground border-primary"
  : disabled
  ? "bg-muted opacity-40 cursor-not-allowed"
  : "hover:border-primary hover:bg-muted"
          }
        `}
      >

        {hour}

      </button>

    )

  })}

</div>
</div>
<div className="space-y-6">

  {/* Duration + End Time */}
  <Card>

    <CardContent className="grid gap-6 p-5 md:grid-cols-2">

      {/* Duration */}
      <div className="space-y-2">

        <p className="text-sm font-medium">
          Duration
        </p>

        <Select
          value={duration.toString()}
          onValueChange={(value) => {

            const selectedDuration =
              Number(value)

            setDuration(selectedDuration)

            const newEnd =
              new Date(start)

            newEnd.setMinutes(
              newEnd.getMinutes()
              + selectedDuration
            )

            onEndChange(newEnd)

          }}
        >

          <SelectTrigger>

            <SelectValue />

          </SelectTrigger>

          <SelectContent>

            <SelectItem value="30">
              30 minutes
            </SelectItem>

            <SelectItem value="60">
              1 hour
            </SelectItem>

            <SelectItem value="90">
              1 hour 30 min
            </SelectItem>

            <SelectItem value="120">
              2 hours
            </SelectItem>

          </SelectContent>

        </Select>

      </div>

      {/* End Time */}
      <div className="space-y-2">

        <p className="text-sm font-medium">
          End Time
        </p>

        <Input
          disabled
          value={`${end.getHours()
            .toString()
            .padStart(2, "0")}:${end
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}
        />

      </div>

    </CardContent>

  </Card>

</div>

</div>

  </div>

</CardContent>

    </Card>
  )
}