import { Artwork } from "./Artwork"

export interface Artist {
    id: string
    name : string
    description : string
    pictureUrl: string
    artworks : Artwork[]
    links : string[]
    createdAt : string
}