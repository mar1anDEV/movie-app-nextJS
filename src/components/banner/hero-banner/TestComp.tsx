<section className="relative min-h-[620px] overflow-hidden md:min-h-[780px]">
      
  {/* Video background */}
  <div className="absolute inset-0 z-0">
    {isMobile ? (
  <Image
    src={`https://image.tmdb.org/t/p/w780${contentPosterPath}`}
    alt={contentTitle}
    fill
    className="object-cover object-center"
    priority
  />
) : (
  <HlsPlayer muted={isMuted} src={contentVideoSrc} />
)}
  </div>

  {/* Gradients - z-10, behind navbar z-50 */}
  <div className="absolute inset-0  bg-gradient-to-r from-black via-black/70 to-black/10" />
  <div className="absolute inset-0  bg-gradient-to-t from-black via-black/20 to-black/40" />

  {/* Navbar spacer */}
  <div className="relative z-20 h-[96px]" />

  {/* Content */}
  <div className="relative z-20 xl:mx-18 flex min-h-[calc(620px-96px)] max-w-[1600px] items-center px-4 pb-10 pt-4 md:min-h-[calc(780px-96px)] md:px-8">
    <div className="max-w-2xl">

      {/* Title */}
      <h1 className="text-5xl max-w-xl font-black uppercase tracking-tight text-white md:text-7xl">
        {contentTitle}
      </h1>

      {/* Meta pills */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Pill>{contentReleaseDate}</Pill>
        <Pill>{contentAge}+</Pill>
        <Pill>{contentDuration}</Pill>
        <Pill>{contentRaterProvider}</Pill>
      </div>

      {/* Rating */}
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <Star className="fill-yellow-400 text-yellow-400" size={18} />
        <span className="text-white">{(contentRating / 2).toFixed(1)}</span>
        <span className="rounded bg-gradient-to-r from-[#6daaba] to-[#01b4e4] px-2 py-1 text-xs font-black text-white">
          {contentRaterProvider}
        </span>
      </div>

      {/* Genres */}
      <div className="mt-4 flex flex-wrap gap-2">
        {contentGenre?.map((g) => (
          <Pill key={g.id}>{g.name}</Pill>
        ))}
      </div>

      
      <p className="mt-5 max-w-lg leading-7 text-white/75 line-clamp-3">
        {contentDescription}
      </p>

      
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => router.push(`/watch/${contentID}?type=${contentType}`)}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FFA500] px-7 font-bold text-black transition hover:bg-yellow-300 cursor-pointer"
        >
          <Play size={18} className="fill-black" />
          Play Now
        </button>
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold transition hover:bg-white/10 cursor-pointer text-white"
        >
          <Play size={18} />
          See Trailer
        </button>
        <button    
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 font-semibold transition hover:bg-white/10 cursor-pointer text-white"
        >
          <Plus size={18} />
          Add to Watchlist
        </button>
        <div className='hidden md:block'><BtnVolumeMedia
          
          onVolumeState={isMuted}
          onClick={() => setIsMuted(!isMuted)}
        /></div>
      </div>

    </div>
  </div>

  {/* Bottom fade */}
  <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent" />
</section>