// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import './styles.css'



const GET_LOCATIONS = gql`
query {
    episodesByIds(ids: [32,33,34,35,36,37,38,39,40,41]) {
      episode
    }}
`;

function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return data.episodesByIds.map(({episode}) => (
      <div>
        <li className='episodes'>{episode}</li>
        <br />
      </div>
    ));
  }









  export default function Api() {
    return (
      <div>
        <h2>My first Apollo app 🚀</h2>
        <br/>
        <DisplayLocations />
      </div>
    );
  }
