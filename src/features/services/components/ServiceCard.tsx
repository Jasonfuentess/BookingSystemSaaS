import {
  Card,
  CardContent,
} from "#components/ui/card"

import { Badge } from "#components/ui/badge"

import type { Service }
from "../types/Service"
import { ServiceActions }
from "./ServiceActions"
type ServiceCardProps = {
  service: Service

  onEdit: (service: Service) => void

  onDuplicate: (service: Service) => void

  onDeactivate: (service: Service) => void

}

export function ServiceCard({
  service,
    onEdit,
  onDuplicate,
  onDeactivate,
}: ServiceCardProps) {

  return (

    <Card className="transition-all hover:shadow-lg">

      <CardContent className="space-y-4 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div
              className="h-5 w-5 rounded-full"
              style={{
                backgroundColor:
                  service.color,
              }}
            />

            <div>

              <h3 className="font-semibold text-lg">

                {service.name}

              </h3>

              <p className="text-sm text-muted-foreground">

                {service.category}

              </p>

            </div>

          </div>

           <Badge
    variant={
      service.active
        ? "default"
        : "secondary"
    }
  >

    {service.active
      ? "Active"
      : "Inactive"}

  </Badge>

 <ServiceActions
  active={service.active}
  onEdit={() => onEdit(service)}
  onDuplicate={() => onDuplicate(service)}
  onDeactivate={() => onDeactivate(service)}
/>

        </div>

        <p className="text-sm text-muted-foreground">

          {service.description}

        </p>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs text-muted-foreground">

              Duration

            </p>

            <p className="font-medium">

              {service.duration} min

            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">

              Price

            </p>

            <p className="font-medium text-lg">

              ${service.price}

            </p>

          </div>

        </div>

      </CardContent>

    </Card>

  )

}