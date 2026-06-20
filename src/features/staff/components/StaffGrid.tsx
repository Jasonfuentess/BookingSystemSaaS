import type { Staff }
from "../types/staff"

import { StaffCard }
from "./StaffCard"

type StaffGridProps = {
  staff: Staff[]

  onEdit: (
    staff: Staff
  ) => void

  onSchedule: (
    staff: Staff
  ) => void
 onTimeOff: (
    staff: Staff
  ) => void
  onDuplicate: (
    staff: Staff
  ) => void

  onDeactivate: (
    staff: Staff
  ) => void
}

export function StaffGrid({
  staff,
  onEdit,
  onDuplicate,
  onDeactivate,
  onSchedule,
  onTimeOff
}: StaffGridProps) {

  return (

    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      "
    >

      {staff.map((employee) => (

     <StaffCard
  key={employee.id}
  staff={employee}
  onEdit={onEdit}
  onSchedule={onSchedule}
  onTimeOff={onTimeOff}
  onDuplicate={onDuplicate}
  onDeactivate={onDeactivate}
/>

      ))}

    </div>

  )

}