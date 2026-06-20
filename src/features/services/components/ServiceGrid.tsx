import type { Service }
from "../types/Service"

import { ServiceCard }
from "./ServiceCard"

type ServiceGridProps = {
  services: Service[]

  onEdit: (service: Service) => void

  onDuplicate: (service: Service) => void

  onDeactivate: (service: Service) => void

  
}

export function ServiceGrid({
  services,
  onEdit,
  onDuplicate,
  onDeactivate,
  
}: ServiceGridProps) {

  return (

    <div
      className="
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      ">

      {services.map((service) => (

        <ServiceCard
  key={service.id}
  service={service}
  onEdit={onEdit}
  onDuplicate={onDuplicate}
  onDeactivate={onDeactivate}
/>

      ))}

    </div>

  )

}