import { servicesData }
from "../mock/services.mock"
import { AddServiceDialog }
from "../features/services/components/AddServiceDialog"
import { ServiceGrid }
from "../features/services/components/ServiceGrid"
import {useState} from "react"
import { Button } from "../components/ui/button"
import { EditServiceDialog }
from "../features/services/components/EditServiceDialog"

import type { Service }from "../features/services/types/Service"
export function ServicesPage() {
const [openAddDialog, setOpenAddDialog] = useState(false)
const [selectedService, setSelectedService] = useState<Service | null>(null)
const [openEditDialog, setOpenEditDialog] = useState(false)
const [services, setServices] = useState(servicesData)
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
  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Services
          </h1>

          <p className="text-muted-foreground">
            Manage your salon services
          </p>

        </div>

      </div>
<Button
  onClick={() =>
    setOpenAddDialog(true)
  }
>

  + Add Service

</Button>
    <ServiceGrid
  services={services}

  onEdit={(service) => {

    setSelectedService(service)

    setOpenEditDialog(true)

  }}

  onDuplicate={() => {}}

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