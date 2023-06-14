import { gql } from "@apollo/client";

export const getExamplesList = gql`
query Artists($data: AllArtistsInput!) {
  artists(data: $data) {
      id
      name
  }
}

`;

export const getExampleInfo = gql`
query Artists($artistId: ID!) {
  artist(artistId: $artistId) {
    id
    name
    description
    links

    artworks {
      assetUrl
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