import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import type { EventClickArg } from "@fullcalendar/core"
import { Separator } from "../../../components/ui/separator"
import { Avatar, AvatarFallback } from "../../../components/ui/avatar"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { useRef,useEffect,useState} from "react"
import { Badge } from "../../../components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import {
 
  Scissors,
  CalendarDays,
  Clock3,
  DollarSign,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog"
import listPlugin from "@fullcalendar/list"

import type { Appointment }
from "../../appointments/types/Appointment"
type SelectedAppointment = {
  title: string
  start: string
  end: string
  customer: string
  staff: string
  price: number
  status: string
}

type SalonCalendarProps = {
  events: Appointment[]
}
export function SalonCalendar({
  events,
}: SalonCalendarProps) {

  const calendarRef = useRef<FullCalendar>(null)

  const [selectedAppointment, setSelectedAppointment] =
    useState<SelectedAppointment | null>(null)

  const [calendarTitle, setCalendarTitle] =
    useState("")

  const [view, setView] =
    useState("month")

  useEffect(() => {
    const api = calendarRef.current?.getApi()

    if (api) {
      setCalendarTitle(api.view.title)
    }
  }, [])

  const handleEventClick = (info: EventClickArg) => {
    setSelectedAppointment({
title: info.event.extendedProps.service,
      start: info.event.start?.toLocaleString() ?? "",
      end: info.event.end?.toLocaleString() ?? "",
      customer: info.event.extendedProps.customer,
      staff: info.event.extendedProps.staff,
      price: info.event.extendedProps.price,
      status: info.event.extendedProps.status,
    })
  }
const handlePrev = () => {
  const api = calendarRef.current?.getApi()

  api?.prev()

  setCalendarTitle(api?.view.title ?? "")
}

const handleNext = () => {
  const api = calendarRef.current?.getApi()

  api?.next()

  setCalendarTitle(api?.view.title ?? "")
}

const handleToday = () => {
  const api = calendarRef.current?.getApi()

  api?.today()

  setCalendarTitle(api?.view.title ?? "")
}
const handleMonthView = () => {
  const api = calendarRef.current?.getApi()

  api?.changeView("dayGridMonth")

  setCalendarTitle(api?.view.title ?? "")
}

const handleWeekView = () => {
  const api = calendarRef.current?.getApi()

  api?.changeView("timeGridWeek")

  setCalendarTitle(api?.view.title ?? "")
}
const handleDayView = () => {
  const api = calendarRef.current?.getApi()

  api?.changeView("timeGridDay")

  setCalendarTitle(api?.view.title ?? "")
}

const handleListView = () => {
  const api = calendarRef.current?.getApi()

  api?.changeView("listWeek")

  setCalendarTitle(api?.view.title ?? "")
}
  return (
    <>
      <Card>
  
        <CardContent className="p-8">

<div className="flex items-center justify-between mb-8">

 <div className="flex gap-2">

  <Button
    variant="outline"
    size="icon"
    onClick={handlePrev}
  >
    <ChevronLeft className="h-4 w-4"/>
  </Button>

  <Button
    variant="outline"
    size="icon"
    onClick={handleNext}
  >
    <ChevronRight className="h-4 w-4"/>
  </Button>

  <Button
    onClick={handleToday}
  >
    Today
  </Button>

</div>

  <div>

  <h2 className="text-3xl font-bold tracking-tight">
    {calendarTitle}
  </h2>

  <p className="text-sm text-muted-foreground">
    Manage salon appointments
  </p>

</div>

  <Tabs
  value={view}
onValueChange={(value: string) => {
      setView(value)

    switch (value) {
      case "month":
        handleMonthView()
        break

      case "week":
        handleWeekView()
        break

      case "day":
        handleDayView()
        break

      case "list":
        handleListView()
        break
    }
  }}
>

<TabsList className="h-11">

  <TabsTrigger value="month">
  Month
</TabsTrigger>

<TabsTrigger value="week">
  Week
</TabsTrigger>

<TabsTrigger value="day">
  Day
</TabsTrigger>

<TabsTrigger value="list">
  List
</TabsTrigger>

  </TabsList>

</Tabs>

</div>
         <FullCalendar
           plugins={[
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
]}
           initialView="dayGridMonth"
           events={events}
           height="auto"
           eventClick={handleEventClick}
           headerToolbar={
             false
           }
         ref={calendarRef}
         eventDisplay="block"
         dayCellClassNames={(arg) =>
    arg.isToday
      ? "bg-primary/10"
      : ""
  }
eventContent={(info) => (

  <div
    className="
      rounded-lg
      px-2
      py-1
      shadow-sm
      overflow-hidden
      transition-all
      hover:scale-[1.02]
      space-y-1
    "
  >

    <p
      className="
        truncate
        text-xs
        font-semibold
      "
    >
      💇 {info.event.extendedProps.service}
    </p>

    <p
      className="
        truncate
        text-[10px]
      "
    >
      {info.event.extendedProps.customer}
    </p>

  </div>

)}
          />
        </CardContent>
      </Card>

      <Dialog
  open={!!selectedAppointment}
  onOpenChange={() => setSelectedAppointment(null)}
  
>
  {selectedAppointment && (
  <>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>

  <div className="flex items-start justify-between">

    <div>

      <DialogTitle className="text-2xl">
        {selectedAppointment.title}
      </DialogTitle>

      <DialogDescription>
        Appointment Details
      </DialogDescription>

    </div>

    <Badge  className={
                selectedAppointment.status.toLowerCase() === "confirmed"
                  ? "background:#7C3AED;"
                  : selectedAppointment.status.toLowerCase() === "pending"
                  ? "bg-yellow-500 text-black"
                  : selectedAppointment.status.toLowerCase() === "completed"
                  ? "bg-green-500 text-black"
                  : "bg-red-500"
                  }>
      {selectedAppointment.status}
    </Badge>

  </div>

</DialogHeader>
<div className="flex flex-col items-center gap-3 py-6">

  <Avatar className="h-20 w-20">
    <AvatarFallback className="text-xl bg-primary text-primary-foreground">
      SJ
    </AvatarFallback>
  </Avatar>

  <div className="text-center">

    <h3 className="text-xl font-semibold">
      {selectedAppointment.customer}
    </h3>

    <p className="text-muted-foreground">
      {selectedAppointment.title}
    </p>

  </div>

</div>
<Separator />

          <div className="space-y-5 py-5">

  <div className="flex justify-between">
    <div className="flex gap-3 items-center">
      <Scissors className="h-5 w-5 text-primary"/>
      <span>Staff</span>
    </div>

    <span className="font-medium">
      {selectedAppointment.staff}
    </span>
  </div>

  <div className="flex justify-between">
    <div className="flex gap-3 items-center">
      <CalendarDays className="h-5 w-5 text-primary"/>
      <span>Date</span>
    </div>

    <span className="font-medium">
      {selectedAppointment.start}
    </span>
  </div>

  <div className="flex justify-between">
    <div className="flex gap-3 items-center">
      <Clock3 className="h-5 w-5 text-primary"/>
      <span>End</span>
    </div>

    <span className="font-medium">
      {selectedAppointment.end}
    </span>
  </div>

  <div className="flex justify-between">
    <div className="flex gap-3 items-center">
      <DollarSign className="h-5 w-5 text-primary"/>
      <span>Price</span>
    </div>

    <span className="font-medium">
      ${selectedAppointment.price}
    </span>
  </div>

</div>
<Separator />
<div className="grid grid-cols-2 gap-3 pt-6">

  <Button>
    Edit Appointment
  </Button>

  <Button variant="outline">
    Cancel
  </Button>

</div>

        </DialogContent>
 </>
)}
      </Dialog >
    </>
  )
}