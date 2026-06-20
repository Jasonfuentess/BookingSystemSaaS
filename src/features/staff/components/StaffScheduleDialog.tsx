import {  useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"



import { Input } from "#components/ui/input"

import { Button } from "#components/ui/button"

import { Switch } from "#components/ui/switch"

import type {
  Staff,
  WorkingDay,
} from "../types/staff"

type StaffScheduleDialogProps = {
  employee: Staff | null

  open: boolean

  onOpenChange: (
    open: boolean
  ) => void

  onSave: (
    employee: Staff
  ) => void
}

export function StaffScheduleDialog({
  employee,
  open,
  onOpenChange,
  onSave,
}: StaffScheduleDialogProps) {

const [schedule, setSchedule] =
  useState<WorkingDay[]>(
    employee?.schedule ?? []
  )


function updateDay(
  day: string,
  changes: Partial<WorkingDay>
) {

  setSchedule((prev) =>
    prev.map((workingDay) =>

      workingDay.day === day

        ? {
            ...workingDay,
            ...changes,
          }

        : workingDay

    )
  )

}
  if (!employee) {
    return null
  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="max-w-3xl">

        <DialogHeader>

          <DialogTitle>

            {employee.name} Schedule

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4">

  <div className="space-y-3">

  {/* Header */}
  <div
    className="
       hidden
    md:grid
    md:grid-cols-[140px_100px_1fr_1fr_1fr]
    gap-4
      px-4
      text-sm
      font-semibold
      text-muted-foreground
    "
  >

    <div>Day</div>

    <div>Enabled</div>

    <div>Start</div>

    <div>End</div>

    <div>Break</div>

  </div>

  {schedule.map((workingDay) => (

    <div
      key={workingDay.day}
      className="
grid
gap-4
items-center
rounded-xl
border
p-4
md:grid-cols-[140px_100px_1fr_1fr_1fr]
"
    >

      {/* Day */}
      <div>

        <p className="font-medium">

          {workingDay.day}

        </p>

      </div>

      {/* Enabled */}
      <div className="flex items-center gap-3">

        <Switch
          checked={workingDay.enabled}
          onCheckedChange={(checked: boolean) =>
            updateDay(
              workingDay.day,
              {
                enabled: checked,
              }
            )
          }
        />

      </div>

      {/* Start */}
      <Input
        type="time"
        value={workingDay.start}
        disabled={!workingDay.enabled}
        onChange={(e) =>
          updateDay(
            workingDay.day,
            {
              start: e.target.value,
            }
          )
        }
      />

      {/* End */}
      <Input
        type="time"
        value={workingDay.end}
        disabled={!workingDay.enabled}
        onChange={(e) =>
          updateDay(
            workingDay.day,
            {
              end: e.target.value,
            }
          )
        }
      />
<div className="space-y-1">

  <Input
    type="time"
    value={workingDay.breakStart ?? ""}
    disabled={!workingDay.enabled}
    onChange={(e) =>
      updateDay(
        workingDay.day,
        {
          breakStart:
            e.target.value,
        }
      )
    }
  />

  <Input
    type="time"
    value={workingDay.breakEnd ?? ""}
    disabled={!workingDay.enabled}
    onChange={(e) =>
      updateDay(
        workingDay.day,
        {
          breakEnd:
            e.target.value,
        }
      )
    }
  />

</div>
    </div>

  ))}

</div>

         <div className="mt-8 flex justify-end gap-3">

  <Button
    variant="outline"
    onClick={() =>
      onOpenChange(false)
    }
  >
    Cancel
  </Button>

  <Button
    onClick={() => {

      onSave({
        ...employee,
        schedule,
      })

      onOpenChange(false)

    }}
  >
    Save Schedule
  </Button>

</div>

        </div>

      </DialogContent>

    </Dialog>

  )

}