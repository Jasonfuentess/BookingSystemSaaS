import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs"

export function AppointmentFilters() {

  return (

    <Tabs defaultValue="all">

      <TabsList>

        <TabsTrigger value="all">
          All
        </TabsTrigger>

        <TabsTrigger value="confirmed">
          Confirmed
        </TabsTrigger>

        <TabsTrigger value="pending">
          Pending
        </TabsTrigger>

        <TabsTrigger value="completed">
          Completed
        </TabsTrigger>

        <TabsTrigger value="cancelled">
          Cancelled
        </TabsTrigger>

      </TabsList>

    </Tabs>

  )

}