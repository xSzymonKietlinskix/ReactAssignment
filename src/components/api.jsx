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

function DisplayNames() {
  const { loading, error, data } = useQuery(getEpisodes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  var isOdd = true;
  var myStyle;
  var i = 0;

  return data.episodesByIds.map(({ episode, air_date, name }) => (
    <div>
      <div style={{ display: "none" }}>{i++}</div>
      <div>
        <li className={isO(i)}>{name}</li>
        {console.log(isO(i))}
      </div>
      <div className="date">
        <p>{air_date}</p>
      </div>
    </div>
  ));
}

function DisplayEpisodes() {
  const { loading, error, data } = useQuery(getEpisodes);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  var isOdd = true;
  var myStyle;
  var i = 0;

  return data.episodesByIds.map(({ episode, air_date, name }) => (
    <div>
      <div>
        <li className="episodes">{episode}</li>
      </div>
    </div>
  ));
}

export default function Api() {
  return (
    <div className="api" style={{ marginTop: 77 }}>
      <div className="test">
        <DisplayEpisodes />
      </div>
      <div className="line" />
      <div className="test">
        <DisplayNames />
      </div>
    </div>
  );
}
