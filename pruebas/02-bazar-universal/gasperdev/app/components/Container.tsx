export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex  p-1 min-h-screen  max-w-lg mx-auto ">
      {children}
    </main>
  )
}
