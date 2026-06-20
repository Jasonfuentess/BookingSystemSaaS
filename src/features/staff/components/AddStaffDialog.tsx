import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"

import { Input } from "#components/ui/input"

import { Button } from "#components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select"

type AddStaffDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void

  onSave: (
    employee: {
      name: string
      position: string
      email: string
      phone: string
      color: string
    }
  ) => void
}

export function AddStaffDialog({
  open,
  onOpenChange,
  onSave,
}: AddStaffDialogProps) {

  const [name, setName] =
    useState("")

  const [position, setPosition] =
    useState("Stylist")

  const [email, setEmail] =
    useState("")

  const [phone, setPhone] =
    useState("")

  const [color, setColor] =
    useState("#8B5CF6")

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-xl">

        <DialogHeader>

          <DialogTitle>

            Add Employee

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-6">

          <div className="space-y-2">

            <p className="text-sm font-medium">
              Name
            </p>

            <Input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div className="space-y-2">

            <p className="text-sm font-medium">
              Position
            </p>

            <Select
              value={position}
              onValueChange={setPosition}
            >

              <SelectTrigger>

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="Stylist">
                  Stylist
                </SelectItem>

                <SelectItem value="Nail Technician">
                  Nail Technician
                </SelectItem>

                <SelectItem value="Barber">
                  Barber
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">

              <p className="text-sm font-medium">
                Email
              </p>

              <Input
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <div className="space-y-2">

              <p className="text-sm font-medium">
                Phone
              </p>

              <Input
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

            </div>

          </div>

          <div className="space-y-2">

            <p className="text-sm font-medium">
              Color
            </p>

            <Input
              type="color"
              value={color}
              onChange={(e) =>
                setColor(e.target.value)
              }
            />

          </div>

          <div className="flex justify-end gap-3">

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
                  name,
                  position,
                  email,
                  phone,
                  color,
                })

                onOpenChange(false)

              }}
            >
              Save Employee
            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>

  )

}