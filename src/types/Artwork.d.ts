export interface Artwork{
    id : string
    title : string
    description : string
    kind :  'BOOK' | 'MUSIC' | 'PHOTO' | 'PICTURE' | 'VIDEO'
    assetUrl : string
    createdAt : string
    isPublished : boolean
    viewCount : number
}