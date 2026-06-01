const BASE_URL = 'https://api.themoviedb.org/3'

export async function getMediaList(type: string, endParam: string, page = 1) {
  const res = await fetch(`${BASE_URL}/${type}/${endParam}?page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`
    },
    next: { revalidate: 3600 }
  })
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  return res.json()
}

export async function getTrending(type: string, timeWindow: 'day' | 'week', page = 1) {
  const res = await fetch(`${BASE_URL}/trending/${type}/${timeWindow}?page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`
    },
    next: { revalidate: 3600 }
  })
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  return res.json()
}

export async function getMediaDetails(type: string, id: number) {
  const res = await fetch(`${BASE_URL}/${type}/${id}?append_to_response=credits,release_dates,videos`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`
    },
    next: { revalidate: 86400 }
  })
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  return res.json()
}

export async function searchMedia(query: string) {
  const res = await fetch(`${BASE_URL}/search/multi?query=${encodeURIComponent(query)}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`
    },
    next: { revalidate: 0 }
  })
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`)
  return res.json()
}