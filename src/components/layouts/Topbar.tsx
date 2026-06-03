import { ThemeToggle } from "../shared/ThemeToggle"

export function Topbar() {
  return (
   <header className="flex h-16 items-center justify-between border-b px-6 ">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <div className="flex items-center gap-2">
         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
            A
        </div>
        </div>
      </div>
    </header>
  )
}