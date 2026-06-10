export type BusinessDay = {
  day: string
  enabled: boolean
  open: string
  close: string
}

export const businessHoursData: BusinessDay[] = [
  {
    day: "Monday",
    enabled: true,
    open: "08:00",
    close: "18:00",
  },
  {
    day: "Tuesday",
    enabled: true,
    open: "08:00",
    close: "18:00",
  },
  {
    day: "Wednesday",
    enabled: true,
    open: "08:00",
    close: "18:00",
  },
  {
    day: "Thursday",
    enabled: true,
    open: "08:00",
    close: "18:00",
  },
  {
    day: "Friday",
    enabled: true,
    open: "08:00",
    close: "19:00",
  },
  {
    day: "Saturday",
    enabled: true,
    open: "09:00",
    close: "16:00",
  },
  {
    day: "Sunday",
    enabled: false,
    open: "",
    close: "",
  },
]