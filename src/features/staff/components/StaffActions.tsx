import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#components/ui/dropdown-menu"

import { Button }
from "#components/ui/button"
import {
  MoreHorizontal,
  Pencil,
  Copy,
  EyeOff,
  CalendarDays,
  Plane
} from "lucide-react"
type StaffActionsProps = {
  active: boolean

  onEdit: () => void

  onSchedule: () => void

  onDuplicate: () => void

  onDeactivate: () => void
  onTimeOff: () => void
}

export function StaffActions({
  active,
  onEdit,
  onSchedule,
  onDuplicate,
  onDeactivate,
  onTimeOff
}: StaffActionsProps){

  return (

    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          variant="ghost"
          size="icon"
        >

          <MoreHorizontal />

        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuItem
          onClick={onEdit}
        >

          <Pencil className="mr-2 h-4 w-4" />

          Edit Employee

        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onSchedule}
        >
        
          <CalendarDays className="mr-2 h-4 w-4" />
        
          Schedule
        
        </DropdownMenuItem>
        <DropdownMenuItem
  onClick={onTimeOff}
>

  <Plane className="mr-2 h-4 w-4" />

  Vacation / Time Off

</DropdownMenuItem>
        <DropdownMenuItem
          onClick={onDuplicate}
        >

          <Copy className="mr-2 h-4 w-4" />

          Duplicate Employee

        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onDeactivate}
        >

          <EyeOff className="mr-2 h-4 w-4" />

          {active
            ? "Deactivate Employee"
            : "Activate Employee"}

        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>

  )

}