import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 40, rating: 7) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;
