import type { Service }
from "../features/services/types/Service"

export const servicesData: Service[] = [
  {
    id: "1",
    name: "Hair Coloring",
    category: "Hair",
    duration: 120,
    price: 120,
    color: "#8B5CF6",
    description: "Professional coloring service",
    active: true,
  },

  {
    id: "2",
    name: "Manicure",
    category: "Nails",
    duration: 45,
    price: 30,
    color: "#EC4899",
    description: "Classic manicure",
    active: true,
  },

  {
    id: "3",
    name: "Facial Treatment",
    category: "Skin",
    duration: 90,
    price: 60,
    color: "#10B981",
    description: "Deep facial cleansing",
    active: true,
  },
]