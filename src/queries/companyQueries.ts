import {gql} from "@apollo/client";

export const getCompanies = gql`
query Companies($data: AllCompaniesInput!) {
  companies(data: $data) {
    id
    name
    description
    links {
      id
      kind
      url
    }
    kind
    details
    mediaSlides
  }
}
`
export const getCompany = gql`
query Company($companyId: ID!) {
  company(companyId: $companyId) {
    id
    name
    description
    links {
      id
      kind
      url
    }
    kind
    details
    mediaSlides
  }
}
`