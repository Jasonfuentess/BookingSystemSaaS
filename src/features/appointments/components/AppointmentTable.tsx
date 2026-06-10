import { useState } from "react"
import { format } from "date-fns"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

import type { Appointment } from "../types/Appointment"

import { Badge } from "../../../components/ui/badge"

import { AppointmentActions } from "./AppointmentActions"

import { AppointmentDetailsDialog } from "./AppointmentDetailsDialog"

type AppointmentTableProps = {
  appointments: Appointment[]
}

export function AppointmentTable({
  appointments,
}: AppointmentTableProps) {

  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null)

  const [openDialog, setOpenDialog] =
    useState(false)

  return (
    <>
      <Table>

        <TableHeader>

          <TableRow>

            <TableHead>
              Customer
            </TableHead>

            <TableHead>
              Service
            </TableHead>

            <TableHead>
              Staff
            </TableHead>

            <TableHead>
              Date
            </TableHead>

            <TableHead>
              Time
            </TableHead>

            <TableHead>
              Status
            </TableHead>

            <TableHead>
              Actions
            </TableHead>

          </TableRow>

        </TableHeader>

        <TableBody>

          {appointments.map((appointment) => (

            <TableRow key={appointment.id}>

              <TableCell>

                <div className="flex items-center gap-3">

                  <div
                    className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full bg-primary
                    text-primary-foreground
                    font-semibold
                    "
                  >

                    {appointment.customer
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}

                  </div>

                  <span className="font-medium">

                    {appointment.customer}

                  </span>

                </div>

              </TableCell>

              <TableCell>
                {appointment.service}
              </TableCell>

              <TableCell>
                {appointment.staff}
              </TableCell>

              <TableCell>

                {format(
                  new Date(appointment.start),
                  "MMM d, yyyy"
                )}

              </TableCell>

              <TableCell>

                {format(
                  new Date(appointment.start),
                  "hh:mm a"
                )}

                {" - "}

                {format(
                  new Date(appointment.end),
                  "hh:mm a"
                )}

              </TableCell>

              <TableCell>

                <Badge
                  variant={
                    appointment.status === "confirmed"
                      ? "default"
                      : appointment.status === "pending"
                      ? "secondary"
                      : appointment.status === "completed"
                      ? "secondary"
                      : "destructive"
                  }
                >

                  {appointment.status}

                </Badge>

              </TableCell>

              <TableCell>

                <AppointmentActions
                  onViewDetails={() => {

                    setSelectedAppointment(
                      appointment
                    )

                    setOpenDialog(true)

                  }}
                />

              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

      <AppointmentDetailsDialog
        appointment={selectedAppointment}
        open={openDialog}
        onOpenChange={setOpenDialog}
      />

    </>
  )
}