import { gql } from "@apollo/client";

export const getArtistsList = gql`
query Artists($data: AllArtistsInput!) {
  artists(data: $data) {
      id
      name
      description
      imageUrl
  }
}
`;

export const getArtistInfo = gql`
query Artist($artistId: ID!) {
  artist(artistId: $artistId) {
    id
    name
    description
    imageUrl
    artworks {
      id
      kind
      title
      assetUrl
      description
      isPublished
    }
    links {
      id
      kind
      url
    }
  }
}
`;
export const getArts = gql`
query Artists($artistId: ID!) {
  artist(artistId: $artistId) {
    artworks {
      assetUrl
    }
    
  }
}
`;