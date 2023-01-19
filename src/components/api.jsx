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

function isO(i) {
  var myStyle = i % 2 === 0 ? "nameGreen" : "nameBlue";
  return myStyle;
}

function DisplayEpisodes(data) {
  return data.episodesByIds.map(({ episode }) => (
    <li className="episodes">{episode}</li>
  ));
}

function DisplayNameAndDate(data) {
  var i = 0;
  return data.episodesByIds.map(({ air_date, name }) => (
    <div>
      <div style={{ display: "none" }}>{i++}</div>
      <li className={isO(i)}>{name}</li>
      <p className="date">{air_date}</p>
    </div>
  ));
}

function GetData() {
  const { loading, error, data } = useQuery(getEpisodes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="apiContainer" style={{ marginTop: 77 }}>
      <div className="columns">{DisplayEpisodes(data)}</div>
      <div className="line" />
      <div className="columns">{DisplayNameAndDate(data)}</div>
    </div>
  );
}

export default function Api() {
  return <GetData />;
}
