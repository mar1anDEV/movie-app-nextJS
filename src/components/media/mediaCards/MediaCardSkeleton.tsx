export default function MediaCardSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading card"
      className="relative w-full h-[375px] lg:h-[345px] rounded-lg bg-white/5 animate-pulse overflow-hidden"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Image placeholder */}
      <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
        <svg
          className="w-11 h-11 text-white/20"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
          />
        </svg>
      </div>
    </div>
  )
}