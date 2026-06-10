import { useState } from "react"

import {
  Card,
  CardContent,
} from "#components/ui/card"

import { Input } from "#components/ui/input"
import { Button } from "#components/ui/button"
import { Switch } from "#components/ui/switch"

import {
  businessHoursData,
  type BusinessDay,
} from "../../../../mock/businessHours.mock"

export function BusinessHoursSettings() {
  const [businessHours, setBusinessHours] =
    useState<BusinessDay[]>(businessHoursData)

  const updateDay = (
    dayName: string,
    changes: Partial<BusinessDay>
  ) => {
    setBusinessHours((prev) =>
      prev.map((day) =>
        day.day === dayName
          ? {
              ...day,
              ...changes,
            }
          : day
      )
    )
  }

  return (
    <Card>
      <CardContent className="space-y-6 p-6">
        <div>
          <h2 className="text-xl font-semibold">
            Business Hours
          </h2>

          <p className="text-muted-foreground">
            Set your salon opening and closing hours.
          </p>
        </div>

        <div className="grid gap-4">
          {businessHours.map((day) => (
            <div
              key={day.day}
              className="
                rounded-xl
                border
                bg-background
                p-4
                shadow-sm
              "
            >
              <div className="grid gap-4 md:grid-cols-[160px_1fr] md:items-center">
                <div>
                  <p className="font-semibold">
                    {day.day}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {day.enabled
                      ? "Open"
                      : "Closed"}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-[120px_1fr_1fr] md:items-center">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={day.enabled}
                      onCheckedChange={(checked : boolean) =>
                        updateDay(day.day, {
                          enabled: checked,
                        })
                      }
                    />

                    <span className="text-sm">
                      Open
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      Opens
                    </p>

                    <Input
                      type="time"
                      value={day.open}
                      disabled={!day.enabled}
                      onChange={(e) =>
                        updateDay(day.day, {
                          open: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      Closes
                    </p>

                    <Input
                      type="time"
                      value={day.close}
                      disabled={!day.enabled}
                      onChange={(e) =>
                        updateDay(day.day, {
                          close: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Button>
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}