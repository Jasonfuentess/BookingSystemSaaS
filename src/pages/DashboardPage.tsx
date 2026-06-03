import { StatCard } from "../features/dashboard/Components/StatCard"
import { dashboardStats } from "../mock/dashboard.mock"
import { RevenueChart } from "../features/dashboard/Components/RevenueChart"
import { UpcomingAppointments } from "../features/dashboard/Components/UpcomingAppointments"
import { appointmentData } from "../mock/appointments.mock"

export function DashboardPage() {
  return (
    <div className="space-y-6 ">
      <div >
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome back, Admin. Here is your salon overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            icon={stat.icon}
            iconColor={stat.iconColor}
            title={stat.title}
            value={stat.value}
            description={stat.description}
          />
        ))}
      </div>

       <div className="grid gap-6 lg:grid-cols-2">
  <UpcomingAppointments appointments={appointmentData} />
  <RevenueChart />
</div>

        

    </div>
  )
}