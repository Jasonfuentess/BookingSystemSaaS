import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import type{ LucideIcon } from "lucide-react"

type StatCardProps = {
  title: string
  value: string
  description: string
  icon: LucideIcon
  iconColor?: string
}
export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  iconColor = "text-primary",
  
}: StatCardProps) {
  return (
<Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"> 
       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <Icon className={`h-5 w-5 ${iconColor}`} />
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}