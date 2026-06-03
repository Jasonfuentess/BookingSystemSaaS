import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

const revenueData = [
  { month: "Jan", revenue: 7200 },
  { month: "Feb", revenue: 8100 },
  { month: "Mar", revenue: 9300 },
  { month: "Apr", revenue: 10500 },
  { month: "May", revenue: 11200 },
  { month: "Jun", revenue: 12800 },
]

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
         <p className="text-sm text-muted-foreground">
    Last 6 months
  </p>
      </CardHeader>

      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid #7C3AED",
                }}
              />            
              <Line
              type="monotone"
              dataKey="revenue"
              stroke="#7C3AED"
              strokeWidth={3}
              dot={{
                fill: "#7C3AED",
                stroke: "#7C3AED",
                r: 5,
              }}
              activeDot={{
                r: 7,
                fill: "#A78BFA",
              }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}