import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "#components/ui/table"

import { Badge } from "#components/ui/badge"

import type { Service }
from "../types/Service"

type ServiceTableProps = {
  services: Service[]
}

export function ServiceTable({
  services,
}: ServiceTableProps) {

  return (

    <Table>

      <TableHeader>

        <TableRow>

          <TableHead>
            Service
          </TableHead>

          <TableHead>
            Category
          </TableHead>

          <TableHead>
            Duration
          </TableHead>

          <TableHead>
            Price
          </TableHead>

          <TableHead>
            Status
          </TableHead>

        </TableRow>

      </TableHeader>

      <TableBody>

        {services.map((service) => (

          <TableRow key={service.id}>

            <TableCell>

              <div className="flex items-center gap-3">

                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor:
                      service.color,
                  }}
                />

                <div>

                  <div className="font-medium">

                    {service.name}

                  </div>

                  <div className="text-sm text-muted-foreground">

                    {service.description}

                  </div>

                </div>

              </div>

            </TableCell>

            <TableCell>

              {service.category}

            </TableCell>

            <TableCell>

              {service.duration} min

            </TableCell>

            <TableCell>

              ${service.price}

            </TableCell>

            <TableCell>

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

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>

  )

}