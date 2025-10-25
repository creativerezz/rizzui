export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          RizzUI
        </h1>
        <p className="text-xl text-muted-foreground">
          A custom React component registry built on shadcn-ui principles
        </p>
        <p className="text-muted-foreground">
          Featuring 20 polished components with modern styling, variant support, and rich TypeScript props.
        </p>
      </div>
    </main>
  )
}
