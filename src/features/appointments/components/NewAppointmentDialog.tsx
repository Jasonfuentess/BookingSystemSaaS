import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"

import { Input } from "../../../components/ui/input"
import { useAppointmentStore } from "../../../stores/useAppointmentStore"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { DateTimePicker }from "./DateTimePicker"
import { Button } from "../../../components/ui/button"
import "react-datepicker/dist/react-datepicker.css"
import "react-datepicker/dist/react-datepicker.css"
const formSchema = z.object({
  customer: z.string().min(2),

  service: z.string(),

  staff: z.string(),

  price: z.number().min(1),

  start: z.date(),

  end: z.date(),

  status: z.string(),
})
type FormValues = z.infer<typeof formSchema>
type NewAppointmentDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}
export function NewAppointmentDialog({
  open,
  onOpenChange,
}: NewAppointmentDialogProps) {

const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),

defaultValues: {
  customer: "",

  service: "",

  staff: "",

  price: 0,

  start: new Date(),

  end: new Date(),

  status: "confirmed",
}
  })
const addAppointment =
  useAppointmentStore(
    (state) => state.addAppointment
  )
const appointments =
  useAppointmentStore(
    (state) => state.appointments
  )
  const selectedDate =
  form.watch("start")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const disabledTimes = appointments
  .filter((appointment) => {

    const appointmentDate =
      new Date(appointment.start)

    return (
      appointmentDate.toDateString() ===
      selectedDate.toDateString()
    )
  })
  .map((appointment) => {

    return new Date(
      appointment.start
    ).toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }
    )
  })
function onSubmit(values: FormValues) {

  addAppointment({
    id: crypto.randomUUID(),

    customer: values.customer,

    service: values.service,

    staff: values.staff,

    start: values.start.toISOString(),

    end: values.end.toISOString(),

    price: values.price,

    status: values.status,
  })

  form.reset()

  onOpenChange(false)
}
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="  max-w-6xl
    h-[90vh]
    overflow-hidden">

        <DialogHeader>
          <DialogTitle className="text-2xl">
            New Appointment
          </DialogTitle>

        </DialogHeader>
<div className="overflow-y-auto pr-2">

        <Form {...form}>

          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
<div className="grid gap-6 md:grid-cols-2">

            {/* Customer */}
            <FormField
              control={form.control}
              name="customer"
              render={({ field }) => (
                <FormItem>

                  <FormLabel>
                    Customer
                  </FormLabel>

                  <FormControl>

                    <Input
                      placeholder="Sarah Johnson"
                      {...field}
                    />

                  </FormControl>

                  <FormMessage />

                </FormItem>
              )}
            />

            {/* Service */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>

                  <FormLabel>
                    Service
                  </FormLabel>

                  <Select
                    onValueChange={field.onChange}
                  >

                    <FormControl>

                      <SelectTrigger>

                        <SelectValue placeholder="Select service" />

                      </SelectTrigger>

                    </FormControl>

                    <SelectContent>

                      <SelectItem value="Hair Coloring">
                        Hair Coloring
                      </SelectItem>

                      <SelectItem value="Manicure">
                        Manicure
                      </SelectItem>

                      <SelectItem value="Facial Treatment">
                        Facial Treatment
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </FormItem>
              )}
            />
</div>
<div className="grid gap-6 md:grid-cols-3">

            {/* Staff */}
            <FormField
              control={form.control}
              name="staff"
              render={({ field }) => (
                <FormItem>

                  <FormLabel>
                    Staff
                  </FormLabel>

                  <Select
                    onValueChange={field.onChange}
                  >

                    <FormControl>

                      <SelectTrigger>

                        <SelectValue placeholder="Select staff" />

                      </SelectTrigger>

                    </FormControl>

                    <SelectContent>

                      <SelectItem value="Emma Wilson">
                        Emma Wilson
                      </SelectItem>

                      <SelectItem value="Sophia Martinez">
                        Sophia Martinez
                      </SelectItem>

                    </SelectContent>

                  </Select>

                </FormItem>
              )}
            />

            {/* Price */}
            <FormField
  control={form.control}
  name="price"
  render={({ field }) => (
    <FormItem>

      <FormLabel>
        Price
      </FormLabel>

      <FormControl>

  <Input
  type="number"
  placeholder="120"
  value={
    typeof field.value === "number"
      ? field.value === 0
        ? ""
        : field.value
      : ""
  }
  onChange={(e) =>
    field.onChange(
      e.target.value === ""
        ? 0
        : Number(e.target.value)
    )
  }
/>

      </FormControl>

      <FormMessage />

    </FormItem>
  )}
  
/>
{/* status */}

<FormField
  control={form.control}
  name="status"
  render={({ field }) => (
    <FormItem>

      <FormLabel>
        Status
      </FormLabel>

      <Select
        onValueChange={field.onChange}
      >

        <FormControl>

          <SelectTrigger>

            <SelectValue />

          </SelectTrigger>

        </FormControl>

        <SelectContent>

          <SelectItem value="confirmed">
            Confirmed
          </SelectItem>

          <SelectItem value="pending">
            Pending
          </SelectItem>

          <SelectItem value="completed">
            Completed
          </SelectItem>

          <SelectItem value="cancelled">
            Cancelled
          </SelectItem>

        </SelectContent>

      </Select>

      <FormMessage />

    </FormItem>
  )}
/>
</div>
 {/* datepicker */}
 <div className="space-y-3">

  <h3 className="text-lg font-semibold">
    Date & Time
  </h3>
<FormField
  control={form.control}
  name="start"
  render={({ field: startField }) => (
    <FormField
      control={form.control}
      name="end"
      render={({ field: endField }) => (

    <DateTimePicker
  start={startField.value}
  end={endField.value}
  onStartChange={startField.onChange}
  onEndChange={endField.onChange}
  appointments={appointments}
  selectedStaff={
  form.watch("staff")
}
/>

      )}
    />
  )}
/>
</div>
<div className="space-y-2">


</div>
<div className=" bottom-0 ">

    <div className="mt-auto flex justify-end gap-3 pt-6">
          <Button
            variant="outline"
            type="button"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button type="submit">
            Create Appointment
          </Button>
        </div>

</div>

          </form>

        </Form>
</div>
      </DialogContent>
    </Dialog>
  )
}