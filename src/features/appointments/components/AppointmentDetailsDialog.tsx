import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog"

import { Badge } from "../../../components/ui/badge"
import { Separator } from "../../../components/ui/separator"
import { Avatar, AvatarFallback } from "../../../components/ui/avatar"
import type { Appointment } from "../types/Appointment"
import {
  Scissors,
  CalendarDays,
  Clock3,
  DollarSign,
} from "lucide-react"

import { Button } from "../../../components/ui/button"



type AppointmentDetailsDialogProps = {
  appointment: Appointment | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AppointmentDetailsDialog({
  appointment,
  open,
  onOpenChange,
}: AppointmentDetailsDialogProps) {
  if (!appointment) return null

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-2xl">
                {appointment.service}
              </DialogTitle>

              <DialogDescription>
                Appointment Details
              </DialogDescription>
            </div>

            <Badge>
              {appointment.status}
            </Badge>
          </div>
        </DialogHeader>

        <div className="flex flex-col items-center gap-3 py-6">
          <Avatar className="h-20 w-20">
            <AvatarFallback
              className="
              bg-primary
              text-primary-foreground
              text-xl
              "
            >
              {appointment.customer
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="text-center">
            <h3 className="text-xl font-semibold">
              {appointment.customer}
            </h3>

            <p className="text-muted-foreground">
              {appointment.service}
            </p>
          </div>
        </div>

        <Separator />

        <div className="space-y-5 py-5">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Scissors className="h-5 w-5 text-primary" />
              <span>Staff</span>
            </div>

            <span className="font-medium">
              {appointment.staff}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span>Date</span>
            </div>

            <span className="font-medium">
              {appointment.date}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-primary" />
              <span>Time</span>
            </div>

            <span className="font-medium">
              {appointment.time}
            </span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <DollarSign className="h-5 w-5 text-primary" />
              <span>Price</span>
            </div>

            <span className="font-medium">
              ${appointment.price}
            </span>
          </div>
        </div>

        <Separator />

        <div className="grid grid-cols-2 gap-3 pt-5">
          <Button>
            Edit Appointment
          </Button>

          <Button variant="outline">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}