import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"

import {
  Card,
  CardContent,
} from "#components/ui/card"

import { Input } from "#components/ui/input"

import { Button } from "#components/ui/button"

import type {
  Staff,
  TimeOff,
} from "../types/staff"

type StaffTimeOffDialogProps = {
  employee: Staff | null

  open: boolean

  onOpenChange: (
    open: boolean
  ) => void

  onSave: (
    employee: Staff
  ) => void
}

export function StaffTimeOffDialog({
  employee,
  open,
  onOpenChange,
  onSave,
}: StaffTimeOffDialogProps) {

  const [startDate, setStartDate] =
    useState("")

  const [endDate, setEndDate] =
    useState("")

  const [reason, setReason] =
    useState("")

  function handleAddTimeOff() {

    if (!employee)
      return

    if (
      !startDate ||
      !endDate ||
      !reason
    ) {
      return
    }

    const newTimeOff: TimeOff = {

      id: crypto.randomUUID(),

      startDate,

      endDate,

      reason,

    }

    onSave({

      ...employee,

      timeOff: [
        ...employee.timeOff,
        newTimeOff,
      ],

    })

    setStartDate("")
    setEndDate("")
    setReason("")

  }

  function handleDeleteTimeOff(
    id: string
  ) {

    if (!employee)
      return

    onSave({

      ...employee,

      timeOff:
        employee.timeOff.filter(
          (item) =>
            item.id !== id
        ),

    })

  }

  if (!employee)
    return null

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="max-w-3xl">

        <DialogHeader>

          <DialogTitle>

            {employee.name}
            {" "}
            Vacation / Time Off

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-8">

          {/* Form */}
          <div className="grid gap-6 md:grid-cols-3">

            <div className="space-y-2">

              <p className="text-sm font-medium">

                Start Date

              </p>

              <Input
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="space-y-2">

              <p className="text-sm font-medium">

                End Date

              </p>

              <Input
                type="date"
                value={endDate}
                onChange={(e) =>
                  setEndDate(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="space-y-2">

              <p className="text-sm font-medium">

                Reason

              </p>

              <Input
                placeholder="Vacation"
                value={reason}
                onChange={(e) =>
                  setReason(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          <div className="flex justify-end">

            <Button
              onClick={handleAddTimeOff}
            >

              Add Time Off

            </Button>

          </div>

          {/* Existing Time Off */}
          <div className="space-y-4">

            {employee.timeOff.length === 0 && (

              <div className="text-center text-sm text-muted-foreground">

                No time off registered.

              </div>

            )}

            {employee.timeOff.map(
              (item) => (

                <Card
                  key={item.id}
                >

                  <CardContent className="flex items-center justify-between p-5">

                    <div>

                      <p className="font-medium">

                        {item.reason}

                      </p>

                      <p className="text-sm text-muted-foreground">

                        {item.startDate}

                        {" - "}

                        {item.endDate}

                      </p>

                    </div>

                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() =>
                        handleDeleteTimeOff(
                          item.id
                        )
                      }
                    >

                      Delete

                    </Button>

                  </CardContent>

                </Card>

              )
            )}

          </div>

        </div>

      </DialogContent>

    </Dialog>

  )

}