# RizzUI

A custom React component registry built on [shadcn-ui](https://ui.shadcn.com/) principles. RizzUI provides 20 polished, production-ready components with modern styling, comprehensive variant support, and rich TypeScript props.

## Features

- 🎨 **Modern Design System** - Refined color system with primary, secondary, accent, and destructive variants
- 📏 **Consistent Sizing** - All components support sm/md/lg size variants
- 🔧 **TypeScript First** - Fully typed with rich prop interfaces
- 🎭 **Component Composition** - Flexible composition patterns for complex UIs
- 🚀 **CLI Integration** - Easy installation via `shadcn` CLI
- 🌙 **Dark Mode** - Built-in dark mode support
- ♿ **Accessible** - Built with Radix UI primitives for accessibility

## Components

### Form Components
- **Button** - Multiple variants (default, outline, ghost, destructive, link) and sizes
- **Input** - Text input with variant support (default, filled, ghost)
- **Textarea** - Multi-line text input
- **Select** - Dropdown selection with size variants
- **Checkbox** - Boolean input with custom styling
- **Radio Group** - Single selection from multiple options
- **Switch** - Toggle switch component
- **Label** - Form field labels

### Layout Components
- **Card** - Flexible card with Header, Title, Description, Content, Footer
- **Sheet** - Slide-over panel (top, bottom, left, right)
- **Tabs** - Tabbed interface with composition pattern
- **Accordion** - Collapsible content sections
- **Table** - Data table with sorting support

### Feedback Components
- **Alert** - Alert messages (default, destructive, success, warning, info)
- **Toast** - Notification system with variants
- **Dialog** - Modal dialogs
- **Badge** - Status badges with multiple variants and sizes

### Display Components
- **Avatar** - User avatars with fallback and size variants
- **Dropdown Menu** - Context menus with composition pattern

## Installation

### Prerequisites

```bash
npm install -g shadcn@latest
```

### Using the CLI

Initialize your project with RizzUI components:

```bash
npx shadcn@latest init
```

Add components individually:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... etc
```

Or use example blocks:

```bash
npx shadcn@latest add button-demo
npx shadcn@latest add form-demo
npx shadcn@latest add component-showcase
```

## Usage Examples

### Button Component

```tsx
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="space-x-2">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
```

### Card Component

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}
```

### Form Example

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Example() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div>
        <Label htmlFor="role">Role</Label>
        <Select>
          <SelectTrigger id="role">
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## Design System

### Color Palette

RizzUI uses a modern, refined color system built on OKLCH color space:

- **Primary**: Purple-blue accent for primary actions
- **Secondary**: Neutral gray for secondary elements
- **Destructive**: Red for destructive actions
- **Success**: Green for success states
- **Warning**: Yellow for warning states
- **Info**: Blue for informational states

### Spacing Scale

Consistent spacing using Tailwind CSS spacing scale:
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)

### Border Radius

- **sm**: 0.375rem
- **md**: 0.5rem
- **lg**: 0.625rem
- **xl**: 0.75rem

## Development

### Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build registry
npm run registry:build

# Build for production
npm run build
```

### Project Structure

```
rizzui/
├── app/                    # Next.js app directory
├── registry/
│   └── default/
│       ├── ui/            # UI components
│       └── blocks/        # Example blocks
├── hooks/                 # React hooks
├── lib/                   # Utilities
├── public/
│   └── r/                # Built registry files
├── registry.json         # Registry configuration
└── components.json       # shadcn config
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Credits

Built with:
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
