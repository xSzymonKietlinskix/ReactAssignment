// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import "./styles.css";

const getEpisodes = gql`
  query {
    episodesByIds(ids: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41]) {
      episode
      air_date
      name
    }
  }
`;

function DisplayNames() {
  const { loading, error, data } = useQuery(getEpisodes);
  return data.episodesByIds.map(({ episode, air_date, name }) => (
    <li>{name}</li>
  ));
}

function DisplayEpisodes() {
  const { loading, error, data } = useQuery(getEpisodes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.episodesByIds.map(({ episode, air_date, name }) => (
    <div>
      <li className="episodes">{episode}</li>
    </div>
  ));
}

export default function Api() {
  return (
    <div style ={{marginTop: 68}}>
      <DisplayEpisodes />
    </div>
  );
}
