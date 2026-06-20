export type WorkingDay = {
  day: string

  enabled: boolean

  start: string

  end: string

  breakStart?: string

  breakEnd?: string
}

export type StaffSchedule = {
  monday: WorkingDay

  tuesday: WorkingDay

  wednesday: WorkingDay

  thursday: WorkingDay

  friday: WorkingDay

  saturday: WorkingDay

  sunday: WorkingDay
}
export type TimeOff = {
  id: string

  startDate: string

  endDate: string

  reason: string
}
export type Staff = {
  id: string

  name: string

  position: string

  phone: string

  email: string

  color: string

  active: boolean

  services: string[]

  schedule: WorkingDay[]

timeOff: TimeOff[]
}