
interface Genre{
    id: number,
    name: string
}

interface CastMember{
    name: string
}

interface Crew{
    name: string,
    job: string,
    department: string
}
interface Credits{
    cast: CastMember[],
    crew: Crew[]
}

interface Creator {
    id: number,
    credit_id: string,
    name: string,
    original_name: string,
    gender: number,
    profile_path: string | null
}


interface ReleaseDates{
    certification: string
}

interface ReleaseResults{
    iso_3166_1: string
    release_dates: ReleaseDates[]
}

interface ReleaseDatesWrapper {
    results: ReleaseResults[]
}

interface VideoResult {
    key: string,
    site: string,
    type: string
}

interface Videos {
    results: VideoResult[]
}

export interface TMDBTypes{
    id: number,
    media_type?: string,
    title?: string,
    original_title?: string,
    name?: string,
    tagline: string,
    overview: string,
    poster_path: string,
    backdrop_path: string,
    release_date?: string,
    release_dates?: ReleaseDatesWrapper,
    first_air_date?: string,
    runtime?: number,
    vote_count: number,
    vote_average: number,
    genres: Genre[],
    credits: Credits,
    created_by?: Creator[],
    original_language: string,
    videos?: Videos
}

export interface TMDBListResponse {
    results: TMDBTypes[]
    total_pages: number
    page: number
}