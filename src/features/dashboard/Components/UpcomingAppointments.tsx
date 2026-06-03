import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import { Badge } from "../../../components/ui/badge"


type Appointment = {
  id: number
  customer: string
  service: string
  staff: string
  time: string
  status: string
  avatar: string
}
type UpcomingAppointmentsProps = {
  appointments: Appointment[]
}
export function UpcomingAppointments({
  appointments,
}: UpcomingAppointmentsProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Staff</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {appointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell>{appointment.id}</TableCell>
           <TableCell>
  <div className="flex items-center gap-3">
    <img
      src={appointment.avatar}
      alt={appointment.customer}
      className="h-8 w-8 rounded-full"
    />

    <span>{appointment.customer}</span>
  </div>
</TableCell>
            <TableCell>{appointment.service}</TableCell>
            <TableCell>{appointment.staff}</TableCell>
            <TableCell>{appointment.time}</TableCell>

            <TableCell>
              <Badge
                className={
                appointment.status.toLowerCase() === "confirmed"
                  ? "bg-blue-500"
                  : appointment.status.toLowerCase() === "pending"
                  ? "bg-yellow-500 text-black"
                  : appointment.status.toLowerCase() === "completed"
                  ? "bg-green-500"
                  : "bg-red-500"
                  }
              >
                {appointment.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
