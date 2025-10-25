"use client"

import { Button } from "@/registry/default/ui/button"

export default function ButtonDemo() {
  return (
    <div className="space-y-8 p-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Button Sizes</h2>
        <div className="flex items-center flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled Default</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </div>
    </div>
  )
}
