import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu"

import { Button } from "../../../components/ui/button"

import {
  MoreHorizontal,
  Eye,
  Pencil,
  Ban,
  Trash2,
} from "lucide-react"
type AppointmentActionsProps = {
  onViewDetails: () => void
}
export function AppointmentActions({
  onViewDetails,
}: AppointmentActionsProps) {
      return (
    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          variant="ghost"
          size="icon"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem
  onClick={onViewDetails}
>
  <Eye className="mr-2 h-4 w-4" />

  View Details

</DropdownMenuItem>

        <DropdownMenuItem>

          <Pencil className="mr-2 h-4 w-4" />

          Edit

        </DropdownMenuItem>

        <DropdownMenuItem>

          <Ban className="mr-2 h-4 w-4" />

          Cancel

        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-red-500"
        >

          <Trash2 className="mr-2 h-4 w-4" />

          Delete

        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  )
}