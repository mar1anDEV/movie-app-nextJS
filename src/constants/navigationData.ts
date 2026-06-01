type LinkItem = {
    name: string,
    path: string,
    id?: number 
}

type LinkItemMain = {
    name: string,
    path: string,
    ref: string
}

export const movieGenres: LinkItem[] = [
  { name: 'All Movies', path: '/movies/popular' },
  { id: 28, name: 'Action', path: '/movies/action' },
  { id: 12, name: 'Adventure', path: '/movies/adventure' },
  { id: 16, name: 'Animation', path: '/movies/animation' },
  { id: 35, name: 'Comedy', path: '/movies/comedy' },
  { id: 80, name: 'Crime', path: '/movies/crime' },
  { id: 99, name: 'Documentary', path: '/movies/documentary' },
  { id: 18, name: 'Drama', path: '/movies/drama' },
  { id: 10751, name: 'Family', path: '/movies/family' },
  { id: 14, name: 'Fantasy', path: '/movies/fantasy' },
  { id: 36, name: 'History', path: '/movies/history' },
  { id: 27, name: 'Horror', path: '/movies/horror' },
  { id: 10402, name: 'Music', path: '/movies/music' },
  { id: 9648, name: 'Mystery', path: '/movies/mystery' },
  { id: 10749, name: 'Romance', path: '/movies/romance' },
  { id: 878, name: 'Science Fiction', path: '/movies/science-fiction' },
  { id: 10770, name: 'TV Movie', path: '/movies/tv-movie' },
  { id: 53, name: 'Thriller', path: '/movies/thriller' },
  { id: 10752, name: 'War', path: '/movies/war' },
  { id: 37, name: 'Western', path: '/movies/western' }
];

export const seriesGenres: LinkItem[] = [
  { name: 'All TV-Shows', path: '/tv-shows' },
  { id: 10759, name: 'Action & Adventure', path: '/tv-shows/action-adventure' },
  { id: 16, name: 'Animation', path: '/tv-shows/animation' },
  { id: 35, name: 'Comedy', path: '/tv-shows/comedy' },
  { id: 80, name: 'Crime', path: '/tv-shows/crime' },
  { id: 99, name: 'Documentary', path: '/tv-shows/documentary' },
  { id: 18, name: 'Drama', path: '/tv-shows/drama' },
  { id: 10751, name: 'Family', path: '/tv-shows/family' },
  { id: 10762, name: 'Kids', path: '/tv-shows/kids' },
  { id: 9648, name: 'Mystery', path: '/tv-shows/mystery' },
  { id: 10763, name: 'News', path: '/tv-shows/news' },
  { id: 10764, name: 'Reality', path: '/tv-shows/reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy', path: '/tv-shows/sci-fi-fantasy' },
  { id: 10766, name: 'Soap', path: '/tv-shows/soap' },
  { id: 10767, name: 'Talk', path: '/tv-shows/talk' },
  { id: 10768, name: 'War & Politics', path: '/tv-shows/war-politics' },
  { id: 37, name: 'Western', path: '/tv-shows/western' }
];

export const menuLinks: LinkItemMain[] = [
  { name: 'Home', path: '/',ref:''},
  { name: 'Trending', path: '/movies/trending',ref:''},
  { name: 'Top-Rated', path: '/movies/top-rated',ref:''},
  { name: 'Movies', path: '/movies/popular',ref:'mn-mov-01'},
  { name: 'Series', path: '/tv-shows/top-rated',ref:'mn-tv-01'},
  { name: 'Watch Later', path: '/favorite',ref:''}
];