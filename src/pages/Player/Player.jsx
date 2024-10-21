// import React, { useEffect } from "react";
// import "./Player.css";
// import back_arrow_icon from "../../assets/back_arrow_icon.png";

// const Player = () => {

//   const [apiData,setApiData]=useEffect({name:"",
//     key:"",
//     published_at:"",
//     typeof:""

//   })
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzOTIxNDUwNmM5ODBkZDExMTgyY2QwYTEzMWFlMiIsIm5iZiI6MTcyOTE2MjY2OC44NzA0NjcsInN1YiI6IjY3MGY4NzQ3MDE5ZjNiYzViMTFiZGM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9dqOOAtjM1fynKv5UApIQAVq5Z5NWbR-V6TRLkyuWoI",
//     },
//   };

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/933260/videos?language=en-US",
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setApiData(response.results[0]))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="player">
//       <img src={back_arrow_icon} />


//       <iframe
//         width="90%"
//         height="90%"
//         src="https://www.youtube.com/embed/S7LvZZNq4ys?start=3"
//       ></iframe>

//       <div className="player-info">
//         <p>apiData.published_at</p>
//         <p>apiData.key</p>
//         <p>apiData.typeof</p>
//       </div>
//     </div>
//   );
// };

// export default Player;


import React, { useState, useEffect } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {

  const {id} =useParams();
  const navigate =useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGEzOTIxNDUwNmM5ODBkZDExMTgyY2QwYTEzMWFlMiIsIm5iZiI6MTcyOTE2MjY2OC44NzA0NjcsInN1YiI6IjY3MGY4NzQ3MDE5ZjNiYzViMTFiZGM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9dqOOAtjM1fynKv5UApIQAVq5Z5NWbR-V6TRLkyuWoI",
    },
  };

  useEffect(() => {
    fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0])) // Setting first result
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      {/* <img src={back_arrow_icon} alt="Back Arrow" onClick={()=>{navigate(-2)}}/> */}
      <img src={back_arrow_icon} alt="Back Arrow" onClick={() => navigate("/")} />

      <iframe
        width="90%"
        height="90%"
        // Dynamically setting the YouTube video source using the key from apiData
        src={`https://www.youtube.com/embed/${apiData.key}`}
        // src="https://www.youtube.com/embed/S7LvZZNq4ys?start=3"
        allowFullScreen
        title="Video Player"
      ></iframe>

      <div className="player-info">
        <p>Published At: {apiData.published_at.slice(0,10)}</p>
        <p>Video Key: {apiData.key}</p>
        <p>Type: {apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;

