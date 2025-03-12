"use client"

import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TemplateSwitcherProps {
  activeTemplate: "minimal" | "creative" | "professional"
  setActiveTemplate: (template: "minimal" | "creative" | "professional") => void
}

export default function TemplateSwitcher({ activeTemplate, setActiveTemplate }: TemplateSwitcherProps) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Switch template</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setActiveTemplate("minimal")}
            className={activeTemplate === "minimal" ? "bg-muted" : ""}
          >
            Minimal
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setActiveTemplate("creative")}
            className={activeTemplate === "creative" ? "bg-muted" : ""}
          >
            Creative
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setActiveTemplate("professional")}
            className={activeTemplate === "professional" ? "bg-muted" : ""}
          >
            Professional
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

