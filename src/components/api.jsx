import { useQuery, gql } from "@apollo/client";
import { useState, useEffect } from "react";
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

function DisplayLine(i) {
  if (i <= 9) return <div className="line" />;
}

function DisplayForMobiles(data) {
  var i = 0;
  return data.episodesByIds.map(({ episode, air_date, name }) => (
    <div>
      <li className="episodes">{episode}</li>
      <div style={{ display: "none" }}>{i++}</div>
      <li className={isO(i)}>{name}</li>
      <p className="date">{air_date}</p>
      {DisplayLine(i)}
    </div>
  ));
}

function GetData() {
  const { loading, error, data } = useQuery(getEpisodes);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (windowSize <= 719) return <div>{DisplayForMobiles(data)}</div>;

  return (
    <div className="apiContainer">
      <div className="columns">{DisplayEpisodes(data)}</div>
      <div className="line" />
      <div className="columns">{DisplayNameAndDate(data)}</div>
    </div>
  );
}

export default function Api() {
  return <GetData />;
}
