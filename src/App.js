// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';


const GET_LOCATIONS = gql`
  query GetLocations{
    results {
      gender
    }
  }
`;

function DisplayLocations() {
  const {loading, error,data } = useQuery(GET_LOCATIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.info.map(({gender}) => (
    <div >
      <p>{gender}</p>
    </div>
  ));
}

export default function episodesList() {
  return (
    <div>
      <h2>My first Apollo 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  );
}