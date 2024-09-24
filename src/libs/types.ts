/* eslint-disable no-unused-vars */
export interface ImageProps {
    id: number
    height: string
    width: string
    public_id: string
    format: string
    blurDataUrl?: string
    location?: string
}

export interface CityArray extends Array<CitiesProps> {}
interface CitiesProps {
    name: string
    lat: string
    lon: string
    details: string
    id: number
}
