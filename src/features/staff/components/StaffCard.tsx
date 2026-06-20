import {
  Card,
  CardContent,
} from "#components/ui/card"

import { Badge }
from "#components/ui/badge"

import type { Staff }
from "../types/staff"

import { StaffActions }
from "./StaffActions"

type StaffCardProps = {
  staff: Staff

  onEdit: (staff: Staff) => void

  onSchedule: (staff: Staff) => void

  onDuplicate: (staff: Staff) => void

  onDeactivate: (staff: Staff) => void
  onTimeOff: (
  staff: Staff
) => void
}

export function StaffCard({
  staff,
  onEdit,
  onDuplicate,
  onDeactivate,
  onSchedule,
  onTimeOff
}: StaffCardProps) {

  return (

    <Card className="transition-all hover:shadow-lg">

      <CardContent className="space-y-4 p-6">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div
              className="h-12 w-12 rounded-full"
              style={{
                backgroundColor:
                  staff.color,
              }}
            />

            <div>

              <h3 className="font-semibold text-lg">

                {staff.name}

              </h3>

              <p className="text-sm text-muted-foreground">

                {staff.position}

              </p>

            </div>

          </div>

          <div className="flex items-center gap-2">

            <Badge
              variant={
                staff.active
                  ? "default"
                  : "secondary"
              }
            >

              {staff.active
                ? "Active"
                : "Inactive"}

            </Badge>

            <StaffActions
              active={staff.active}
              onEdit={() =>
                onEdit(staff)
              }
              onDuplicate={() =>
                onDuplicate(staff)
              }
              onDeactivate={() =>
                onDeactivate(staff)
              }
              onSchedule={() =>
                 onSchedule(staff)
                 
                }
                 onTimeOff={() =>
                 onTimeOff(staff)
                 
                }
            />

          </div>

        </div>

        <div className="space-y-2">

          <div>

            <p className="text-xs text-muted-foreground">

              Email

            </p>

            <p>

              {staff.email}

            </p>

          </div>

          <div>

            <p className="text-xs text-muted-foreground">

              Phone

            </p>

            <p>

              {staff.phone}

            </p>

          </div>
          <div className="space-y-2">

  <p className="text-xs text-muted-foreground">

    Services

  </p>

  <div className="flex flex-wrap gap-2">

    {staff.services.map((service) => (

      <Badge
        key={service}
        variant="secondary"
      >

        {service}

      </Badge>

    ))}

  </div>

</div>

        </div>

      </CardContent>

    </Card>

  )

}