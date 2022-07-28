import React, { useEffect } from 'react';
import TravelPost from '../../components/TravelPost';
import axios from 'axios';

const postData = [];
function Traveling() {
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get('http://localhost:8000/api/posts');
        data.data.forEach(i => postData.push(i));
      } catch (e) {
        console.error(e);
      }
    })();
  });
  postData.map(i => console.log(i.title));
  return (
    <div>
      {postData.map((i, idx) => {
        return (
          <TravelPost
            key={idx}
            // cateCity={i.cateCity}
            // id={i.id}
            // img={i.mainImg}
            // markedData={i.markedData}
            title={i.title}
            userId={i.userId}
          />
        );
      })}
    </div>
  );
}

export default Traveling;
