import {
  MoreHorizontal,
  Pencil,
  Copy,
  EyeOff,
} from "lucide-react"

import { Button }
from "#components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "#components/ui/dropdown-menu"

type ServiceActionsProps = {
  active: boolean

  onEdit: () => void

  onDuplicate: () => void

  onDeactivate: () => void
}

export function ServiceActions({
  onEdit,
  onDuplicate,
  onDeactivate,
  active
}: ServiceActionsProps) {

  return (

    <DropdownMenu>

      <DropdownMenuTrigger asChild>

        <Button
          size="icon"
          variant="ghost"
        >

          <MoreHorizontal />

        </Button>

      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuItem
          onClick={onEdit}
        >

          <Pencil className="mr-2 h-4 w-4" />

          Edit Service

        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onDuplicate}
        >

          <Copy className="mr-2 h-4 w-4" />

          Duplicate Service

        </DropdownMenuItem>

       <DropdownMenuItem
  onClick={onDeactivate}
>
  <EyeOff className="mr-2 h-4 w-4" />

  {active
    ? "Deactivate Service"
    : "Activate Service"}

</DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>

  )

}