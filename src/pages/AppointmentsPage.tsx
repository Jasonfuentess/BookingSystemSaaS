import { useState } from "react"
import { Plus } from "lucide-react"

import { Button } from "../components/ui/button"

import { AppointmentSearch } from "../features/appointments/components/AppointmentSearch"
import { AppointmentFilters } from "../features/appointments/components/AppointmentFilters"
import { AppointmentTable } from "../features/appointments/components/AppointmentTable"
import { NewAppointmentDialog } from "../features/appointments/components/NewAppointmentDialog"

import {
  useAppointmentStore
} from "../stores/useAppointmentStore"
export function AppointmentsPage() {

 
const appointments =
  useAppointmentStore(
    (state) => state.appointments
  )
  const [openNewAppointment, setOpenNewAppointment] =
    useState(false)

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>

        <h1 className="text-4xl font-bold tracking-tight">
          Appointments
        </h1>

        <p className="text-muted-foreground">
          Manage salon appointments
        </p>

      </div>

      {/* Search + Button */}
      <div className="flex items-center justify-between">

        <AppointmentSearch />

        <Button
          onClick={() => setOpenNewAppointment(true)}
        >

          <Plus className="mr-2 h-4 w-4" />

          New Appointment

        </Button>

      </div>

      {/* Filters */}
      <AppointmentFilters />

      {/* Table */}
      <AppointmentTable
  appointments={appointments}
      />

      {/* Dialog */}
      <NewAppointmentDialog
  open={openNewAppointment}
  onOpenChange={setOpenNewAppointment}
/>

    </div>
  )
}