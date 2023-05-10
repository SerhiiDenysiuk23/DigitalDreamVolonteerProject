import { gql } from "@apollo/client";

export const getExamplesList = gql`
  query Artists {
    artists {
      id
      name
      links
      description
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
  }
}
`;
