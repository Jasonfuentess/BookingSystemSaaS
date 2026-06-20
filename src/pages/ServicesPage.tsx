import { servicesData }
from "../mock/services.mock"
import { AddServiceDialog }
from "../features/services/components/AddServiceDialog"
import { ServiceGrid }
from "../features/services/components/ServiceGrid"
import {useState} from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent} from "../components/ui/card"
import { Select,SelectContent,SelectValue,SelectTrigger,SelectItem } from "../components/ui/select"
import { EditServiceDialog }
from "../features/services/components/EditServiceDialog"

import type { Service }from "../features/services/types/Service"
export function ServicesPage() {
const [openAddDialog, setOpenAddDialog] = useState(false)
const [selectedService, setSelectedService] = useState<Service | null>(null)
const [openEditDialog, setOpenEditDialog] = useState(false)
const [services, setServices] = useState(servicesData)
const [search, setSearch] =useState("")
const [category, setCategory] =useState("All")
  const handleUpdateService = (
  updatedService: Service
) => {

  setServices((prev) =>
    prev.map((service) =>
      service.id === updatedService.id
        ? updatedService
        : service
    )
  )

}
const handleDuplicateService = (
  selectedService: Service
) => {

  const duplicate: Service = {

    ...selectedService,

    id: crypto.randomUUID(),

    name:
      `${selectedService.name} Copy`,

  }

  setServices((prev) => [

    duplicate,

    ...prev,

  ])

}
const handleToggleService = (
  selectedService: Service
) => {

  setServices((prev) =>
    prev.map((service) =>
      service.id === selectedService.id
        ? {
            ...service,
            active: !service.active,
          }
        : service
    )
  )

}
const filteredServices =
  services.filter((service) => {

    const matchesSearch =
      service.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )

    const matchesCategory =
      category === "All"
      ||
      service.category === category

    return (
      matchesSearch
      &&
      matchesCategory
    )

  })

  const totalServices =
  services.length

const activeServices =
  services.filter(
    (service) => service.active
  ).length

const averagePrice =
  Math.round(
    services.reduce(
      (sum, service) =>
        sum + service.price,
      0
    ) / services.length
  )

const averageDuration =
  Math.round(
    services.reduce(
      (sum, service) =>
        sum + service.duration,
      0
    ) / services.length
  )
  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Services
          </h1>
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Total Services
      </p>

      <p className="mt-2 text-3xl font-bold">
        {totalServices}
      </p>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Active Services
      </p>

      <p className="mt-2 text-3xl font-bold">
        {activeServices}
      </p>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Average Price
      </p>

      <p className="mt-2 text-3xl font-bold">
        ${averagePrice}
      </p>

    </CardContent>

  </Card>

  <Card>

    <CardContent className="p-6">

      <p className="text-sm text-muted-foreground">
        Average Duration
      </p>

      <p className="mt-2 text-3xl font-bold">
        {averageDuration} min
      </p>

    </CardContent>

  </Card>

</div>
          <p className="text-muted-foreground">
            Manage your salon services
          </p>

        </div>

      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <Input
    placeholder="Search services..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    className="max-w-sm"
  />

  <Select
    value={category}
    onValueChange={setCategory}
  >

    <SelectTrigger className="w-[180px]">

      <SelectValue />

    </SelectTrigger>

    <SelectContent>

      <SelectItem value="All">
        All
      </SelectItem>

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
<Button
  onClick={() =>
    setOpenAddDialog(true)
  }
>

  + Add Service

</Button>
    <ServiceGrid
  services={filteredServices}

  onEdit={(service) => {

    setSelectedService(service)

    setOpenEditDialog(true)

  }}

 onDuplicate={(service) => {

  handleDuplicateService(
    service
  )

}}

  onDeactivate={(service) => {

  handleToggleService(service)

}}

/>
       <EditServiceDialog
  service={selectedService}
  open={openEditDialog}
  onOpenChange={setOpenEditDialog}
  onSave={handleUpdateService}
/>

<AddServiceDialog
  open={openAddDialog}
  onOpenChange={setOpenAddDialog}
/>
    </div>

  )

}