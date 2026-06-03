import { NavLink } from "react-router-dom"
import {
  BarChart3,
  CalendarDays,
  LayoutDashboard,
  Scissors,
  Settings,
  Sparkles,
  Users,
  UserRound,
  HelpCircle,
} from "lucide-react"

const menuItems = [
  { label: "Dashboard", path: "/app/dashboard", icon: LayoutDashboard },
  { label: "Calendar", path: "/app/calendar", icon: CalendarDays },
  { label: "Appointments", path: "/app/appointments", icon: Sparkles },
  { label: "Customers", path: "/app/customers", icon: Users },
  { label: "Staff", path: "/app/staff", icon: UserRound },
  { label: "Services", path: "/app/services", icon: Scissors },
  { label: "Reports", path: "/app/reports", icon: BarChart3 },
  { label: "Settings", path: "/app/settings", icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-background px-4 py-5">
      <div className="mb-8 rounded-xl border bg-muted/40 p-3">
        <p className="text-xs text-muted-foreground">
        Salon workspace
        </p>
        <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight">
        Glow<span className="text-primary">Book</span>
        </h1>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md transition-all duration-300"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="space-y-1 border-t pt-4">
        <NavLink
          to="/app/settings"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <HelpCircle className="h-4 w-4" />
          Support
        </NavLink>

        <div className="mt-4 flex items-center gap-3 rounded-xl border bg-muted/40 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            A
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Admin</p>
            <p className="truncate text-xs text-muted-foreground">
              admin@glowbook.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}