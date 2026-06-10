import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"

import {
  Button
} from "#components/ui/button"

import type { Service }
from "../types/Service"

type DeleteServiceDialogProps = {
  service: Service | null

  open: boolean

  onOpenChange: (
    open: boolean
  ) => void

  onDelete: (
    serviceId: string
  ) => void
}

export function DeleteServiceDialog({
  service,
  open,
  onOpenChange,
  onDelete,
}: DeleteServiceDialogProps) {

  if (!service) {
    return null
  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <DialogTitle>

            Delete Service

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-6">

          <p className="text-muted-foreground">

            Are you sure you want to delete

            <span className="font-medium text-foreground">

              {" "}
              {service.name}
              {" "}

            </span>

            ?

          </p>

          <p className="text-sm text-muted-foreground">

            This action cannot be undone.

          </p>

          <div className="flex justify-end gap-3">

            <Button
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >

              Cancel

            </Button>

            <Button
              variant="destructive"
              onClick={() => {

                onDelete(service.id)

                onOpenChange(false)

              }}
            >

              Delete

            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>

  )

}