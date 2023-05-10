import {gql} from "@apollo/client";

export const getArtistList = gql`
query Name($var: Type){
    queryName(var: $var){
        field1,
        field2
    }
}
`