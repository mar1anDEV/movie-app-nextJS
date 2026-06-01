 export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  )
}