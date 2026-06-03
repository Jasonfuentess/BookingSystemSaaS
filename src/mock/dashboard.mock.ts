import {
  DollarSign,
  CalendarDays,
  Users,
  Scissors,
} from "lucide-react"
export const dashboardStats = [
  {
    title: "Revenue Today",
    value: "$1,250",
    description: "+12% from yesterday",
    icon: DollarSign,
    iconColor: "text-primary",
  },
  {
    title: "Appointments",
    value: "18",
    description: "6 pending confirmation",
    icon: CalendarDays,
    iconColor: "text-blue-500",
  },
  {
    title: "Customers",
    value: "120",
    description: "8 new this month",
    icon: Users,
    iconColor: "text-green-500",
  },
  {
    title: "Staff",
    value: "4",
    description: "All available today",
    icon: Scissors,
    iconColor: "text-pink-500",
  },
]