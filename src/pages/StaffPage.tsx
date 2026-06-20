import { useState } from "react"

import { staffData } from "../mock/staff.mock"
import type { Staff } from "../features/staff/types/staff"
import { Card,CardContent } from "../components/ui/card"
import {Button} from "../components/ui/button"
import  { AddStaffDialog } from "../features/staff/components/AddStaffDialog"
import  { StaffScheduleDialog } from "../features/staff/components/StaffScheduleDialog"
import  { StaffTimeOffDialog } from "../features/staff/components/StaffTimeOffDialog"
import { defaultSchedule } from "../features/staff/constants/defaultSchedule"
import { StaffGrid } from "../features/staff/components/StaffGrid"

export function StaffPage() {
  const [staff, setStaff] =
    useState(staffData)
const totalEmployees =
  staff.length

const activeEmployees =
  staff.filter(
    (employee) => employee.active
  ).length

const stylists =
  staff.filter(
    (employee) =>
      employee.position ===
      "Stylist"
  ).length

const nailTechnicians =
  staff.filter(
    (employee) =>
      employee.position ===
      "Nail Technician"
  ).length
  const handleDuplicateStaff = (
    selectedStaff: Staff
  ) => {
    const duplicate: Staff = {
      ...selectedStaff,
      id: crypto.randomUUID(),
      name: `${selectedStaff.name} Copy`,
    }

    setStaff((prev) => [
      duplicate,
      ...prev,
    ])
  }
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const filteredStaff = staff
  const [selectedStaff, setSelectedStaff] =useState<Staff | null>(null)
  const [openScheduleDialog, setOpenScheduleDialog] = useState(false)
  const [openTimeOffDialog, setOpenTimeOffDialog] =useState(false)
  const handleUpdateSchedule = (
  updatedEmployee: Staff
) => {

  setStaff((prev) =>
    prev.map((employee) =>

      employee.id ===
      updatedEmployee.id

        ? updatedEmployee

        : employee

    )
  )

}
  const handleAddStaff = (
  employee: {
    name: string
    position: string
    email: string
    phone: string
    color: string
  }
  ) => {

 setStaff((prev) => [

 {
  id: crypto.randomUUID(),

  active: true,

  services: [],

  timeOff: [],

 schedule: structuredClone(defaultSchedule),

  ...employee,
...prev
}


])

}
  const handleToggleStaff = (
    selectedStaff: Staff
  ) => {
    setStaff((prev) =>
      prev.map((employee) =>
        employee.id === selectedStaff.id
          ? {
              ...employee,
              active: !employee.active,
            }
          : employee
      )
    )
  }
const handleUpdateTimeOff = (
  updatedEmployee: Staff
) => {

  setStaff((prev) =>
    prev.map((employee) =>

      employee.id ===
      updatedEmployee.id

        ? updatedEmployee

        : employee

    )
  )

}
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Staff
          </h1>

          <p className="text-muted-foreground">
            Manage your employees
          </p>

        </div>

      </div>
      <Button
  onClick={() =>
    setOpenAddDialog(true)
  }
>

  + Add Employee

</Button>
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Total Employees
      </p>

      <p className="mt-2 text-3xl font-bold">
        {totalEmployees}
      </p>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Active Employees
      </p>

      <p className="mt-2 text-3xl font-bold">
        {activeEmployees}
      </p>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Stylists
      </p>

      <p className="mt-2 text-3xl font-bold">
        {stylists}
      </p>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Nail Technicians
      </p>

      <p className="mt-2 text-3xl font-bold">
        {nailTechnicians}
      </p>

    </CardContent>

  </Card>

</div>
   <StaffGrid
  staff={filteredStaff}

  onEdit={() => {}}

  onSchedule={(staff) => {

    setSelectedStaff(staff)

    setOpenScheduleDialog(true)

  }}

 onTimeOff={(staff: Staff) => {

  setSelectedStaff(staff)

  setOpenTimeOffDialog(true)

}}

  onDuplicate={handleDuplicateStaff}

  onDeactivate={handleToggleStaff}
/>
<AddStaffDialog
  open={openAddDialog}
  onOpenChange={setOpenAddDialog}
  onSave={handleAddStaff}
/>
<StaffScheduleDialog
  key={selectedStaff?.id}

  employee={selectedStaff}

  open={openScheduleDialog}

  onOpenChange={setOpenScheduleDialog}

  onSave={handleUpdateSchedule}
/>
<StaffTimeOffDialog
  key={selectedStaff?.id}
  employee={selectedStaff}
  open={openTimeOffDialog}
  onOpenChange={setOpenTimeOffDialog}
  onSave={handleUpdateTimeOff}
/>
    </div>
  )
}