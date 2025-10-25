"use client"

import { useState } from "react"
import { Button } from "@/registry/default/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/default/ui/card"
import { Badge } from "@/registry/default/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/default/ui/avatar"
import { Alert, AlertDescription, AlertTitle } from "@/registry/default/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/default/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/default/ui/dialog"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/default/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/default/ui/table"
import { Switch } from "@/registry/default/ui/switch"
import { AlertCircle, Bell, CheckCircle, Info } from "lucide-react"

export default function ComponentShowcase() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">RizzUI Component Showcase</h1>
        <p className="text-muted-foreground">
          A comprehensive demonstration of all available components
        </p>
      </div>

      {/* Avatars & Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Avatars & Badges</CardTitle>
          <CardDescription>Display user information and status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="md">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Alerts</h2>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>This is a default alert message.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Success Alert</AlertTitle>
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </Alert>
      </div>

      {/* Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Tabs Example</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-2">
              <p className="text-sm">Manage your account settings and preferences.</p>
            </TabsContent>
            <TabsContent value="password" className="space-y-2">
              <p className="text-sm">Change your password and security settings.</p>
            </TabsContent>
            <TabsContent value="settings" className="space-y-2">
              <p className="text-sm">Configure application settings and preferences.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Accordion */}
      <Card>
        <CardHeader>
          <CardTitle>Accordion Example</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is RizzUI?</AccordionTrigger>
              <AccordionContent>
                RizzUI is a custom React component registry built on shadcn-ui principles,
                providing a comprehensive set of polished UI components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I use it?</AccordionTrigger>
              <AccordionContent>
                Simply install the components you need using the CLI and start using them
                in your React or Next.js application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it customizable?</AccordionTrigger>
              <AccordionContent>
                Yes! All components support Tailwind CSS customization and come with
                built-in variant support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Table Example</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">John Doe</TableCell>
                <TableCell><Badge variant="success">Active</Badge></TableCell>
                <TableCell>Admin</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Jane Smith</TableCell>
                <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                <TableCell>User</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Bob Johnson</TableCell>
                <TableCell><Badge>Active</Badge></TableCell>
                <TableCell>Moderator</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialog & Sheet */}
      <Card>
        <CardHeader>
          <CardTitle>Dialogs & Sheets</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Example</DialogTitle>
                <DialogDescription>
                  This is a modal dialog component for important user interactions.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Dialog content goes here. You can add forms, information, or any other content.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Example</SheetTitle>
                <SheetDescription>
                  This is a slide-over panel component for side content.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Sheet content goes here. Perfect for filters, settings, or additional information.
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      {/* Dark Mode Toggle */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Settings</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-muted-foreground">Toggle dark mode on/off</p>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </CardContent>
      </Card>
    </div>
  )
}
