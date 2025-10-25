# RizzUI Usage Guide

This guide explains how to use the RizzUI component registry in your projects.

## Installation

### Prerequisites

Make sure you have Node.js and npm installed. Install the shadcn CLI globally:

```bash
npm install -g shadcn@latest
```

### Initialize shadcn in your project

If you haven't already, initialize shadcn in your Next.js or React project:

```bash
npx shadcn@latest init
```

Follow the prompts to configure your project.

### Add RizzUI components

You can add individual components from the RizzUI registry:

```bash
npx shadcn@latest add https://raw.githubusercontent.com/creativerezz/rizzui/main/public/r/button.json
```

Or use the local registry if you've cloned this repository:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... etc
```

## Component Usage Examples

### Button

```tsx
import { Button } from "@/components/ui/button"

export function ButtonExample() {
  return (
    <div className="space-x-2">
      {/* Variants */}
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
      
      {/* Sizes */}
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      
      {/* States */}
      <Button disabled>Disabled</Button>
    </div>
  )
}
```

### Card

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  )
}
```

### Input & Form

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function FormExample() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="john@example.com"
          variant="default"
          inputSize="md"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password"
          inputSize="md"
        />
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

### Select

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectExample() {
  return (
    <Select>
      <SelectTrigger size="md">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  )
}
```

### Dialog

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

### Alert

```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

export function AlertExample() {
  return (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational alert.
        </AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong.
        </AlertDescription>
      </Alert>
    </div>
  )
}
```

### Toast

```tsx
"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ToastExample() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Notification",
          description: "This is a toast notification!",
          variant: "default",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

// Don't forget to add the Toaster component to your root layout:
// import { Toaster } from "@/components/ui/toaster"
```

### Tabs

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsExample() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Content for Tab 1
      </TabsContent>
      <TabsContent value="tab2">
        Content for Tab 2
      </TabsContent>
      <TabsContent value="tab3">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  )
}
```

### Accordion

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionExample() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Question 1</AccordionTrigger>
        <AccordionContent>
          Answer to question 1 goes here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question 2</AccordionTrigger>
        <AccordionContent>
          Answer to question 2 goes here.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Table

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableExample() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
```

### Avatar

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarExample() {
  return (
    <div className="flex gap-4">
      <Avatar size="sm">
        <AvatarImage src="/avatar.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <Avatar size="md">
        <AvatarImage src="/avatar.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <Avatar size="lg">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge"

export function BadgeExample() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      
      {/* Sizes */}
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
}
```

### Sheet

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Sheet description goes here.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          {/* Sheet content */}
        </div>
      </SheetContent>
    </Sheet>
  )
}
```

### Dropdown Menu

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DropdownExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### Checkbox & Radio Group

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function CheckboxExample() {
  return (
    <div className="space-y-4">
      {/* Checkbox */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      
      {/* Radio Group */}
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
```

### Switch

```tsx
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SwitchExample() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
```

## Running Examples

To see all components in action, you can install the example blocks:

```bash
# Button demo
npx shadcn@latest add button-demo

# Form demo
npx shadcn@latest add form-demo

# Complete showcase
npx shadcn@latest add component-showcase
```

## Customization

All components support Tailwind CSS customization through the `className` prop:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Custom Button
</Button>
```

You can also customize the design tokens in your `app/globals.css` file by modifying the CSS variables.

## TypeScript Support

All components are fully typed with TypeScript. Import types as needed:

```tsx
import { Button, ButtonProps } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
```

## Contributing

To add new components or improve existing ones, follow the shadcn-ui component structure and maintain consistency with the existing design system.
