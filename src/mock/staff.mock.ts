import type { Staff }
from "../features/staff/types/staff"
import { defaultSchedule } from "../features/staff/constants/defaultSchedule"
export const staffData: Staff[] = [

  {
    id: "1",

    name: "Emma Wilson",

    position: "Stylist",

    phone: "(555) 123-4567",

    email: "emma@glowbook.com",

    color: "#8B5CF6",

    active: true,

    services: [
      "Hair Coloring",
      "Hair Styling",
      "Keratin Treatment",
    ],

  schedule: structuredClone(defaultSchedule),

    timeOff: [

      {
        id: "1",

        startDate: "2026-07-15",

        endDate: "2026-07-20",

        reason: "Vacation",
      },

    ],

  },

  {
    id: "2",

    name: "Sophia Martinez",

    position: "Nail Technician",

    phone: "(555) 987-6543",

    email: "sophia@glowbook.com",

    color: "#EC4899",

    active: true,

    services: [
      "Manicure",
      "Pedicure",
      "Gel Polish",
    ],

    schedule: [

      {
        day: "Monday",
        enabled: true,
        start: "09:00",
        end: "18:00",
        breakStart: "13:00",
        breakEnd: "14:00",
      },

      {
        day: "Tuesday",
        enabled: true,
        start: "09:00",
        end: "18:00",
        breakStart: "13:00",
        breakEnd: "14:00",
      },

      {
        day: "Wednesday",
        enabled: true,
        start: "09:00",
        end: "18:00",
        breakStart: "13:00",
        breakEnd: "14:00",
      },

      {
        day: "Thursday",
        enabled: true,
        start: "09:00",
        end: "18:00",
        breakStart: "13:00",
        breakEnd: "14:00",
      },

      {
        day: "Friday",
        enabled: true,
        start: "09:00",
        end: "18:00",
        breakStart: "13:00",
        breakEnd: "14:00",
      },

      {
        day: "Saturday",
        enabled: true,
        start: "09:00",
        end: "15:00",
      },

      {
        day: "Sunday",
        enabled: false,
        start: "",
        end: "",
      },

    ],

    timeOff: [],

  },

]