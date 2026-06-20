import type { WorkingDay } from "../types/staff"

export const defaultSchedule: WorkingDay[] = [
  {
    day: "Monday",
    enabled: true,
    start: "08:00",
    end: "17:00",
    breakStart: "12:00",
    breakEnd: "13:00",
  },
  {
    day: "Tuesday",
    enabled: true,
    start: "08:00",
    end: "17:00",
    breakStart: "12:00",
    breakEnd: "13:00",
  },
  {
    day: "Wednesday",
    enabled: true,
    start: "08:00",
    end: "17:00",
    breakStart: "12:00",
    breakEnd: "13:00",
  },
  {
    day: "Thursday",
    enabled: true,
    start: "08:00",
    end: "17:00",
    breakStart: "12:00",
    breakEnd: "13:00",
  },
  {
    day: "Friday",
    enabled: true,
    start: "08:00",
    end: "17:00",
    breakStart: "12:00",
    breakEnd: "13:00",
  },
  {
    day: "Saturday",
    enabled: true,
    start: "09:00",
    end: "14:00",
  },
  {
    day: "Sunday",
    enabled: false,
    start: "",
    end: "",
  },
]