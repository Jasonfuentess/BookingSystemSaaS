import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "#components/ui/dialog"

import { Input } from "#components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#components/ui/select"

import { Button } from "#components/ui/button"

type AddServiceDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddServiceDialog({
  open,
  onOpenChange,
}: AddServiceDialogProps) {

  const [name, setName] =
    useState("")

  const [category, setCategory] =
    useState("Hair")

  const [duration, setDuration] =
    useState(60)

  const [price, setPrice] =
    useState(0)

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-xl">

        <DialogHeader>

          <DialogTitle>

            Add Service

          </DialogTitle>

        </DialogHeader>

        <div className="space-y-6">

          <div className="space-y-2">

            <p className="text-sm font-medium">

              Service Name

            </p>

            <Input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div className="space-y-2">

            <p className="text-sm font-medium">

              Category

            </p>

            <Select
              value={category}
              onValueChange={setCategory}
            >

              <SelectTrigger>

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="Hair">
                  Hair
                </SelectItem>

                <SelectItem value="Nails">
                  Nails
                </SelectItem>

                <SelectItem value="Skin">
                  Skin
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="space-y-2">

              <p className="text-sm font-medium">

                Duration (minutes)

              </p>

              <Input
                type="number"
                value={duration}
                onChange={(e) =>
                  setDuration(
                    Number(
                      e.target.value
                    )
                  )
                }
              />

            </div>

            <div className="space-y-2">

              <p className="text-sm font-medium">

                Price

              </p>

              <Input
                type="number"
                value={price}
                onChange={(e) =>
                  setPrice(
                    Number(
                      e.target.value
                    )
                  )
                }
              />

            </div>

          </div>

          <div className="flex justify-end gap-3">

            <Button
              variant="outline"
              onClick={() =>
                onOpenChange(false)
              }
            >

              Cancel

            </Button>

            <Button>

              Save Service

            </Button>

          </div>

        </div>

      </DialogContent>

    </Dialog>

  )

}